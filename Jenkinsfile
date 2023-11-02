pipeline {
    agent any 
    stages {
        stage("run test") {
            steps { 
                echo 'executing test...'
                build('http://localhost:8080/job/PW-Project/') {
                }
            }
        }
    }
}
