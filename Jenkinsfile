pipeline {
    agent any 
    stages {
        stage("run test") {
            steps { 
                echo 'executing test...'
                nodejs('NodeJS') {
                    bat 'npm install'
                    bat 'npx playwright install'
                    bat '''set PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml
npx playwright test --reporter=junit'''
                    bat 'C:\\Python38\\Scripts\\pip install junit2html'
                    bat 'C:\\Python38\\Scripts\\junit2html results.xml results.html'
                    junit allowEmptyResults: true, testResults: 'results.xml'
                    emailext attachLog: true, body: '${FILE, path="results.html"}', mimeType: 'HTML (text/html)', subject: 'Test Results', to: 'ntestntestovski@gmail.com '
                }
            }
        }
    }
}
