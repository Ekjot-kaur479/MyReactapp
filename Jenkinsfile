pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main',
                    url: 'git@github.com:Ekjot-kaur479/MyReactapp.git',
                    credentialsId: 'github-ssh'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                sh 'rm -rf /var/www/html/*'
                sh 'cp -r build/* /var/www/html/'
            }
        }
    }
}

