pipeline {
  agent any
  tools {
    nodejs "nodejs24"  // The name you gave in Global Tool Config
  }
  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/chandanashilpa/selenium-JS/'
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