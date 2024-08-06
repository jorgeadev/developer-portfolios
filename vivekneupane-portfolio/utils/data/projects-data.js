import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 3,
        name: 'Bamboo-Crypto Investing',
        description: 'I worked as a Senior Software Engineer on an app that provides a simple and effortless way to start investing in crypto, one transaction at a time. My role focused primarily on front-end and mobile app development using ReactJS and React Native.',
        tools: ['React', 'React Native', 'AWS Amplify', 'Customer IO','Intercom', 'EC2', 'React Query', 'Snow Flake', 'Jira', 'Cronjob','Firebase'],
        code: '',
        role: 'Senior Software Engineer',
        demo: ['https://www.getbamboo.io/'],
        image: realEstate,
    },
    {
        id: 1,
        name: 'Medicos PDF Apps',
        description: "This app was designed for medical students, as a social e-learning platform. I was responsible for product development of 4 mobile apps using react native. And a social learning platform website using React. I created a custom editor in React and platform to extract each pdf page as images.",
        tools: ['React', 'React Native', 'React Query','Firebase', 'Express', 'MongoDB',  'Redux', 'AWS', 'JS', 'Image Magik', 'NodeJs'],
        role: 'Chief Technology Officer',
        code: 'https://medicos-pdf-qr72-pndtuukob-vivekneupane11.vercel.app/',
        demo: ['https://play.google.com/store/apps/details?id=com.rjl.bookapp&hl=en','https://medicos-pdf-qr72-pndtuukob-vivekneupane11.vercel.app/'],
        image: crefin,
    },
    {
        id: 2,
        name: 'Jhigubazar',
        description: 'Jhigubazar is a free online marketplace that allows users to buy, sell, and donate a variety of new or used items. In this role, I was primarily responsible for backend logic, including deployment using AWS EC2, implementing cron jobs, indexing MongoDB queries, and implementing geospatial queries, among other tasks. ',
        tools: ['NextJS', 'Mongodb', "Google Maps", "NestJS", "TypeScript", "GeoSpatical Query", "AWS S3", "CronJobs", "SSR"],
        role: 'Full Stack Developer',
        code: '',
        demo: ['https://www.jhigubazar.com/tabs/explore'],
        image: travel,
    },
   
    {
        id: 4,
        name: 'REACTJS-EDITOR',
        description: "I created a cool npm package for ReactJS that allows users to highlight text, make text bold, and add comments to text. This library showcases my frontend skills effectively.",
        tools: ['ReactJS','ts','javascript','html','css','nvm','npm'],
        code: '',
        demo: ['https://reactjs-editor-demo.vercel.app/','https://www.npmjs.com/package/reactjs-editor'],
        image: ayla,
        role: 'Author',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },