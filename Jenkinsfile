pipeline {
    agent any 
    stages {
        stage("run test") {
            steps { 
                echo 'executing npm...'
                nodejs('NodeJS') {
                    sh 'npm install'
                    sh 'npx playwright install'
                    sh 'set PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml & npx playwright test --reporter=junit'
                }
            }
        }
    }
}
