pipeline {
    agent {
        docker
            {
                image "node:24"
            }
    }
    stages {
        stage("Mi primera etapa"){
            steps{
                sh "npm install"
            }
        }        
    }
}