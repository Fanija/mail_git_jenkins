pipeline {
    agent any 
    stages {
        stage("run test") {
            steps { 
                echo 'executing test...'
                build('PW-Project') {
                }
            }
        }
    }
}
