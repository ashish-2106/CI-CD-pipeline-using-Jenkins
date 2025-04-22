pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                // This step is optional if you're using 'Pipeline script from SCM'
                git branch: 'main', url: 'https://github.com/ashish-2106/CI-CD-pipeline-using-Jenkins.git'
                echo 'Code pulled from GitHub'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Build Complete') {
            steps {
                echo '🎉 Build and test successful!'
            }
        }
    }
}
