pipeline {
    agent {
        docker{image 'node:latest'}
    }
    tools{
        nodejs '21.7.0'
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm version'
                sh 'npm install'
                sh 'npm run build'
                
            }
        }
        stage('Test') {
            steps {
                sh 'echo done'
            }
        }
    }
}
