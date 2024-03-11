pipeline {
  agent { 
        node {
            label 'docker-agent-alpine'
            }
      }
       triggers {
        pollSCM 'H/5 * * * *'
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
                sh 'docker'

            }
        }
        stage('Test') {
            steps {
                sh 'echo done'
            }
        }
    }
}
