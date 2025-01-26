const projects = [
  {
    id: "pma-grid",
    title: "pma-grid",
    description:
      "This was my first freelance project, completed while I was still in college. The task involved creating a grid-based system to organize the hierarchy of the Philippine Martial Arts (Arnis) organization. The project required designing an intuitive user interface to display relationships and positions within the organization clearly. Using React, I built a dynamic frontend, while Node.js, Express, and MongoDB powered the backend to handle data storage and retrieval efficiently. Bootstrap was utilized to ensure a responsive and visually appealing design. The project helped me solidify my foundational skills in full-stack development and gave me valuable experience in working on real-world requirements.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Bootstrap"],
    date: "March 2021",
    imageUrl: "/projects/freelance/pma-grid.png",
    type: "freelance",
    nda: false,
  },
  {
    id: "react-form-builder",
    title: "React Form Builder",
    description:
      "The React Form Builder is a web application that allows users to design custom forms through a GUI interface. Users can drag and drop elements, configure settings, and visually construct forms, which are then converted into code reflecting their design. The app was built using React for its modular and component-based architecture, while Tailwind CSS was used to style the interface with clean and modern aesthetics. Webpack was integrated to optimize the build process and ensure high performance. This project challenged me to create a seamless, interactive user experience and introduced me to advanced frontend development techniques.",
    technologies: ["React", "Tailwind CSS", "Webpack"],
    date: "May 2021",
    imageUrl: "/projects/freelance/react-form-builder.png",
    type: "freelance",
    nda: false,
  },
  {
    id: "mp-expense-app",
    title: "MP Expense App",
    description:
      "The MP-Expense App is a mobile application tailored for a client who wanted a personalized solution to track business expenses. Unlike generic expense trackers, this app allowed the client to store data on their private database for enhanced security and control. I developed the app using React Native for a cross-platform mobile experience, Nest.js for building the backend APIs, and Expo for faster development and testing. The app was deployed using Android Suite to ensure compatibility and reliability. This project taught me the importance of custom solutions for unique business needs and strengthened my mobile development skills.",
    technologies: ["React-Native", "Nest", "Expo", "Android Suite"],
    date: "October 2022",
    imageUrl: "/projects/freelance/react-form-builder.png", //no image
    type: "freelance",
    nda: false,
  },
  {
    id: "twice-shope",
    title: "Twice Shop",
    description:
      "An e-commerce web app for purchasing Twice merchandise. Features include product browsing, payment integration with Stripe, and a responsive design using React, Node.js, Express, MongoDB, and Material UI.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDb",
      "Stripe",
      "Material UI",
    ],
    date: "September 2022",
    imageUrl: "/projects/freelance/twiceshop.png",
    type: "freelance",
    nda: false,
  },
  {
    id: "habit-companion",
    title: "Habit Companion",
    description:
      "A web app that combines meeting and chat management for clients, similar to Google Calendar and Google Chat. Developed with React, Next.js, PostgreSQL, Twilio, Ruby on Rails, and ShadCN for robust functionality.",
    technologies: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Twilio",
      "Ruby on Rails",
      "ShadCN",
    ],
    date: "April 2023",
    imageUrl: "/projects/freelance/habit-companion.png",
    type: "freelance",
    nda: false,
  },
  {
    id: "deventa",
    title: "Deventa",
    description:
      "A Udemy-like platform where companies subscribe and enroll employees in curated courses. Features include video hosting via Mux, payment integration with Stripe, and seamless functionality using React, Next.js, MongoDB, AWS, and Twilio.",
    technologies: [
      "React",
      "Next.js",
      "MongoDb",
      "Twilio",
      "Stripe",
      "Mux",
      "AWS",
      "ShadCN",
    ],
    date: "April 2024",
    imageUrl: "/projects/freelance/deventa.png",
    type: "freelance",
    nda: false,
  },
  {
    id: "horny-neighbor",
    title: "Horny Neighbor",
    description:
      "An 18+ web app with roles for escorts, customers, and admins. Escorts can subscribe to advertise services, and customers can access relevant info. Built with React, Next.js, MongoDB, Twilio, CorePay, Hostinger, and ShadCN for smooth operations and secure payment handling.",
    technologies: [
      "React",
      "Next.js",
      "MongoDb",
      "Twilio",
      "CorePay",
      "Hostinger",
      "ShadCN",
    ],
    date: "June 2024",
    imageUrl: "/projects/freelance/horny-neighbor.png",
    type: "freelance",
    nda: false,
  },
  {
    id: "we-are-ayala",
    title: "Employee Assist Site/App",
    description:
      "Led the development of an internal CRM system for a large corporation.",
    technologies: ["Angular", "TypeScript", "Firebase", "RxJS"],
    date: "Jan 2022 - Present",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "fulltime",
    nda: true,
  },
  {
    id: "APMC",
    title: "Job Portal",
    description:
      "Contributed to the development of a cross-platform mobile app for task management.",
    technologies: ["React Native", "Redux", "GraphQL"],
    date: "Mar 2021 - Dec 2021",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "fulltime",
    nda: true,
  },
  {
    id: "t3",
    title: "Time Tracking Tool",
    description:
      "Led the development of an internal CRM system for a large corporation.",
    technologies: ["Angular", "TypeScript", "Firebase", "RxJS"],
    date: "Jan 2022 - Present",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "fulltime",
    nda: true,
  },
  {
    id: "my-hr",
    title: "Employee Dashboard",
    description:
      "Contributed to the development of a cross-platform mobile app for task management.",
    technologies: ["React Native", "Redux", "GraphQL"],
    date: "Mar 2021 - Dec 2021",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "fulltime",
    nda: true,
  },
  {
    id: "ac-motors",
    title: "AC Company Landing Page",
    description:
      "Led the development of an internal CRM system for a large corporation.",
    technologies: ["Angular", "TypeScript", "Firebase", "RxJS"],
    date: "Jan 2022 - Present",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "fulltime",
    nda: true,
  },
  {
    id: "asticom-website",
    title: "Company Landing Page",
    description:
      "Contributed to the development of a cross-platform mobile app for task management.",
    technologies: ["React Native", "Redux", "GraphQL"],
    date: "Mar 2021 - Dec 2021",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "fulltime",
    nda: true,
  },
];

export { projects };
