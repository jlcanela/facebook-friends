pipeline {
    agent any 

    stages {
        stage('Build') { 
            steps { 
                sh 'echo make' 
            }
        }
        stage('Test'){
            steps {
                sh 'echo make check'
                junit 'reports/**/*.xml' 
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo make publish'
            }
        }
    }
}
