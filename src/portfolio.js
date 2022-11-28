const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/codeforcause123',
  title: 'AR.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aayush Raj',
  role: 'Full Stack Developer',
  description:
    'Im Aayush, a passionate coder bringing you programming and design from the future. I am experienced in developing web and desktop applications including full front end design. This includes brand identity, graphics and illustrations. Interested in Competitive programming.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/aayush130702/',
    github: 'https://github.com/codeforcause123',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Calculator App',
    description:
      'A simple calculator which can perform basic arithmetic operations like addition, subtraction, multiplication, or division depending upon the user input using ReactJS.',
    stack: ['Tailwind', 'JS', 'React'],
    sourceCode: 'https://github.com/codeforcause123/React-Calculator',
    livePreview: 'calcv1.netlify.app',
  },
  {
    name: 'URL Shortener and QR Code Generator',
    description:
      'A simple NodeJS Url Shortner converts a big URL into a short URL and also generates the QR Code of that URL.',
    stack: ['Tailwind', 'JS', 'React'],
    sourceCode: 'https://github.com/codeforcause123/Shortened-URL-QR-Code-generator',
    livePreview: 'https://github.com',
  },
  {
    name: 'Clock',
    description:
      'A Digital Clock that displays the current local time',
    stack: ['Tailwind', 'JS', 'React'],
    sourceCode: 'https://github.com/codeforcause123/Clock-Net',
    livePreview: 'clockv1.netlify.app',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Tailwind',
  'C++',
  'Python',
  'SQL',
  'MongoDB',
  'ExpressJS',
  'Full Stack',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'aayush.130702@gmail.com',
}

export { header, about, projects, skills, contact }
