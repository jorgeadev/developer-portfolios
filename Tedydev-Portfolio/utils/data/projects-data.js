import hotel from "/public/lottie/hotel.json";
import urms from "/public/lottie/urms.json";
import bdmpro from "/public/lottie/bdmpro.json";
import eduvision from "/public/lottie/edu.json";



export const projectsData = [
  {
    id: 1,
    name: "Online Examination System Project - EduVision",
    description: `This web application streamlines management for educational institutions of all sizes, including private centers and schools. Technical Highlights: Built with ASP.NET Core MVC for a robust and scalable architecture; Beautiful, intuitive interface with multi-language support (more than 3 languages); Optimized for various devices, ensuring a smooth user experience.`,
    frameworks: ["ASP.NET Core MVC (.NET 6)"],
    tags: ["ASP.NET Core MVC (.NET 6)"],
    tools: ["MSSQL", "Bootstrap", "jQuery", "C#-LINQ", "Entity Framework Core"],
    role: "Full Stack Developer",
    code: "",
    demo: "https://youtu.be/zNIsZdTwGn4?si=nvg2ZewcoF5MISth",
    // image: eduvision,
    animation: eduvision,
  },
  {
    id: 2,
    name: "Business Device Management Professional – BDMPro",
    description:
      "A web application that provides device management and user administration features, decentralization - highly professional and full of important features.",
    tags: ["ASP.NET MVC"],
    frameworks: ["ASP.NET MVC"],
    tools: ["MSSQL", "Bootstrap", "jQuery", "C#-LINQ", "Entity Framework"],
    role: "Full Stack Developer",
    code: "",
    demo: "Sorry, please try again later",
    image: bdmpro,
    animation: bdmpro,
  },
  {
    id: 3,
    name: "User And Role Management System - URMS",
    description:
      "A web application that provides student management features, resources, question libraries, exams, etc. applicable to educational environments including schools and private education centers. Ensure high level of expertise and professionalism.",
    tags: ["ASP.NET Core MVC (.NET 6)", "ASP.NET MVC"],
    frameworks: ["ASP.NET Core MVC (.NET 6)", "ASP.NET MVC"],
    tools: ["C# LINQ", "jQuery", "Entity Framework Core", "Bootstrap"],
    code: "",
    role: "Full Stack Developer",
    demo: "Sorry, please try again later",
    // image: urms,
    animation: urms,
  },
  {
    id: 4,
    name: "Hotel Management & Booking – Beyond Hotel",
    description:
      "This project is to be a comprehensive hotel management system. It includes functionalities for room reservation, discount management, service ordering, and user authentication. The system also integrates with VNPay and Momo for payment processing and Firebase for user authentication and file storage. It also includes a chat feature for reservations and a rating system for rooms.",
    tags: ["ASP.NET MVC", "Web API"],
    frameworks: ["ASP.NET MVC", "Web API"],
    tools: ["Bootstrap", "Angular", "jQuery", "firebase"],
    code: "",
    demo: "https://youtu.be/wyU2-EkeE3k?si=nRBCHgU1o101AENZ",
    image: hotel,
    animation: hotel,
    role: "FrontEnd Developer",
  },
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
