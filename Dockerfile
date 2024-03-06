# stage 1 : compile and build angular codebase

#use official node image as the base image
FROM node:latest as build

#set the working directory
WORKDIR /usr/local/app

#add the socurce code to app
COPY ./ /usr/local/app/

# install all the dependencies
RUN npm install

#generate the build of the application
RUN npm run build
#output



#Stage 2 : Serve app with nginx server
FROM nginx:latest
#use official nginx image as the base image
COPY --from=build /usr/local/app/dist/my-econet/browser /usr/share/nginx/html
#expose port
EXPOSE 80
