import { GoDeviceDesktop } from "react-icons/go";
import { MdOutlineAppSettingsAlt, MdOutlineDesignServices } from "react-icons/md";
import { SiAdobeindesign } from "react-icons/si";

export const ABOUT = {
    title: "About Me",
    name: "Hassan Ahmed",
    description: "I'm a Experienced Full Stack Web developer with over 2 years of experience in software industry. Excellent reputation for resolving problems and improving customer satisfaction. I'm a Full Stack Web developer to help you to build your personal website with seamless customization. I've worked on many complex back-ned project and I've been learning every day. I'm Highly proficient in both front-end and back-end frameworks like Next.js & Express.js . I can work and manage from development to test to deployment & my another expertise is, I write very clean and readable code.",
    exports: ['JavaScript', 'React', 'Mern'],
    image: "/Asset/me.png",
    services: [
        {
            title: "Front-end",
            text: "I have experience in building websites and applications using the latest technologies like Tailwind CSS, React.js & Next.js",
            icon: <GoDeviceDesktop size={33} />
        },
        {
            title: "Back-end",
            text: "As a Back-End developer, I have experience in building RESTful APIs using Node.js, Express, MongoDB, MySQL, Firebase, Firestore",
            icon: <MdOutlineDesignServices size={33} />
        },
        {
            title: "Mobile Apps",
            text: "I have experience in building Full Stack  mobile applications using React Native & Node.js",
            icon: <MdOutlineAppSettingsAlt size={33} />
        },
        {
            title: "Full-Stack",
            text: "As a Full Stack web developer, I have experience in building High Quality applications using React.js, Next.js, Node.js, MongoDB, MySql & TypeScript",
            icon: <SiAdobeindesign size={33} />
        },
    ]
}