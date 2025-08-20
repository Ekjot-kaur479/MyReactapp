pipeline {
    agent any

    environment {
        SSH_KEY   = 'ec2-ssh-key'          // Jenkins credential ID for your EC2 SSH key
        EC2_USER  = 'ubuntu'               // Your EC2 username
        EC2_HOST  = '54.163.39.50'         // Replace with your EC2 Public IP
        DEPLOY_DIR = '/var/www/myreactapp' // Deployment directory on EC2
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'git@github.com:Ekjot-kaur479/MyReactapp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                sudo rm -rf /var/www/html/*
                sudo cp -r dist/* /var/www/html/
                echo "Deployment completed!"
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Deployment completed successfully!"
        }
        failure {
            echo "❌ Deployment failed. Check logs!"
        }
    }
}

