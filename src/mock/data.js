import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Muhammad Wahaj Mubeen', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Muhammad Wahaj Mubeen',
  subtitle: 'I am a Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1JxAbbnK3BHs5Ir5EwnpTfJlRr6oOBvya/view?usp=sharing' || 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'covid19.PNG',
    title: 'COVID 19 TRACKER',
    info: '',
    info2: '',
    url: 'http://covid19tracker-wahajmubeen.surge.sh/',
    repo: 'https://github.com/WahajMubeen341/Covid19-Tracker.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'expensetracker.PNG',
    title: 'EXPNESE TRACKER',
    info: '',
    info2: '',
    url: 'http://expensetracker-wahajmubeen.surge.sh/',
    repo: 'https://github.com/WahajMubeen341/ExpenseTracker.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'memories.PNG',
    title: 'Posting App',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/WahajMubeen341/Posting-app.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'iwahajmubeen341@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/wahaj_03',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wahajmubeen341/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/WahajMubeen341',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
