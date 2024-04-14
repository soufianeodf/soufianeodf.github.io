const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://soufianeodf.github.io/',
  title: 'Soufiane ODF',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Soufiane OUDDAF',
  role: 'Software Engineer',
  description:
    'I started my journey as a computer science student, and there I discovered my passion toward the programming and web development in general. Ever since I have fallen in love with programming and spend most of my days taking my craft to the next level.',
  resume: 'https://drive.google.com/file/d/1xQcb8ikGVYZKxOGTWXcEA6zKcrVCZsA2/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/soufiane-ouddaf-396348178/',
    github: 'https://github.com/soufianeodf',
    youtube: 'https://www.youtube.com/channel/UC7uhy5NJ3Cenz0kNNmtsw1g',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'NBA Mobile App',
    description:
      'An iOS and Android NBA app created with React Native.',
    stack: ['React Native'],
    sourceCode: 'https://github.com/soufianeodf/react-native-NBA',
    livePreview: '#',
  },
  {
    name: 'Medical Record Mobile App',
    description:
      'An iOS and Android Medical Records app created with React Native.',
    stack: ['React Native'],
    sourceCode: 'https://github.com/soufianeodf/react-native-medical-record',
    livePreview: '#',
  },
  {
    name: 'Calculator Mobile App',
    description:
      'An expo calculator app created with React Native.',
    stack: ['React Native'],
    sourceCode: 'https://github.com/soufianeodf/react-native-calculator',
    livePreview: '#',
  },
  {
    name: 'Clickstream Analysis',
    description:
      'A proof of concept about collecting real-time clickstream data.',
    stack: ['Javascript', 'Divolte Collector', 'Apache Kafka', 'Kafka Streams', 'Apache Druid', 'Apache Superset'],
    sourceCode: 'https://github.com/soufianeodf/youtube-divolte-kafka-druid-superset',
    livePreview: 'http://soufianeodf.tech',
  },
  {
    name: 'Simple Clickstream',
    description:
      'A proof of concept about collecting clickstream data.',
    stack: ['Javascript', 'Divolte Collector', 'Apache Kafka', 'Java 8'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Stock Management',
    description:
      'A simple stock management system project.',
    stack: ['JSF', 'Primefaces', 'Jasper report', 'Spring Core', 'Spring Security', 'Spring Boot', 'Spring Data', 'Hibernate', 'Maven', 'Mysql'],
    sourceCode: 'https://github.com/soufianeodf/spring-boot-asustech',
    livePreview: '#',
  },
  {
    name: 'Stock Management',
    description:
      'A simple stock management system project.',
    stack: ['Struts 2', 'Spring Core', 'Spring Boot', 'Spring Data', 'Hibernate', 'Maven', 'Mysql'],
    sourceCode: 'https://github.com/soufianeodf/spring-boot-asustech-stock-management',
    livePreview: '#',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'Bootstrap 4',
  'React',
  'Redux',
  'WordPress',
  'Angular 2+',
  'Git',
  'CI/CD',
  'Java EE',
  'JSF',
  'STRUTS',
  'HIBERNATE',
  'Spring Core',
  'Spring MVC',
  'Spring Security',
  'Spring Rest',
  'Spring Boot',
  'Spring Data JPA',
  'PHP OOP',
  'Laravel',
  'Lumen',
  'Node.js',
  'Express.js',
  'Mysql',
  'Oracle',
  'Firebase',
  'PostgreSQL',
  'MongoDB',
  'React Native',
  'Divolte Collector',
  'Apache Kafka',
  'Apache Superset',
  'Ansible',
  'Docker',
  'Docker Swarm',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'soufiane.odf@gmail.com',
}

export { header, about, projects, skills, contact }
