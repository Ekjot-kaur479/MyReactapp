pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/var/www/html/myreactapp"
        EC2_USER   = "ubuntu"
        EC2_HOST   = "3.88.224.58"
        SSH_KEY    = "final-key"   // Jenkins credentials ID (SSH key for EC2)
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'git@github.com:Ekjot-kaur479/MyReactapp.git'
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
                sshagent (credentials: ['final1-key']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no $EC2_USER@$EC2_HOST 'sudo mkdir -p $DEPLOY_DIR && sudo rm -rf $DEPLOY_DIR/*'
                        scp -o StrictHostKeyChecking=no -r dist/* $EC2_USER@$EC2_HOST:$DEPLOY_DIR/
                    """
                }
            }
        }
    }

    post {
        success {
            echo "✅ React App Deployed Successfully to EC2 ($EC2_HOST)!"
        }
        failure {
            echo "❌ Build/Deploy Failed!"
        }
    }
}

