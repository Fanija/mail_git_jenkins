pipeline {
    agent any 
    stages {
        stage("run test") {
            steps { 
                echo 'executing test...'
                nodejs('NodeJS') {
                    batch 'npm install'
                }
            }
        }
    }
}
