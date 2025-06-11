import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ziad",
  lastName: "Taleb",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Software Engineer",
  avatar: "/images/avatar.jpeg",
  email: "ziadtaleb97@gmail.com",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ziad-taleb-54948115b/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building robust and optimized applications</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Dorm Explorer</strong></>,
    href: "https://www.nrstradingco.com",
  },
  subline: (
    <>
      I'm Ziad, a software engineer at Volvo Trucks, where I develop
      <br /> applications using .NET and Microsoft Azure. <br />After hours, I build projects for my company, Nova Digital Solutions.
    </>
  ),
};

const about = {
  path: "/",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/ziad-taleb-hwntfk",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Senior Software engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. My work spans full website development, mobile apps, and cloud engineering.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Volvo Group",
        timeframe: "July 2025 - Present",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Sopra Steria",
        timeframe: "May 2023 - June 2025",
        role: "Software Engineer Consultant for Volvo Group",
        achievements: [
          <>
            .NET/Azure development on the master data management API for Renault Trucks.
          </>,
          <>
            Migrated from Nhibernate to Entity Framework.
          </>,
          <>
            Wrote the automated unit tests for the application.
          </>,
          <>
            Developped multiple azure functions.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "CGI",
        timeframe: "April 2021 - April 2023",
        role: "Software Engineer Consultant for Euro Information Development",
        achievements: [
          <>
            Part of a 10 developer team.
          </>,
          <>
            Cobol/.NET developer for the project management application group.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "MD6 Consulting",
        timeframe: "February 2020 - August 2020",
        role: "Intern Software Engineer",
        achievements: [
          <>
            Developped a monitoring app for the IT infrastructure of the clients of MD6 from scratch.
          </>,
          <>
            Developped using ReactJS and NodeJS.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
    ],
  },
  certs: {
    display: true,
    title: "Certifications",
    certsList: [
      {
        name: "Microsoft Certified: Azure Developer Associate (AZ-204)",
        description: <> Focuses on developing cloud-based applications using Azure services.</>,
      },
      {
        name: "Microsoft Certified: Azure Fundamentals",
        description: <>Introduces core Azure concepts, cloud computing principles, services, and pricing models.</>,
      },
      {
        name: "Occupational First Aid Responder (French SST)",
        description: <>Trains employees to provide first aid in the workplace and prevent accidents.</>,
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Strasbourg",
        description: <>Mechatronics and Energy Engineering Master's Degree. Obtained in 2020</>,
      },
      {
        name: "University of Balamand",
        description: <>Mechatronics Engineering Bachelor's Degree. Obtained in 2018.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: ".NET",
        description: <>Ability to code robust, secure and optimized backends using .NET with C#.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Azure Cloud",
        description: <>Ability to manage a cloud infrastructure on Azure, hosting your apps and your background running programs and batches.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js.</>,
        // optional: leave the array empty if you don't want to display imagess
        images: [
          
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
