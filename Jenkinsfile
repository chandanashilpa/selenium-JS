pipeline {
  agent any
  tools {
    nodejs "nodejs24"  // The name you gave in Global Tool Config
  }
  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/chandanashilpa/selenium-JS.git'
      }
    }
    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }
    stage('Run Tests') {
      steps {
        bat 'npm test'
      }
    }
  }

}