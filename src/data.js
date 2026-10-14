// All portfolio content lives here, so updating the site means editing this one file.
const A = (f) => `./assets/${f}`;

export const profile = {
  name: "Harshad Khatale",
  role: "AI & ML Engineer · Full-Stack Developer · Cloud Learner",
  tagline: "I turn real problems into live products: hostel portals for 90+ students, RAG-powered AI tools, and websites for real businesses.",
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
  { value: "95.33%", label: "Diploma, Gold Medalist" },
  { value: "3", label: "Live products in production" },
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
  "I like building things people actually use. My OBC Boys Hostel portal runs for 90+ students, my YouTube AI Assistant has 50+ users, and as a freelancer on Upwork I build websites for real businesses such as Purva Eye Care Center.",
  "My stack covers MERN, FastAPI, RAG with LangChain, MCP servers and AWS. I deploy my own work end to end: EC2, Nginx, load balancers, SSL and custom domains.",
];

export const experience = {
  company: "Devionx Technologies",
  role: "Web Development & Testing (Full-Stack Developer)",
  period: "Jan 2025 – Jul 2025",
  place: "Navi Mumbai, Maharashtra",
  stack: ["MERN", "FastAPI", "SQL", "Render", "Vercel", "Railway", "AWS"],
  points: [
    "Developed and maintained the company's official website with optimized performance and a clean UI.",
    "Delivered 2 client projects end to end as a Full-Stack Developer, including admin dashboards and business-facing web apps.",
    "Wrote unit and integration tests, reducing post-deployment bugs by about 30%.",
    "Used AWS EC2, S3, IAM and EBS for deployment and integration.",
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
  caseStudy: {
    client: "Purva Eye Care Center",
    place: "Dindori, Nashik",
    goal: "Take a local eye clinic online so patients can find it, learn about its services and book easily.",
    features: [
      "Bilingual site with a Marathi / English toggle",
      "Online appointment booking and one-tap call",
      "Services, optical store and cataract surgery information",
      "Free cataract surgery scheme highlighted for patients",
      "Ratings, doctor profile and map location",
      "Mobile-friendly and live on a custom domain",
    ],
    image: A("tall_purva.jpg"),
    live: "https://www.purvaeyecare.online/",
    repo: "https://github.com/harshadbk/purva_eye_care_website",
  },
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
      { title: "Admin portal", items: ["Room overview and notices", "Attendance Excel reports", "Dashboard analytics", "Role-based access control"] },
      { title: "Security & infrastructure", items: ["MCP server for secure database querying and analysis", "JWT, bcrypt and OTP verification", "SendGrid emails and Cloudinary storage", "AWS EC2, Nginx, ALB, ACM SSL, custom domain and Render"] },
    ],
    links: [
      { label: "Live site", url: "https://www.hostelmanagement.online/" },
      { label: "Admin portal", url: "https://admin.hostelmanagement.online/#/dashboard" },
      { label: "GitHub repo", url: "https://github.com/harshadbk/Government_OBC_VJNT_Hostel_Prod" },
    ],
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
  {
    id: "abhaya",
    title: "Women Safety App (Abhaya)",
    kicker: "Hackoutsav 2026 Runner-up",
    date: "Apr 2026",
    summary: "A React Native safety app built at Hackoutsav 2026 that won Runner-up among 30 teams at D. Y. Patil Kolhapur.",
    image: A("hackoutsav_cert.jpg"),
    stack: ["React Native", "Groq API", "Firebase", "Express.js", "Prompt Engineering"],
    groups: [
      { title: "Features", items: ["Real-time license plate OCR with the Groq Llama Vision API", "One-tap SOS that captures audio/video and live GPS", "Automatic SMS/email alerts to emergency contacts with Cloudinary video evidence", "Live navigation with Expo Location and React Native Maps"] },
    ],
    links: [{ label: "GitHub repo", url: "https://github.com/shambhuz28/Abhaya" }],
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "C++", "C", "SQL", "MongoDB"] },
  { group: "AI / ML", items: ["Machine Learning", "Scikit-Learn", "NumPy", "Pandas", "RAG", "Vector DB", "MCP", "LangChain"] },
  { group: "Backend", items: ["FastAPI", "Node.js", "Express.js"] },
  { group: "Frontend", items: ["React", "React Native", "HTML / CSS"] },
  { group: "Cloud & DevOps", items: ["AWS (15 services)", "Docker", "GitHub", "Nginx", "Render", "Vercel", "Postman", "Hostinger"] },
  { group: "Coursework", items: ["Data Structures", "Machine Learning", "OOP (C++)", "System Design", "Operating Systems", "DBMS", "Computer Networks"] },
];

// Certificates & documents from the resume. `image` is shown in the gallery; `url` opens the original.
export const certificates = [
  { title: "Gold Medal: Topper, Computer Engineering", issuer: "Government Polytechnic, Mumbai", kind: "Award", image: A("gold_award.jpg"), url: "https://drive.google.com/file/d/1FxcuEPYMf8mhYOjS23M5zwwU-dOWFmNf/view?usp=sharing" },
  { title: "Hackoutsav 2026 Runner-up", issuer: "D. Y. Patil School of Engineering, Kolhapur", kind: "Hackathon", image: A("hackoutsav_cert.jpg"), url: "https://drive.google.com/file/d/1WJrOHg_85SJk2KQehETQG_m6OOpicRyV/view?usp=sharing" },
  { title: "Internship Experience Letter", issuer: "Devionx Technologies", kind: "Experience", image: A("devionx_cert.jpg"), url: "https://drive.google.com/file/d/1oqrGB6xgluSqFvNncSF8zBA53PR5UXp6/view?usp=sharing" },
  { title: "Appointment Letter: Web Executive", issuer: "Google Developer Groups, WCE", kind: "Leadership", image: A("gdg_letter.jpg"), url: "https://drive.google.com/file/d/1KV4zXegJZGfiPEd-tzv_IB0PBhex_mta/view?usp=sharing" },
  { title: "Generative AI", issuer: "Oracle", kind: "Certification", url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-agentic-ai-foundations-associate-2026/163239" },
  { title: "Cloud & AWS", issuer: "Oracle", kind: "Certification", url: "https://mylearn.oracle.com/ou/learning-path/cloud-adoption-framework-and-essentials/122491" },
  { title: "SQL", issuer: "Udemy", kind: "Certification" },
];

export const achievements = [
  { title: "Gold Medalist", text: "Computer Engineering at Government Polytechnic, Mumbai for outstanding academic performance." },
  { title: "Runner-up, Hackoutsav 2026", text: "Among 30 teams, hosted by the D. Y. Patil Kolhapur CSE Department." },
  { title: "Finalist, Ideathon", text: "WCE Vision 2026." },
  { title: "500+ problems solved", text: "Across coding platforms, with a LeetCode rating of 1500." },
];

export const leadership = [
  "Class Organizer for 3 years during my diploma, leading events like Techknow 2K23.",
  "Active member of GDG WCE as a Web & ML Executive.",
  "Part of the AIML Department Cricket Team.",
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
