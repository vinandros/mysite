import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kevin A.', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Personal Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kevin Alvarado Varela,',
  subtitle: "I'm a Frontend Web Developer.",
  cta: '“Figure out what you’re most passionate about in life and what you’re good at. And the mixture between those two and then you should give it your all, all the time.” (AVICII)',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a self-taught web developer with a strong eye on new technologies, looking for new opportunities to grow up and improve my skills. I enjoy listening to music and play video games, also I spend time reading about personal grow up.',
  paragraphTwo: "I'm from Costa Rica, I came from a little place called La Tigra. I got my first computer at the age of 13 and I started programming at the school, this caught my curiosity and my interest in technology start to grow up, following this I studied like a computer engineer at Technological Institute of Costa Rica and now my passion is web development.",
  paragraphThree: 'I want to keep learning about this amazing world and become a better professional.',
  resume: 'https://www.canva.com/design/DAEArOyQdHE/SWoZagiuPCz5h7i36USNgA/view?utm_content=DAEArOyQdHE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tributePage.png',
    title: 'Tribute Page',
    info: 'An special site to share the history of my favorite DJ.',
    info2: "He was one of the best DJs of the world, I'm a big fan of his music, he always put really good energy and given a good message.",
    url: 'https://avicii.vinandros.com/',
    repo: 'https://github.com/vinandros/tributepage', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'productLandingPage.png',
    title: 'Product Landing Page for Toyota Hilux',
    info: 'This is one of my favorites site I had build, I really like this car and I definitely will buy it.',
    info2: "Wherever your journey, Hilux will take you there. With a range of powerful, efficient engines and the ability to tow up to 3.5 tonnes, it has the capacity to move mountains. A new 2.8 litre diesel engine, producing 204 DIN hp and up to 500 Nm of torque.",
    url: 'https://product.vinandros.com/',
    repo: 'https://github.com/vinandros/productlandingpage', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'technicalDocumentation.png',
    title: 'React Technical Documentation',
    info: 'This is my favorite library to build software, I like the way it works and the big support given for Facebook and community.',
    info2: 'React is a JavaScript library for building user interfaces',
    url: 'https://docu.vinandros.com/',
    repo: 'https://github.com/vinandros/technicaldocumentation', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'drumMachine.png',
    title: 'Drum Machine',
    info: 'A basic application that use differents sounds to emulate a drum pad.',
    info2: 'It´s a project to improve my skill using React and Webpack.',
    url: 'https://drum.vinandros.com/',
    repo: 'https://github.com/vinandros/drummachine', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'markdown.png',
    title: 'Markdown Editor',
    info: 'A Markdown Editor using Marked.js, React and Webpack.',
    info2: '',
    url: 'https://drum.vinandros.com/',
    repo: 'https://github.com/vinandros/drummachine', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'randomQuote.png',
    title: 'Random Quote',
    info: 'A basic site to generate random quotes to share using twitter or inspire your day.',
    info2: '',
    url: 'http://quote.vinandros.com/',
    repo: 'https://github.com/vinandros/randomquote', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's built something together!!",
  btn: '',
  email: 'kevinandres.126@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/vinandros/',
    },
    {
      id: nanoid(),
      name: 'free-code-camp',
      url: 'https://www.freecodecamp.org/vinandros',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kevin-alvaradov/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/vinandros',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
