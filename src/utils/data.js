import alexGreenwood from "../assets/alex-greenwood.png";
import leahWilliamson from "../assets/leah-williamson.png";
import bookingIasi from "../assets/booking-iasi.png";
import urbanOasis from "../assets/urban-oasis.png";

import alexHero from "../assets/alex-greenwood/hero.png";
import alexDesktop1 from "../assets/alex-greenwood/desktop-1.png";
import alexDesktop2 from "../assets/alex-greenwood/desktop-2.png";
import alexPhone1 from "../assets/alex-greenwood/phone-1.png";
import alexPhone2 from "../assets/alex-greenwood/phone-2.png";
import alexPopUP from "../assets/popups/ALEX GREENWOOD POP UP.png";

import bookingHero from "../assets/booking-iasi/hero.png";
import bookingDesktop1 from "../assets/booking-iasi/desktop-1.png";
import bookingDesktop2 from "../assets/booking-iasi/desktop-2.png";
import bookingPhone1 from "../assets/booking-iasi/phone-1.png";
import bookingPhone2 from "../assets/booking-iasi/phone-2.png";
import bookingPopUP from "../assets/popups/BOOKING IASI POP UP.png";


import leahHero from "../assets/leah-williamson/hero.png";
import leahDesktop1 from "../assets/leah-williamson/desktop-1.png";
import leahDesktop2 from "../assets/leah-williamson/desktop-2.png";
import leahPhone1 from "../assets/leah-williamson/phone-1.png";
import leahPhone2 from "../assets/leah-williamson/phone-2.png";
import leahPopUP from "../assets/popups/LEAH WILLIAMSON POP UP.png";


import urbanHero from "../assets/urban-oasis/hero.png";
import urbanDesktop1 from "../assets/urban-oasis/desktop-1.png";
import urbanDesktop2 from "../assets/urban-oasis/desktop-2.png";
import urbanPhone1 from "../assets/urban-oasis/phone-1.png";
import urbanPhone2 from "../assets/urban-oasis/phone-2.png";
import urbanPopUP from "../assets/popups/URBAN OASIS POP UP.png";



const projectsData = [
    {
  id: 1,
  name: "NoteSphere",
  firstname: "Note",
  lastname: "Sphere",
  keywords: [
    "Education",
    "Learning",
    "Study Platform",
    "India",
    "Collaboration"
  ],
  skills: [
    "UX/UI Design",
    "Web Design",
    "Wireframing",
    "Figma",
    "Responsive Design"
  ],
  description:
    "NoteSphere is an educational collaboration platform that blends minimalist design with functional excellence. Created with students and teachers in mind, it offers a clean and intuitive interface that promotes seamless resource sharing, easy access to notes, and real-time communication—enhancing the academic experience for all users.",
  month: "July",
  year: "2024",
  details:
    "NoteSphere is designed to empower students and educators by providing a centralized platform to share notes, assignments, and learning materials. Built with user experience at its core, it ensures fast loading, clean navigation, and consistent performance across devices. Developed as part of an academic project, NoteSphere reflects a modern approach to digital education.",
  socials: {
    behance: {
      name: "Behance",
      link: "https://www.behance.net/gallery/203914117/ALEX-GREENWOOD-WEBSITE" // Update this link with NoteSphere's Behance project
    },
    instagram: {
      name: "Instagram",
      link: "https://www.instagram.com/p/C9xWaPBoH-t/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" // Update this if there's a specific NoteSphere Insta post
    }


    },
    image: alexGreenwood,
    hero: alexHero,
    gridImages: [alexDesktop1, alexPhone1, alexDesktop2, alexPhone2],
  },
  {
    id: 2,
    name: "NoteSphere",
    firstname: "Sai",
    lastname: "nalkasesm",
    keywords: [
      "education",
      "LEarning",
      "Collaboration",
      " mentor",
    ],
    skills: [
        "UX/UI Design",
        "Web Design",
        "Wireframing",
        "Figma"
    ],
    description:
      "",
    month: "APRIL",
    year: "2024",
    details: "s.",
    socials: {
        behance: {
            name: "Behance",
            link: "https://www.behance.net/gallery/197462525/Leah-Williamson"
        },
        instagram: {
            name: "Instagram",
            link: "https://www.instagram.com/p/C9t-Mmyoybn/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
        }
    },
    image: leahWilliamson,
    hero: leahHero,
    gridImages: [leahDesktop1, leahPhone1, leahDesktop2, leahPhone2],

  },
  {
    id: 3,
name: "Verxtra AI Personal Assistant",
firstname: "Verxtra",
lastname: "AI",
keywords: [
  "AI Personal Assistant",
  "Artificial Intelligence",
  "Machine Learning",
  "Natural Language Processing",
  "Automation",
],
skills: [
  "AI Development",
  "Machine Learning",
  "Natural Language Processing (NLP)",
  "Backend Development",
  "Frontend Development",
  "UX/UI Design",
  "Figma"
],
description:
  "Verxtra AI Personal Assistant is an upcoming project aimed at revolutionizing personal productivity through advanced AI-powered assistance. The assistant will leverage machine learning and natural language processing to automate daily tasks, schedule management, and provide intelligent responses to user queries.",
month: "JULY - DECEMBER",
year: "2025",
details:
  "The project will feature a fully functional AI assistant capable of understanding and responding to natural language commands. The assistant will be integrated with multiple platforms for seamless interaction, including web and mobile interfaces. Additionally, Verxtra will utilize cutting-edge machine learning algorithms to adapt and improve its performance over time. The project will be developed using the latest AI technologies, ensuring a robust and efficient user experience.",
socials: {
  figma: {
    name: "Figma",
    link: "https://www.figma.com/proto/VerxtraAI-DesignLink" 
  },
  github: {
    name: "Github",
    link: "https://github.com/saieshwarrr/VerxtraAI" 
  }
    },
    image: bookingIasi,
    hero: bookingHero,
    gridImages: [bookingDesktop1, bookingPhone1, bookingDesktop2, bookingPhone2],
  },
  {
    id: 5,
name: "Goan Flavors App",
firstname: "Goan",
lastname: "Flavors",
keywords: [
  "Fullstack Application",
  "Goa",
  "Food",
  "Culinary",
  "Recipes",
],
skills: [
  "Backend",
  "Frontend",
  "Mobile App Development",
  "Web Design",
  "Figma",
  "UI/UX Design"
],
description:
  "Goan Flavors is an upcoming mobile application designed to bring the authentic taste of Goa to your fingertips. The app will showcase a collection of traditional Goan recipes, food-related tips, and cultural stories, helping users explore the diverse culinary heritage of Goa.",
month: "AUGUST - DECEMBER",
year: "2025",
details:
  "The application will feature a user-friendly interface for browsing and discovering Goan dishes, with features such as recipe search, step-by-step cooking instructions, and an interactive user community to share experiences. Additionally, Goan Flavors will provide a platform for local chefs and food enthusiasts to showcase their culinary creations, promoting the rich culinary culture of Goa. The app will be built using modern mobile development frameworks and will focus on providing an engaging, seamless experience for users.",
socials: {
  figma: {
    name: "Figma",
    link: "https://www.figma.com/proto/GoanFlavors-DesignLink" // Replace with actual Figma link when available
  },
  github: {
    name: "Github",
    link: "https://github.com/saieshwarrr/goan-flavors-app" // Replace with actual Github link when available
  },
  instagram: {
    name: "Instagram",
    link: "https://www.instagram.com/GoanFlavors" 
  }
    },
    image: urbanOasis,
    hero: urbanHero,
    gridImages: [urbanDesktop1, urbanPhone1, urbanDesktop2, urbanPhone2],
  },
];

export default projectsData;
