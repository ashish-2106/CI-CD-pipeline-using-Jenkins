pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Collect Form Data') {
            steps {
                script {
                    def userInput = input(
                        id: 'UserData', message: 'Please fill out the form', parameters: [
                            string(name: 'Name', defaultValue: 'Ashish', description: 'Your Full Name'),
                            string(name: 'Email', defaultValue: 'ashish.jhajharia2106@gmail.com', description: 'Your Email'),
                            text(name: 'Message', defaultValue: 'Hello Jenkins!', description: 'Your Custom Message')
                        ]
                    )

                    // Capture form data
                    def name = userInput['Name']
                    def email = userInput['Email']
                    def message = userInput['Message']

                    // Store the form data in a variable
                    currentBuild.description = "Name: ${name}, Email: ${email}, Message: ${message}"

                    echo '''
===========================================
📝 Form Data Collected:
-------------------------------------------
Name: ${name}
Email: ${email}
Message: ${message}
===========================================
'''
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo '🧪 Running tests...'
                sh 'npm test'
            }
        }

        stage('🚀 Build Success - Project Deployed!') {
            steps {
                echo '''
===========================================
✅ CI/CD Pipeline Executed Successfully!
🚀 Node.js App Build & Test Completed
📦 Dependencies Installed
🧪 Tests Passed
🖥️ Ready for Deployment or Delivery!
===========================================
'''
            }
        }
    }
}
