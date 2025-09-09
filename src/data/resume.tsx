import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Fudail Mohammed Zafar",
  header: "Hi, I'm Fudail",
  initials: "FMZ",
  url: "https://fudail.me",
  location: "Chennai, TN",
  locationLink: "https://www.google.com/maps/place/chennai",
  description:
    "3rd year Computer Science Student. I love building things and helping people. Very active on LinkedIn.",
  summary:
    "At the mid of 2023, I wrote my first Hello World program in C. After that, I fell in love with building applications and programming in the world of Computer Science. I am [pursuing a degree in computer science and engineering](/#education), and I've [interned at 2 tech funded startups](/#work).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Framer Motion",
    "Postgres",
    "Docker",
    "Express",
    "TailwindCSS",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "fudail.zafar@gmail.com",
    tel: "+917200538725",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/fudailzafar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/fudailzafar",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/fudailzafar",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Vayuratha Pvt Ltd",
      href: "https://www.vayuratha.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/vayuratha.png",
      start: "January 2025",
      end: "April 2025",
      description:
        "Modernized legacy website into a full-stack e-commerce platform, personally resolving 15+ bugs per week during development testing, ensuring smooth deployment and optimal site functionality. Led a 6-member team, from design to deployment with 20+ weekly commits for rapid feature deployment. Optimized web performance with Google Lighthouse, leading to 15% increase in SEO and performance metrics. Applied the PRPL architecture, resulting in 20% reduction in initial load time on low-end devices.",
    },
    {
      company: "Networksism",
      badges: [],
      href: "https://networksism.com",
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/ns.png",
      start: "November 2024",
      end: "January 2025",
      description:
        "Delivered 3 web apps (landing page, e-commerce, corporate) within 2–4 weeks time frame each. Implemented 5+ performance enhancements, reducing load time by 15% with optimized assets & caching. Redesigned the ambulance service website following a mobile-first strategy, resulting in 4x faster page load speeds on mobile devices, as benchmarked by Web Page Test. Resolved 10+ technical issues, ensuring full compliance with responsiveness and accessibility.",
    },
  ],
  education: [
    {
      school: "BSA Crescent Institue of Science & Technology",
      href: "https://crescent.education/",
      degree: "Bachelor's Degree of Computer Science & Engineering",
      logoUrl: "/crescent.png",
      start: "2023",
      end: "Pursuing",
    },
    {
      school: "Al Hira Model School",
      href: "https://www.al-hiramodelschool.com/",
      degree: "High School",
      logoUrl: "/alhira.png",
      start: "2017",
      end: "2023",
    },
    {
      school: "The Indian High School Dubai",
      href: "https://ihsdubai.org/",
      degree: "Middle School",
      logoUrl: "/ihs.png",
      start: "2014",
      end: "2017",
    },
    {
      school: "GEMS Legacy School Dubai",
      href: "https://www.gemslegacyschool-dubai.com/",
      degree: "Primary School",
      logoUrl: "/gems.svg",
      start: "2009",
      end: "2014",
    },
  ],
  projects: [
    {
      title: "CalEasy",
      href: "https://calfudail.vercel.app/",
      dates: "February 2025 - April 2025",
      active: true,
      description:
        "CalEasy is a smart scheduling platform that lets you create personalized booking links, manage your availability, and streamline meetings with ease.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://calfudail.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/fudailzafar/CalEasy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/caleasy.png",
      video: "",
    },
    {
      title: "StockHub",
      href: "https://stockhub.fun",
      dates: "Dec 2024 - January 2025",
      active: true,
      description:
        "Your one-stop guide to Financial freedom! StockHub is a blog application providing users with insightful articles on stock markets.",
      technologies: [
        "Next.js",
        "JavaScript",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://stockhub.fun",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/fudailzafar/StockHub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/stockhub.png",
      video: "",
    },
    {
      title: "Consicio",
      href: "https://consicio.tech",
      dates: "March 2025 - June 2025",
      active: true,
      description:
        "An AI-Powered summarizer which allows user to convert their long PDFs into concise summaries.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Prisma",
        "Shadcn UI",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://consicio.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/fudailzafar/consicio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/consicio.png",
      video: "",
    },
    {
      title: "HerSaheli",
      href: "https://hersaheli.vercel.app",
      dates: "April 2025 - April 2025",
      active: true,
      description:
        "Platform connecting undergraduate women with remote job opportunities — built for Becrez Hackathon'25.",
      technologies: [
        "Next.js",
        "JavaScript",
        "TailwindCSS",
        "React",
        "TypeScript",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://hersaheli.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/fudailzafar/hersaheli",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hersaheli.png",
      video: "",
    },
  ],
} as const;
