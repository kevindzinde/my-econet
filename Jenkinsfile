pipeline {
    agent any
    tools{
        nodejs '21.7.0'
        docker 'latest'
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
                sh 'npm test'
            }
        }
    }
}
