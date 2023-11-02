pipeline {
    agent any 
    stages {
        stage("run test") {
            steps { 
                echo 'executing npm...'
                nodejs('NodeJS') {
                    batch 'npm install'
                    batch 'npx playwright install'
                    batch 'set PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml & npx playwright test --reporter=junit'
                }
            }
        }
    }
}
