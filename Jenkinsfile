pipeline {
  agent any
  tools {
    nodejs "NodeJS-16"  // The name you gave in Global Tool Config
  }
  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/your-username/selenium-js-cucumber.git'
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }
  }
  post {
    always {
      junit '**/reports/*.xml'  // If you set up JUnit/Cucumber reports
    }
  }
}