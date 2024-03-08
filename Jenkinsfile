pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                 scripts{
                    sh 'docker build --pull --rm -f "Dockerfile" -t myeconet:latest "."'
                }
            }
        }
        stage('Test') {
            steps {
                scripts{
                    sh ''
                }
            }
        }
    }
}
