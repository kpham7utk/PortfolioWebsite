import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated full stack developer with a passion for building efficient and scalable web applications. With one year of hands-on experience, I have developed strong skills in front-end technologies like React and Next.js, along with back-end development using Node.js and MySQL. My goal is to leverage my growing expertise to create innovative solutions that enhance user experiences and contribute to business success.`;

export const ABOUT_TEXT = `I am a dedicated and adaptable full-stack developer with a passion for crafting efficient and user-friendly web applications. My experience spans a range of technologies, including React, Next.js, Node.js, MySQL, SQLite, and Django. My journey in web development began with a deep curiosity about how things work, evolving into a career where I continually seek to learn and embrace new challenges. I excel in collaborative environments and enjoy tackling complex problems to deliver high-quality solutions. Beyond coding, I stay active, explore new technologies, and enjoy video games`;

export const EDUCATION_TEXT = `
    <div>
        <h4 class="font-semibold text-lg">Bachelor of Science</h4>
        <p>Major in Biochemistry and Molecular Biology</p>
        <p>Minor in Japanese</p>
        <p class="text-sm text-neutral-500">University of Tennessee, Knoxville, TN, USA</p>
        <p class="text-sm text-neutral-500">08/2017 - 08/2022</p>
    </div>
    <div class="mt-6">
        <h4 class="font-semibold text-lg">Online Master's of Science</h4>
        <p>Major in Computer Science</p>
        <p>Concentration in Software Engineering</p>
        <p>Graduating in December 2024</p>
        <p class="text-sm text-neutral-500">University of Tennessee, Knoxville, TN, USA</p>
        <p class="text-sm text-neutral-500">01/2024 - Current</p>
    </div>
`;

export const EXPERIENCES = [
  {
    year: "January 2024 - Present",
    role: "Graduate Assistant Web Developer",
    company: "University of Tennessee at Knoxville",
    description: `As a Graduate Assistant Web Developer at the University of Tennessee at Knoxville, I designed, developed, and maintained web applications using PHP, ensuring high performance and responsiveness. I recreated PHP webforms within TDX's iPaaS, enhancing data integration processes across various applications. My role also involved utilizing TeamDynamix for project management, maintaining databases, conducting thorough testing, and developing comprehensive documentation to support ongoing maintenance and user training.`,
    technologies: ["PHP", "HTML", "CSS", "TeamDynamix", "JavaScript"],
  },
  {
    year: "August 2023 - January 2024",
    role: "Office of Innovative Technologies Helpdesk Assistant",
    company: "University of Tennessee at Knoxville",
    description: `At the OIT Helpdesk, I provided comprehensive support for university applications and platforms. I offered advanced troubleshooting and resolution services for both university-owned and student-owned computers, addressing complex issues related to hardware, software, email systems, NetID management, and Duo Two-Factor authentication. Additionally, I specialized in supporting the Microsoft Office suite, conducted training sessions, created user guides, and efficiently managed support incidents using a ticketing system to ensure timely and effective resolutions.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Grocery Guru",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Django", "MySQL", "JSON", "RESTful API"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "ISA Emulator Project",
    image: project3,
    description:
      "Recreation of a RISC-V processor in Python as a part of a graduate level course",
    technologies: ["Python"],
  },
  {
    title: "Student Planner",
    image: project4,
    description:
      "An app that allowed students to track deadlines, lectures, and take notes.",
    technologies: ["React", "HTML", "CSS", "MySQL"],
  },
];

export const CONTACT = {
  email: "kpham7@vols.utk.edu",
};
