pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm  // Detta steg hämtar källkoden från SCM (Source Control Management) som du konfigurerade i Jenkins-jobbet
            }
        }

        stage('Install') {
            steps {
                echo 'Installing project dependencies...'
                sh 'npm install'  // Installerar npm-beroenden
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm run build'  // Bygger din React-applikation
            }
        }

        // Normalt skulle du ha ett 'Test'-steg här, men eftersom du inte har några tester så hoppar vi över det

        stage('Archive') {
            steps {
                echo 'Archiving artifacts...'
                archiveArtifacts artifacts: 'build/**/*', fingerprint: true  // Arkiverar byggd filer som Jenkins-artefakter
            }
        }

        // 'Deploy'-steget lämnas också tomt eftersom du inte har angett någon specifik deploy-miljö eller metod
    }

    post {
        always {
            echo 'Build completed.'
        }
    }
}
