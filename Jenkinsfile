pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build --pull --rm -f "Dockerfile" -t myeconet:latest "."'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
