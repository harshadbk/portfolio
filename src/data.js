// All portfolio content lives here, so updating the site means editing this one file.
const A = (f) => `./assets/${f}`;

export const profile = {
  name: "Harshad Khatale",
  role: "AI/ML & Data Science · Full-Stack Developer · Cloud & DevOps",
  tagline: "I turn real problems into live products: a hostel portal for 90+ students, RAG-powered AI tools, and websites for real businesses. Winner of Triwizathon 2K26.",
  location: "Vishrambaug, Sangli, Maharashtra",
  email: "khataleharshad26@gmail.com",
  phone: "+91 78229 26733",
  photo: A("photo.jpg"),
  resume: "./Harshad_Khatale_Resume.pdf",
  video: A("showcase.mp4"),
  poster: A("poster.jpg"),
};

export const stats = [
  { value: "8.7", label: "CGPA at WCE Sangli" },
  { value: "1st", label: "Triwizathon 2K26 hackathon winner" },
  { value: "4", label: "Live products in production" },
  { value: "500+", label: "DSA problems solved" },
];

export const platforms = [
  { name: "LinkedIn", short: "in", url: "https://www.linkedin.com/in/harshad-khatale-960830284", handle: "harshad-khatale-960830284" },
  { name: "GitHub", short: "GH", url: "https://github.com/harshadbk", handle: "harshadbk" },
  { name: "LeetCode", short: "LC", url: "https://leetcode.com/u/Harshad_290507/", handle: "Harshad_290507" },
  { name: "Hugging Face", short: "HF", url: "https://huggingface.co/khataleharshad26", handle: "khataleharshad26" },
  { name: "Unstop", short: "Un", url: "https://unstop.com/u/harshkha82750", handle: "harshkha82750" },
  { name: "Docker Hub", short: "DH", url: "https://hub.docker.com/u/harshad290507", handle: "harshad290507" },
  { name: "Upwork", short: "Up", url: "https://www.upwork.com/freelancers/~01f190d5292a19dfd9", handle: "Freelancer profile" },
];

export const about = [
  "I'm a B.Tech student in Artificial Intelligence & Machine Learning at Walchand College of Engineering, Sangli. Before that I finished my Diploma in Computer Engineering at Government Polytechnic, Mumbai with 95.33% and a Gold Medal.",
  "I like building things people actually use. My OBC Boys Hostel portal runs for 90+ students, my YouTube AI Assistant has 50+ users, and as a freelancer I build websites for real businesses such as Purva Eye Care Center and Shree Sai Snacks & Sandwich.",
  "My stack covers MERN, FastAPI, RAG with LangChain, MCP servers and AWS. I deploy my own work end to end: EC2, Nginx, load balancers, SSL, custom domains and CI/CD with GitHub Actions.",
];

export const experience = {
  company: "Devionx Technologies",
  role: "Web Development & Testing (Full-Stack Developer)",
  period: "Jan 2025 – Jul 2025",
  place: "Navi Mumbai, Maharashtra",
  stack: ["MERN", "FastAPI", "SQL", "Render", "Vercel", "Railway", "AWS"],
  points: [
    "Developed and maintained the company's official website with optimized performance and a clean UI.",
    "Delivered 2 client projects end-to-end as a Full-Stack Developer, including admin dashboards and business web apps.",
    "Wrote unit and integration tests, reducing post-deployment bugs by ~30% and improving reliability.",
    "Leveraged AWS EC2, S3, IAM & EBS for cloud deployment and integration.",
  ],
  links: [
    { label: "Website repo", url: "https://github.com/harshadbk/DevionxWebsite" },
    { label: "Client project", url: "https://github.com/harshadbk/PWN_pilot_Web_app/commits/master/" },
    { label: "Experience letter", url: "https://drive.google.com/file/d/1oqrGB6xgluSqFvNncSF8zBA53PR5UXp6/view?usp=sharing" },
  ],
};

export const freelance = {
  intro: "I work as a freelancer on Upwork. Freelancing has taught me client engagement, problem solving and clear communication, and how businesses think, not just how code works.",
  upwork: "https://www.upwork.com/freelancers/~01f190d5292a19dfd9",
  services: [
    { title: "Business websites", text: "Responsive, bilingual, fast sites that bring customers in." },
    { title: "Full-stack web apps", text: "MERN and FastAPI apps with secure JWT authentication." },
    { title: "AI integrations", text: "RAG chatbots, LLM APIs, MCP servers and smart search." },
    { title: "Admin dashboards", text: "Analytics, Excel reports and role-based access." },
    { title: "Cloud deployment", text: "AWS EC2, Nginx, SSL, custom domains, Render and Vercel." },
    { title: "Testing & support", text: "Unit and integration tests, fixes and ongoing maintenance." },
  ],
  handshake: [
    { step: "Discover", text: "Understand the business, its users and the real problem." },
    { step: "Agree", text: "Lock in scope, budget and timeline: a clear handshake." },
    { step: "Build", text: "Develop in small steps with regular demos." },
    { step: "Deliver", text: "Test, deploy live with a domain and SSL, then hand over." },
    { step: "Support", text: "Fixes, updates and growing with the client." },
  ],
  clients: [
    {
      client: "Purva Eye Care Center",
      place: "Dindori, Nashik",
      goal: "Take a local eye clinic online so patients can find it, learn about its services and book easily.",
      features: [
        "Bilingual site with a Marathi / English toggle",
        "Appointment booking with WhatsApp integration and offline retry",
        "Admin panel to manage clinic content and bookings",
        "Services, optical store and cataract surgery information",
        "Patient reviews, doctor profile and map location",
        "Mobile-friendly and live on a custom domain (purvaeyecare.online)",
      ],
      image: A("tall_purva.jpg"),
      tall: true,
      live: "https://www.purvaeyecare.online/",
      repo: "https://github.com/harshadbk/purva_eye_care_website",
    },
    {
      client: "Shree Sai Snacks & Sandwich",
      place: "Snacks & sandwich shop",
      goal: "Give a local snacks shop a fast, attractive website that shows the menu and turns visitors into orders.",
      features: [
        "Responsive website with menu, specialties, offers and reviews",
        "Interactive menu browsing",
        "Quick contact and ordering options, including WhatsApp and one-tap call",
        "Photo gallery and an about section for the shop",
      ],
      image: A("shot_saisnacks.jpg"),
      live: "https://sai-snacks-centre.netlify.app/",
    },
  ],
};

export const projects = [
  {
    id: "hostel",
    title: "OBC Boys Hostel Website",
    kicker: "Real-world problem solving",
    date: "Jul 2026",
    summary: "A full hostel management platform for the Government OBC Boys Hostel, Sangli, used by 90+ students and the hostel administration.",
    image: A("shot_hostel.jpg"),
    url: "hostelmanagement.online",
    stack: ["MCP", "MERN", "FastAPI", "JWT", "SendGrid", "Cloudinary", "AWS"],
    groups: [
      { title: "Student portal", items: ["Profile management and room details", "Attendance tracking", "Leave applications and document uploads", "Complaints, community chat and notices"] },
      { title: "Admin portal", items: ["Room overview and notices", "Attendance Excel reports", "Analytics dashboard", "Role-based access control (RBAC)"] },
      { title: "Security & infrastructure", items: ["MCP server for secure database querying and analysis", "JWT, bcrypt and OTP authentication", "SendGrid for password reset and email notifications", "Cloudinary file storage", "AWS EC2, Nginx, ALB, ACM SSL, Render and a custom domain"] },
    ],
    links: [
      { label: "Live site", url: "https://www.hostelmanagement.online/" },
      { label: "Admin portal", url: "https://admin.hostelmanagement.online/#/dashboard" },
      { label: "GitHub repo", url: "https://github.com/harshadbk/Government_OBC_VJNT_Hostel_Prod" },
    ],
  },
  {
    id: "abhaya",
    title: "Women Safety App (Abhaya)",
    kicker: "Hackoutsav 2026 Runner-up",
    date: "Apr 2026",
    summary: "A React Native safety app built at Hackoutsav 2026 that won Runner-up among 30 teams at D. Y. Patil Kolhapur.",
    image: A("hackoutsav_cert.jpg"),
    stack: ["React Native", "Groq API", "Firebase", "Express.js", "Prompt Engineering"],
    groups: [
      { title: "Features", items: ["Real-time license plate OCR with the Groq Llama Vision API for vehicle scanning", "Geolocation and route finding with Expo Location and React Native Maps", "Automated emergency SMS/email alerts through a Node.js dispatch service with live GPS tracking", "Secure SOS module that records ambient audio/video evidence to Cloudinary and alerts emergency contacts"] },
    ],
    links: [{ label: "GitHub repo", url: "https://github.com/shambhuz28/Abhaya" }],
  },
  {
    id: "youtube",
    title: "YouTube AI Assistant",
    kicker: "RAG · 50+ users",
    date: "Nov 2025",
    summary: "Ask questions to any YouTube video. The app pulls the transcript and answers with context using a retrieval-augmented generation pipeline.",
    image: A("shot_yt.jpg"),
    url: "youtubeextension.hostelmanagement.online",
    stack: ["React", "FastAPI", "LangChain", "RAG", "ChromaDB", "MongoDB Atlas"],
    pipeline: ["YouTube URL", "Transcript API + RapidAPI fallback", "Chunk & embed", "ChromaDB semantic search", "LLM answer via LangChain"],
    groups: [
      { title: "What it does", items: ["Automatic transcript retrieval with a RapidAPI fallback", "Semantic search with LangChain and ChromaDB", "Context-aware answers to your questions"] },
      { title: "How it's built", items: ["FastAPI backend with MongoDB Atlas", "JWT authentication", "AWS EC2 with ACM SSL, Nginx, Hostinger DNS and Render"] },
    ],
    links: [
      { label: "Live app", url: "https://youtubeextension.hostelmanagement.online/" },
      { label: "GitHub repo", url: "https://github.com/harshadbk/YouTube_AI_Extention" },
    ],
  },
];

export const skills = [
  { group: "Languages & Databases", items: ["Python", "C++", "C", "SQL", "MongoDB (NoSQL)", "Firebase"] },
  { group: "AI/ML & Data Science", items: ["Machine Learning", "Scikit-Learn", "NumPy", "Pandas", "RAG", "LangChain", "Vector DB (ChromaDB)", "MCP"] },
  { group: "Full Stack", items: ["React", "React Native", "Node.js", "Express.js", "FastAPI", "HTML / CSS"] },
  { group: "Cloud & DevOps", items: ["AWS (15+ services)", "Docker", "GitHub Actions (CI/CD)", "Nginx", "Render", "Vercel", "Railway", "Hostinger"] },
  { group: "Developer Tools", items: ["GitHub", "VSCode", "Postman"] },
  { group: "Core CS", items: ["Data Structures", "OOP (C++)", "DBMS", "Operating Systems", "Computer Networks", "High-Level System Design"] },
];

// Certificates & documents from the resume. `image` is shown in the gallery; `url` opens the original.
export const certificates = [
  { title: "Gold Medal: Topper, Computer Engineering", issuer: "Government Polytechnic, Mumbai", kind: "Award", image: A("gold_award.jpg"), url: "https://drive.google.com/file/d/1FxcuEPYMf8mhYOjS23M5zwwU-dOWFmNf/view?usp=sharing" },
  { title: "Hackoutsav 2026 Runner-up", issuer: "D. Y. Patil School of Engineering, Kolhapur", kind: "Hackathon", image: A("hackoutsav_cert.jpg"), url: "https://drive.google.com/file/d/1WJrOHg_85SJk2KQehETQG_m6OOpicRyV/view?usp=sharing" },
  { title: "Internship Experience Letter", issuer: "Devionx Technologies", kind: "Experience", image: A("devionx_cert.jpg"), url: "https://drive.google.com/file/d/1oqrGB6xgluSqFvNncSF8zBA53PR5UXp6/view?usp=sharing" },
  { title: "Appointment Letter: Web Executive", issuer: "Google Developer Groups, WCE", kind: "Leadership", image: A("gdg_letter.jpg"), url: "https://drive.google.com/file/d/1KV4zXegJZGfiPEd-tzv_IB0PBhex_mta/view?usp=sharing" },
  { title: "Triwizathon 2K26 Winner", issuer: "Sanjay Ghodawat University", kind: "Hackathon", url: "https://drive.google.com/file/d/1kNr-FUBv2gmS-_5e9DLNdf5C99tlOHoo/view?usp=sharing" },
  { title: "Generative AI", kind: "Certification", url: "https://drive.google.com/file/d/15UzTRHW4gyR2FaojRA7LT2Jy4vKpMN9h/view?usp=sharing" },
  { title: "Cloud & AWS", kind: "Certification", url: "https://drive.google.com/file/d/1Fhb_4diBCHMcoSysBqvON6zEEcPEJJFX/view?usp=sharing" },
  { title: "SQL", kind: "Certification" },
];

export const achievements = [
  { title: "Winner, Triwizathon 2K26", text: "Hackathon organized by Sanjay Ghodawat University, with a prize pool of ₹40,000." },
  { title: "Runner-up, Hackoutsav 2026", text: "Among 30 teams, hosted by the D. Y. Patil Kolhapur CSE Department." },
  { title: "Gold Medalist", text: "Computer Engineering at Government Polytechnic, Mumbai for outstanding academic performance." },
  { title: "Finalist, Ideathon", text: "WCE Vision 2026." },
  { title: "500+ problems solved", text: "Across coding platforms, with a LeetCode rating of 1500." },
];

export const leadership = [
  "Served as Class Organizer for 3 years during the diploma, leading major events like Techknow 2K23.",
  "Active member of GDG WCE as a Web & ML Executive.",
  "Member of the AIML Department Cricket Team.",
];

export const education = [
  { school: "Walchand College of Engineering, Sangli", degree: "B.Tech, Artificial Intelligence & Machine Learning", period: "Aug 2025 – Jun 2028", score: "CGPA 8.7" },
  { school: "Government Polytechnic, Mumbai", degree: "Diploma, Computer Engineering", period: "Aug 2022 – Jul 2025", score: "95.33% · Gold Medal" },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "work", label: "Experience" },
  { id: "freelance", label: "Freelance" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];
