import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import Scene3D from "./Scene3D";
import ScrollPanda from "./ScrollPanda";
import ConnectModal from "./ConnectModal";

/* =====================================================================
   DATA
===================================================================== */

const navItems = ["Home", "About", "Skills", "Projects", "Services", "Experience", "Contact"];

const heroStats = [
  ["2+", "Years Experience"],
  ["8+", "Months Freelancing"],
  ["10+", "Happy Clients"],
];

const aboutStats = [
  ["2+", "Years Experience"],
  ["8+", "Months Freelancing"],
  ["10+", "Happy Clients"],
  ["20+", "Projects Built"],
];

const coreTech = ["React", "Laravel", "PHP", "MySQL", "Tailwind CSS", "REST APIs"];
const trustedTech = ["React.js", "Laravel", "PHP", "MySQL", "Tailwind CSS", "REST APIs", "JavaScript", "Git", "Docker"];

const clientProjects = [
  {
    title: "Salon Website",
    icon: "💇‍♀️",
    description: "Modern salon website with services, pricing, gallery and appointment-focused design.",
    problem: "A local salon needed a clear online presence to show services and receive appointment enquiries.",
    solution: "A responsive site with service and pricing pages, a photo gallery and an enquiry form.",
    outcome: "Delivered a mobile-friendly website the owner can share with customers.",
    tech: "React • Tailwind • Responsive UI",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Cafe Website",
    icon: "☕",
    description: "Attractive cafe website with menu, location, gallery and customer enquiry features.",
    problem: "A cafe needed customers to find its menu, location and contact details online.",
    solution: "A visual menu, location section, gallery and a simple enquiry form.",
    outcome: "Delivered a clean, fast website that works well on phones.",
    tech: "React • Tailwind • Responsive UI",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Gym Website",
    icon: "🏋️",
    description: "High-energy fitness website with membership plans, programs, trainers and enquiry-focused sections.",
    problem: "A gym wanted to present its plans and trainers and turn visitors into enquiries.",
    solution: "Membership plan sections, trainer profiles, programs and a clear enquiry call to action.",
    outcome: "Delivered an enquiry-focused website for the gym's membership plans.",
    tech: "React • Tailwind • Responsive UI",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Variety Clothes E-commerce",
    icon: "👗",
    description: "Full-stack e-commerce website for a variety clothing brand with product catalog, categories, cart and order management.",
    problem: "A clothing business needed an online store to showcase variety clothes and manage customer orders.",
    solution: "Built a complete e-commerce platform with product listing, categories, shopping cart and order flow using Laravel and HTML.",
    outcome: "Delivered a working full-stack online store for the clothing brand.",
    tech: "Laravel • PHP • MySQL • HTML • CSS • JavaScript",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
  },
];

const conceptProject = {
  title: "AI SaaS Landing Page",
  label: "Concept / Demo Project",
  description: "Modern AI startup landing page with product features, pricing plans, testimonials and responsive UI.",
  problem: "Startups need high-converting landing pages to present their SaaS products professionally.",
  tech: "React • Vite • Tailwind • Responsive UI • Vercel",
  outcome: "A fast modern landing page suitable for SaaS startups and product launches.",
  image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1600",
};

const moreProjects = [
  {
    title: "E-commerce Admin Dashboard",
    description: "Full product management dashboard with order tracking, payments and customer storefront.",
    problem: "Store owners needed a simple system to manage products and orders.",
    tech: "React • Laravel • Stripe • MySQL • Tailwind",
    outcome: "Clear product and order management interface for store owners.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Real-time Collaboration Whiteboard",
    description: "Live collaborative board with drawing, sticky notes and team rooms.",
    problem: "Remote teams needed a real-time brainstorming tool.",
    tech: "React • Laravel Reverb • WebSockets • Canvas API",
    outcome: "Enabled real-time drawing and notes for remote teams.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Freelancer CRM & Invoice System",
    description: "Client management tool with invoicing, proposals and time tracking.",
    problem: "Freelancers needed a simple system to manage clients and payments.",
    tech: "React • Laravel • Stripe • Mailgun",
    outcome: "Simple client, proposal and invoice workflow for freelancers.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1600",
  },
];

const results = [
  ["🚚", "Logistics CRM", "Built a CRM dashboard used for daily business operations.", "Business Operations"],
  ["⚡", "Workflow Automation", "Reduced manual administrative work using automation tools.", "Automation"],
  ["💳", "SaaS Subscription Platform", "Developed a SaaS platform with subscription and Stripe billing functionality.", "SaaS Development"],
  ["🔗", "REST API Systems", "Developed secure REST APIs for mobile applications and connected systems.", "Backend Development"],
  ["🚀", "Database Performance", "Optimized database queries and improved application responsiveness.", "Performance Optimization"],
  ["📊", "Startup Dashboards", "Delivered scalable dashboards designed around startup and business workflows.", "Dashboard Development"],
];

const processSteps = [
  ["01", "💬", "Discovery", "We discuss your idea, requirements, target users, features, timeline, and project goals."],
  ["02", "⚙️", "Development", "I build the website or application using a clean, scalable, and responsive development approach."],
  ["03", "🧪", "Testing", "I test functionality, responsiveness, APIs, forms, performance, and important user flows."],
  ["04", "🚀", "Launch", "After final approval, I deploy the project and make sure everything is ready for real users."],
];

const services = [
  ["🌐", "Business Websites", "Professional, responsive websites for businesses, startups, local brands, salons, cafes, gyms, and service providers.", "React • Laravel • Tailwind CSS", "Offer"],
  ["🚀", "Landing Pages", "High-converting landing pages for products, services, campaigns, portfolios, and marketing purposes.", "Responsive UI • CTA • Performance", "Offer"],
  ["🔗", "Backend & API Development", "Secure REST APIs, backend logic, database integration, authentication, third-party integrations, and payment systems.", "PHP • Laravel • MySQL • REST APIs", "Offer"],
  ["🛠️", "Fixes & Performance", "Fix existing website issues, improve slow applications, optimize databases, resolve bugs, and improve overall performance.", "Bug Fixes • Optimization • Database Performance", "Offer"],
  ["🧰", "Maintenance", "Ongoing support after delivery with defined support hours, response time and included updates.", "Monthly Plan • Add-on", "Add-on"],
  ["💻", "Custom Web Applications", "Custom dashboards, CRM systems, admin panels, business tools, and web applications built around your workflow.", "React • Laravel • MySQL", "Coming Soon"],
  ["⚡", "SaaS & MVP Development", "Build and launch MVPs and SaaS products with scalable architecture, authentication, subscriptions, and dashboards.", "React • Laravel • REST APIs • Stripe", "Coming Soon"],
];

const pricing = [
  ["Landing page", "₹2,000 – ₹3,000", "Sections, responsiveness, revisions and supplied content agreed up front."],
  ["Business website", "₹5,000 – ₹10,000", "Page count, forms, integrations, revisions and timeline agreed up front."],
  ["Backend / API work", "₹5,000 – ₹15,000", "Quoted by endpoints, authentication, integrations, testing and complexity."],
  ["Maintenance", "₹1,500 – ₹3,000 / month", "Included tasks, response time and extra-work charges defined in writing."],
];

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern and user-friendly interfaces that work smoothly across devices.",
    items: ["React.js", "JavaScript", "HTML5 & CSS3", "Tailwind CSS", "Responsive UI/UX", "Framer Motion"],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Backend & Database",
    description: "Developing secure backend systems, APIs and database-driven applications.",
    items: ["Laravel", "PHP", "RESTful APIs", "MySQL", "PostgreSQL", "Eloquent ORM"],
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Tools & Delivery",
    description: "Using modern development and deployment tools to deliver reliable projects efficiently.",
    items: ["Git & GitHub", "Docker", "Postman", "Jira / Agile", "Vercel", "Railway / Forge"],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
  },
];

const clientSkills = ["Responsive Websites", "SaaS Applications", "Dashboards & CRMs", "API Integrations"];

const experience = [
  {
    role: "Full Stack Developer",
    company: "TEMPCON EXPRESS PVT. LTD, Mumbai",
    tag: "Full Stack",
    desc: "Built and maintained an internal CRM using React and Laravel. Worked on REST APIs, application performance, database-driven features, and clean full-stack architecture.",
    skills: ["React", "Laravel", "REST APIs", "MySQL", "Performance"],
  },
  {
    role: "Software Developer",
    company: "TechExcel Software Solutions, Mumbai",
    tag: "Client Projects",
    desc: "Worked on multiple client projects by developing responsive user interfaces, Laravel backends, API integrations, and business-focused web solutions.",
    skills: ["Laravel", "PHP", "React", "Responsive UI", "Integrations"],
  },
  {
    role: "Software Developer",
    company: "Loke Infosolutions Pvt Ltd, Mumbai",
    tag: "Backend & APIs",
    desc: "Developed secure REST APIs, optimized MySQL databases, and implemented authentication and payment-related functionality for web applications.",
    skills: ["PHP", "REST APIs", "MySQL", "Authentication", "Payments"],
  },
];

const experienceStats = [
  ["2+", "Years Professional Experience"],
  ["8+", "Months Freelancing"],
  ["20+", "Projects Built"],
];

const whyMe = [
  ["💼", "Professional Experience", "2+ years of professional development experience working on real-world web applications and business projects."],
  ["🚀", "Freelance Experience", "8+ months of freelancing experience focused on understanding client requirements and delivering practical solutions."],
  ["🎯", "Business-Focused", "I build websites and applications with usability, performance, scalability, and business goals in mind."],
  ["⚡", "Clean & Scalable Code", "Structured code and reusable components make applications easier to maintain, improve, and scale."],
  ["🤝", "Clear Communication", "Clear communication throughout the project helps keep requirements, progress, and expectations aligned."],
  ["🔧", "End-to-End Support", "From development and API integration to bug fixing and performance improvements, I can support the complete workflow."],
];

const testimonials = [
  [
    "“",
    "Trupti built our Variety Clothes online store exactly the way we needed. From product listing to cart and orders — everything works smoothly. She understood our business and delivered on time. Highly recommended.",
    "Narayan Loke",
    "Founder, Variety Clothes",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=900",
  ],
  [
    "“",
    "Our gym website looks professional and clearly shows membership plans, trainers and programs. After launch, we started getting more enquiries. Trupti was patient, clear in communication and delivered exactly what we asked for.",
    "Vishal Shinde",
    "Owner, Gym Website",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=900",
  ],
  [
    "★",
    "The cafe website is clean, fast on mobile, and our menu and location are easy for customers to find. Customers often mention they found us online. Very happy with the result and the support after delivery.",
    "Vaibhav Shoshte",
    "Owner, Cafe Website",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=900",
  ],
];

/* =====================================================================
   HELPERS
===================================================================== */

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
const sans = { fontFamily: "'DM Sans', system-ui, sans-serif" };

const card =
  "rounded-2xl border border-stone-200/80 bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300";
const btnPrimary =
  "inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#c45c6a] text-white font-medium tracking-wide hover:bg-[#b04e5b] shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45c6a]";
const btnGhost =
  "inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-stone-300 text-stone-700 font-medium hover:bg-stone-50 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400";
const pill = "px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs md:text-sm";

function Reveal({ children, delay = 0, className = "", hover = false }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4 } : undefined}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Heading({ eyebrow, title, text }) {
  return (
    <Reveal className="text-center mb-16 group">
      {eyebrow && (
        <p className="text-[#c45c6a] text-xs font-medium uppercase tracking-[0.28em] mb-4 transition-all duration-300 group-hover:scale-110 group-hover:tracking-[0.32em]">
          {eyebrow}
        </p>
      )}
      <h2
        style={serif}
        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-900 tracking-tight 
                   transition-all duration-300 cursor-default
                   group-hover:scale-105 group-hover:text-[#c45c6a]"
      >
        {title}
      </h2>
      {text && (
        <p className="text-stone-600 max-w-2xl mx-auto mt-5 leading-relaxed text-[15px] md:text-base transition-all duration-300 group-hover:text-stone-700">
          {text}
        </p>
      )}
    </Reveal>
  );
}

function CtaButton({ href = "#contact", children }) {
  return (
    <a href={href} className={btnPrimary}>
      {children} <span className="opacity-90">→</span>
    </a>
  );
}

function TechPills({ tech }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.split(" • ").map((t) => (
        <span
          key={t}
          className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 text-xs border border-stone-200
                     hover:bg-[#c45c6a]/10 hover:text-[#c45c6a] hover:border-[#c45c6a]/40 hover:scale-105 transition-all duration-200 cursor-default"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm text-stone-600 mb-2">{label}</label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full p-4 rounded-xl bg-white border border-stone-200 text-stone-800 placeholder-stone-400 outline-none focus:border-[#c45c6a]/60 focus:ring-2 focus:ring-[#c45c6a]/15 transition";

/* =====================================================================
   PAGE
===================================================================== */

export default function App() {
  const [pageLoading, setPageLoading] = useState(true);
  const [formStatus, setFormStatus] = useState("idle");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("demo");
  const reduce = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const openConnectModal = (type = "demo") => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/xlgwbvjk", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      setFormStatus("error");
    }
  };

  const hero = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  if (pageLoading) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]">
        <motion.p
          style={serif}
          className="text-2xl md:text-3xl font-medium text-stone-700 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Loading
        </motion.p>
      </div>
    );
  }

  return (
    <div style={sans} className="relative min-h-screen text-stone-800 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
      `}</style>

      <Scene3D />
      <ScrollPanda />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-sm font-medium tracking-wide text-stone-900 hover:text-[#c45c6a] hover:scale-110 transition-all duration-300">
            Trupti Mishra
          </a>
          <div className="hidden md:flex items-center gap-1 text-sm text-stone-600">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 rounded-full font-medium transition-all duration-300
                           hover:text-[#c45c6a] hover:bg-[#c45c6a]/10 hover:scale-110 hover:shadow-sm active:scale-95"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="text-sm px-5 py-2 rounded-full border border-stone-300 text-stone-700 
                       hover:bg-[#c45c6a] hover:text-white hover:border-[#c45c6a] 
                       hover:scale-110 hover:shadow-md transition-all duration-300 active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 md:pt-24 relative">
        <motion.div {...hero(0)} className="relative mb-10 z-10">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border border-slate-300 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] mx-auto bg-[#e2e8f0] hover:scale-105 transition-transform duration-500">
            <img
              src="/truptipic.jpeg"
              alt="Trupti Mishra"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        <motion.p {...hero(0.08)} className="text-[#c45c6a] text-xs md:text-sm font-medium tracking-[0.25em] uppercase mb-5 z-10 hover:scale-110 hover:tracking-[0.32em] transition-all duration-300 cursor-default">
          Freelance Full-Stack Developer
        </motion.p>

        <motion.h1 {...hero(0.15)} style={serif} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.15] mb-6 text-stone-900 z-10 max-w-4xl hover:scale-105 hover:text-[#c45c6a] transition-all duration-500 cursor-default">
          I build websites, booking systems & backend APIs for small businesses
        </motion.h1>

        <motion.p {...hero(0.22)} className="text-base md:text-lg text-stone-700 max-w-2xl mx-auto leading-relaxed z-10">
          I’m Trupti Mishra. Practical websites, booking systems and Laravel backend work for gyms, salons, cafés and local businesses that need clear, reliable digital solutions.
        </motion.p>

        <motion.p {...hero(0.28)} className="mt-6 text-sm text-stone-600 z-10">
          Business Websites · Landing Pages · Backend & APIs · Bug Fixes · Maintenance
        </motion.p>

        <motion.div {...hero(0.34)} className="mt-5 flex items-center gap-2 text-emerald-600 text-sm font-medium z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available for freelance projects
        </motion.div>

        <motion.div {...hero(0.4)} className="flex flex-col sm:flex-row gap-4 mt-10 z-10">
          <CtaButton>Start a Project</CtaButton>
          <a href="#projects" className={btnGhost}>View My Work</a>
        </motion.div>

        <motion.div {...hero(0.48)} className="mt-14 flex flex-wrap justify-center gap-10 md:gap-14 text-center z-10">
          {heroStats.map(([v, l]) => (
            <div key={l} className="hover:scale-110 transition-transform duration-300 cursor-default">
              <p className="text-2xl md:text-3xl font-semibold text-stone-900 hover:text-[#c45c6a] transition-colors">{v}</p>
              <p className="text-xs text-stone-600 mt-1 tracking-wide">{l}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 px-6 border-t border-stone-100 relative">
        <div className="max-w-6xl mx-auto">
          <Heading
            eyebrow="Selected Work"
            title="Projects I’ve Built"
            text="Real business websites first, each with the problem, the solution and the result."
          />

          <div className="space-y-16">
            {clientProjects.map((p, i) => (
              <Reveal key={p.title}>
                <article className={`${card} overflow-hidden grid md:grid-cols-2`}>
                  <div className={`relative h-64 md:h-auto min-h-[280px] overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <img src={p.image} alt={`${p.title} preview`} className="w-full h-full object-cover" />
                    <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-stone-200 text-stone-600 text-xs tracking-wide shadow-sm">
                      Client Project 0{i + 1}
                    </span>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="text-3xl mb-4">{p.icon}</div>
                    <h3 style={serif} className="text-2xl md:text-3xl font-semibold mb-3 text-stone-900 hover:text-[#c45c6a] hover:scale-105 transition-all duration-300 cursor-default origin-left">
                      {p.title}
                    </h3>
                    <p className="text-stone-700 text-sm leading-relaxed mb-6">{p.description}</p>
                    {[
                      ["Problem", p.problem],
                      ["Solution", p.solution],
                      ["Result", p.outcome],
                    ].map(([label, val]) => (
                      <div key={label} className="mb-4">
                        <p className="text-[11px] uppercase tracking-[0.15em] text-stone-500 mb-1">{label}</p>
                        <p className="text-stone-700 text-sm leading-relaxed">{val}</p>
                      </div>
                    ))}
                    <div className="mt-4 mb-5">
                      <TechPills tech={p.tech} />
                    </div>
                    <button onClick={() => openConnectModal("demo")} className="text-sm text-[#c45c6a] hover:text-[#b04e5b] hover:scale-105 transition-all text-left">
                      Live Demo →
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Concept project */}
          <Reveal className="mt-16">
            <article className={`${card} overflow-hidden grid md:grid-cols-2`}>
              <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden">
                <img src={conceptProject.image} alt={`${conceptProject.title} preview`} className="w-full h-full object-cover" />
                <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-white/90 border border-[#c45c6a]/30 text-[#c45c6a] text-xs tracking-wide shadow-sm">
                  {conceptProject.label}
                </span>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 style={serif} className="text-2xl md:text-3xl font-semibold mb-3 text-stone-900 hover:text-[#c45c6a] hover:scale-105 transition-all duration-300 cursor-default origin-left">
                  {conceptProject.title}
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-6">{conceptProject.description}</p>
                <div className="mb-4">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-stone-500 mb-1">Problem</p>
                  <p className="text-stone-700 text-sm">{conceptProject.problem}</p>
                </div>
                <div className="mb-5">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-stone-500 mb-1">Outcome</p>
                  <p className="text-stone-700 text-sm">{conceptProject.outcome}</p>
                </div>
                <div className="mb-6">
                  <TechPills tech={conceptProject.tech} />
                </div>
                <div className="flex gap-6 pt-4 border-t border-stone-100">
                  <button onClick={() => openConnectModal("demo")} className="text-sm text-[#c45c6a] hover:text-[#b04e5b] hover:scale-105 transition-all">
                    Live Demo →
                  </button>
                  <button onClick={() => openConnectModal("github")} className="text-sm text-stone-600 hover:text-stone-900 hover:scale-105 transition-all">
                    GitHub →
                  </button>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Additional Projects */}
          <div className="mt-28">
            <Heading
              eyebrow="More Builds"
              title="Additional Projects"
              text="Full-stack applications and product concepts."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreProjects.map((p, index) => (
                <Reveal key={p.title} delay={index * 0.05} hover>
                  <article className={`${card} group relative h-full overflow-hidden`}>
                    <div className="relative h-48 overflow-hidden">
                      <img src={p.image} alt={`${p.title} project preview`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                      <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/90 border border-stone-200 text-stone-600 text-xs shadow-sm">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 style={serif} className="text-xl font-semibold mb-3 text-stone-900 group-hover:text-[#c45c6a] group-hover:scale-105 transition-all duration-300 origin-left">
                        {p.title}
                      </h3>
                      <p className="text-stone-700 text-sm leading-relaxed mb-5">{p.description}</p>
                      <div className="mb-4">
                        <p className="text-[11px] uppercase tracking-[0.12em] text-stone-500 mb-1">Problem</p>
                        <p className="text-stone-700 text-sm leading-relaxed">{p.problem}</p>
                      </div>
                      <div className="mb-5">
                        <p className="text-[11px] uppercase tracking-[0.12em] text-stone-500 mb-1">Outcome</p>
                        <p className="text-stone-700 text-sm leading-relaxed">{p.outcome}</p>
                      </div>
                      <div className="mb-5">
                        <TechPills tech={p.tech} />
                      </div>
                      <div className="flex items-center justify-between gap-3 pt-4 border-t border-stone-100">
                        <button onClick={() => openConnectModal("demo")} className="text-sm text-[#c45c6a] hover:text-[#b04e5b] hover:scale-105 transition-all">
                          Live Demo →
                        </button>
                        <button onClick={() => openConnectModal("github")} className="text-sm text-stone-600 hover:text-stone-900 hover:scale-105 transition-all">
                          GitHub →
                        </button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="text-center mt-20">
            <p className="text-stone-600 mb-6">Have a project in mind?</p>
            <CtaButton>Start Your Project</CtaButton>
          </Reveal>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="max-w-6xl mx-auto px-6 py-28 border-t border-stone-100 relative">
        <Heading
          eyebrow="Proven Work"
          title="Results That Matter"
          text="I focus on building reliable digital solutions that improve business workflows, performance, and day-to-day operations."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map(([icon, title, result, type], i) => (
            <Reveal key={title} delay={i * 0.04}>
              <div className={`${card} group h-full p-7`}>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="text-2xl group-hover:scale-125 transition-transform duration-300">{icon}</div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600">{type}</span>
                </div>
                <h3 className="text-lg font-medium mb-3 text-stone-900 group-hover:text-[#c45c6a] group-hover:scale-105 transition-all duration-300 origin-left">{title}</h3>
                <p className="text-stone-700 text-sm leading-relaxed">{result}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 text-center">
          <p className="text-stone-600 mb-5">Have a similar business challenge?</p>
          <CtaButton>Let’s Discuss Your Project</CtaButton>
        </Reveal>
      </section>

      {/* SERVICES + PRICING */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-28 border-t border-stone-100 relative">
        <Heading
          eyebrow="What I Offer"
          title="Services I Offer"
          text="Practical, clearly scoped work designed to help businesses launch, improve and grow online."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(([icon, title, text, tech, status], i) => (
            <Reveal key={title} delay={i * 0.03}>
              <div className={`${card} h-full p-6 group`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-2xl group-hover:scale-125 transition-transform duration-300">{icon}</div>
                  {status !== "Offer" && (
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600">{status}</span>
                  )}
                </div>
                <h3 className="text-lg font-medium mb-3 text-stone-900 group-hover:text-[#c45c6a] group-hover:scale-105 transition-all duration-300 origin-left">{title}</h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">{text}</p>
                <p className="text-[#c45c6a] text-xs">{tech}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24">
          <h3 style={serif} className="text-3xl md:text-4xl font-semibold text-center mb-3 text-stone-900 hover:text-[#c45c6a] hover:scale-105 transition-all duration-300 cursor-default">
            Introductory Pricing
          </h3>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-10 leading-relaxed text-sm">
            Starting ranges for the first few suitably scoped projects. Every quote is confirmed after we discuss requirements.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {pricing.map(([name, range, note]) => (
              <div key={name} className={`${card} p-6 group`}>
                <p className="text-sm text-stone-600 mb-1 group-hover:text-[#c45c6a] transition-colors">{name}</p>
                <p style={serif} className="text-2xl md:text-3xl text-stone-900 my-2 group-hover:scale-105 transition-transform origin-left">{range}</p>
                <p className="text-sm text-stone-700 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-stone-500 mt-8 max-w-3xl mx-auto leading-relaxed">
            Scope, deliverables, timeline, revisions, payment milestones, hosting/domain costs, third-party fees and change-request pricing are confirmed in writing before I start.
          </p>
        </Reveal>

        <Reveal className="text-center mt-14">
          <p className="text-stone-600 mb-5">Have a project in mind? Let's build something that works for your business.</p>
          <CtaButton>Let's Work Together</CtaButton>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section id="process" className="max-w-6xl mx-auto px-6 py-28 border-t border-stone-100 relative">
        <Heading
          eyebrow="Simple & Transparent"
          title="How I Work With Clients"
          text="A clear process keeps your project organized, predictable and focused on the final business goal."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map(([num, icon, title, desc], i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className={`${card} group h-full p-6`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-xl group-hover:scale-125 transition-transform duration-300">{icon}</div>
                  <span className="text-3xl font-light text-stone-300 group-hover:text-stone-400 transition-colors">{num}</span>
                </div>
                <h3 className="text-lg font-medium mb-2 text-stone-900 group-hover:text-[#c45c6a] group-hover:scale-105 transition-all duration-300 origin-left">{title}</h3>
                <p className="text-stone-700 text-sm leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 rounded-2xl border border-stone-200 bg-stone-50/80 p-8 md:p-10 text-center shadow-sm">
          <h3 style={serif} className="text-2xl md:text-3xl font-semibold mb-3 text-stone-900 hover:text-[#c45c6a] hover:scale-105 transition-all duration-300 cursor-default">
            Have an idea? Let’s turn it into a working product.
          </h3>
          <p className="text-stone-600 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
            Share your requirements and I’ll help you choose the right approach, features and technology.
          </p>
          <CtaButton>Start a Conversation</CtaButton>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 max-w-5xl mx-auto border-t border-stone-100 relative">
        <Reveal className={`${card} relative overflow-hidden p-8 md:p-12`}>
          <div className="relative z-10">
            <div className="text-center mb-10">
              <p className="text-[#c45c6a] text-xs font-medium uppercase tracking-[0.28em] mb-3 hover:scale-110 hover:tracking-[0.32em] transition-all duration-300 cursor-default">About Me</p>
              <h2 style={serif} className="text-3xl md:text-5xl font-semibold text-stone-900 hover:text-[#c45c6a] hover:scale-105 transition-all duration-300 cursor-default">
                Turning Ideas Into Digital Experiences
              </h2>
            </div>
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <p className="text-stone-700 leading-relaxed">
                I’m Trupti Mishra, a Full-Stack Developer with <span className="text-stone-900 font-medium">2+ years of professional experience</span> and <span className="text-stone-900 font-medium">8+ months of freelancing experience</span>.
              </p>
              <p className="text-stone-700 leading-relaxed">
                I build modern, responsive websites and web applications for businesses, startups and entrepreneurs. From business websites and landing pages to backends, APIs and scoped improvements, I focus on solutions that are reliable and easy to use.
              </p>
              <p className="text-stone-700 leading-relaxed">
                My goal is simple — understand your business, turn your idea into a professional digital product, and deliver something that helps you achieve your goals.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {aboutStats.map(([title, text], i) => (
                <Reveal key={text} delay={i * 0.06}>
                  <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-center hover:scale-105 hover:border-[#c45c6a]/40 transition-all duration-300 cursor-default">
                    <p className="text-2xl font-semibold text-stone-900 hover:text-[#c45c6a] transition-colors">{title}</p>
                    <p className="text-xs text-stone-600 mt-1">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-xs text-stone-500 mb-3 tracking-wide">Core Technologies</p>
              <div className="flex flex-wrap justify-center gap-2">
                {coreTech.map((t) => (
                  <span key={t} className="px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-sm hover:bg-[#c45c6a]/10 hover:text-[#c45c6a] hover:border-[#c45c6a]/40 hover:scale-110 transition-all duration-200 cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TRUSTED TECH */}
      <section className="py-20 px-6 text-center border-t border-stone-100 relative">
        <Reveal className="max-w-4xl mx-auto">
          <p className="text-[#c45c6a] text-xs font-medium uppercase tracking-[0.28em] mb-4 hover:scale-110 hover:tracking-[0.32em] transition-all duration-300 cursor-default">
            Technologies I Work With
          </p>
          <h2 style={serif} className="text-3xl md:text-4xl font-semibold mb-4 text-stone-900 hover:text-[#c45c6a] hover:scale-105 transition-all duration-300 cursor-default">
            Built With Modern Technology
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
            Reliable tools for responsive websites, scalable applications and clean backend systems.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {trustedTech.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-700 text-sm hover:border-[#c45c6a]/50 hover:text-[#c45c6a] hover:scale-110 hover:shadow-sm transition-all duration-200 cursor-default">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-28 px-6 border-t border-stone-100 relative">
        <div className="max-w-6xl mx-auto">
          <Heading
            eyebrow="My Expertise"
            title="Skills & Expertise"
            text="From frontend experiences to backend systems, I build complete, reliable digital solutions."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08} hover>
                <div className={`${card} h-full overflow-hidden group`}>
                  <div className="relative h-40 overflow-hidden">
                    <img src={g.img} alt={`${g.title} development`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 style={serif} className="text-xl font-semibold mb-3 text-stone-900 group-hover:text-[#c45c6a] group-hover:scale-105 transition-all duration-300 origin-left">
                      {g.title}
                    </h3>
                    <p className="text-stone-700 text-sm leading-relaxed mb-5">{g.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <span key={item} className={pill + " hover:bg-[#c45c6a]/10 hover:text-[#c45c6a] hover:border-[#c45c6a]/40 hover:scale-105 transition-all duration-200"}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {clientSkills.map((item) => (
              <div key={item} className="bg-white border border-stone-200 rounded-xl p-4 text-center shadow-sm hover:scale-105 hover:border-[#c45c6a]/40 hover:shadow-md transition-all duration-300 cursor-default">
                <p className="text-stone-700 text-sm">✓ {item}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-28 border-t border-stone-100 relative">
        <Heading
          eyebrow="My Background"
          title="Professional Experience"
          text="Professional experience building full-stack applications, business systems, APIs and scalable web solutions."
        />
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-200" />
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.08} className={`relative md:w-[calc(50%-28px)] ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                <div className={`hidden md:block absolute top-8 w-2.5 h-2.5 rounded-full bg-[#c45c6a] border-2 border-white shadow-sm ${i % 2 === 0 ? "-right-[35px]" : "-left-[35px]"}`} />
                <div className={`${card} p-7 group`}>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-[11px] uppercase tracking-[0.15em] text-stone-500">Professional Experience</span>
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600">{exp.tag}</span>
                  </div>
                  <h3 style={serif} className="text-2xl font-semibold mb-1 text-stone-900 group-hover:text-[#c45c6a] group-hover:scale-105 transition-all duration-300 origin-left">
                    {exp.role}
                  </h3>
                  <p className="text-[#c45c6a] text-sm mb-4">{exp.company}</p>
                  <p className="text-stone-700 text-sm leading-relaxed mb-5">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 hover:bg-[#c45c6a]/10 hover:text-[#c45c6a] hover:border-[#c45c6a]/40 hover:scale-105 transition-all duration-200 cursor-default">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-16 grid sm:grid-cols-3 gap-4">
          {experienceStats.map(([value, label], i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="text-center rounded-xl border border-stone-200 bg-white p-6 shadow-sm hover:scale-105 hover:border-[#c45c6a]/40 transition-all duration-300 cursor-default">
                <div className="text-2xl font-semibold text-stone-900 mb-1 hover:text-[#c45c6a] transition-colors">{value}</div>
                <p className="text-xs text-stone-600">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="py-28 px-6 border-t border-stone-100 relative">
        <div className="max-w-5xl mx-auto">
          <Heading title="Why Work With Me" text="I focus on building reliable, practical and business-focused web solutions — not just writing code." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyMe.map(([icon, title, text], i) => (
              <Reveal key={title} delay={i * 0.04}>
                <div className={`${card} h-full p-6 group`}>
                  <div className="text-2xl mb-4 group-hover:scale-125 transition-transform duration-300">{icon}</div>
                  <h3 className="text-lg font-medium mb-2 text-stone-900 group-hover:text-[#c45c6a] group-hover:scale-105 transition-all duration-300 origin-left">{title}</h3>
                  <p className="text-stone-700 text-sm leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — strong visible backgrounds */}
      <section id="testimonials" className="py-28 px-6 border-t border-stone-100 relative">
        <div className="max-w-6xl mx-auto">
          <Heading title="Client Feedback" text="Real project experiences from clients I've worked with." />
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map(([mark, quote, who, project, bgImage], i) => (
              <Reveal key={who} delay={i * 0.06} hover>
                <div className={`${card} group h-full relative overflow-hidden min-h-[320px]`}>
                  
                  {/* Background image — strong & visible */}
                  <div
                    className="absolute inset-0 transition-all duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 0.55,
                    }}
                  />
                  
                  {/* Soft overlay — enough for text, not enough to hide image */}
                  <div className="absolute inset-0 bg-white/55 group-hover:bg-white/50 transition-colors duration-500" />

                  {/* Content */}
                  <div className="relative z-10 p-7 flex flex-col h-full">
                    <div className="text-[#c45c6a] text-3xl mb-4 group-hover:scale-125 transition-transform duration-300">
                      {mark}
                    </div>
                    <p className="text-stone-900 leading-relaxed mb-6 text-sm font-medium flex-1">
                      {quote}
                    </p>
                    <div>
                      <p className="font-semibold text-stone-900 text-sm group-hover:text-[#c45c6a] transition-colors">
                        {who}
                      </p>
                      <p className="text-stone-600 text-xs mt-0.5">{project}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-12">
            <CtaButton>Start Your Project</CtaButton>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 border-t border-stone-100 relative">
        <div className="max-w-6xl mx-auto">
          <Heading
            title="Let's Build Something Great"
            text="Have a website, booking system, backend work or an existing project that needs improvement? Tell me what you're building."
          />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <div>
                <h3 style={serif} className="text-2xl font-semibold mb-3 text-stone-900 hover:text-[#c45c6a] hover:scale-105 transition-all duration-300 cursor-default origin-left">
                  Start a Conversation
                </h3>
                <p className="text-stone-700 leading-relaxed text-sm">
                  Share your requirements, project idea, timeline or current website. I’ll get back to you and we can discuss the best approach.
                </p>
              </div>
              {[
                ["mailto:mishratrupti971@gmail.com", "Email", "mishratrupti971@gmail.com", true],
                ["https://wa.me/919594932292", "WhatsApp", "+91 95949 32292", false],
                ["tel:+919594932292", "Phone", "+91 95949 32292", false],
              ].map(([href, label, value, breakAll]) => (
                <a
                  key={label}
                  href={href}
                  target={label === "WhatsApp" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block p-5 rounded-xl bg-white border border-stone-200 hover:border-[#c45c6a]/50 hover:scale-[1.02] hover:shadow-md transition-all duration-300"
                >
                  <p className="text-stone-500 text-xs mb-1 tracking-wide">{label}</p>
                  <p className={`text-stone-800 text-sm ${breakAll ? "break-all" : ""}`}>{value}</p>
                </a>
              ))}
              <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
                <p className="text-[#c45c6a] font-medium text-sm mb-2">Available for Freelance Projects</p>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Business websites, landing pages, Laravel backends and APIs, bug fixes, maintenance, and dashboards or custom applications on request.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                {[
                  ["https://www.linkedin.com/in/truptimishra-366545243", "LinkedIn"],
                  ["https://leetcode.com/u/truptimishra047/", "LeetCode"],
                  ["https://www.instagram.com/mis_trupm", "Instagram"],
                ].map(([href, label]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-white border border-stone-200 text-stone-700 text-sm hover:text-[#c45c6a] hover:border-[#c45c6a]/50 hover:scale-110 transition-all duration-300"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-stone-200 p-6 md:p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)]">
              {formStatus === "success" ? (
                <div className="text-center py-12" role="status">
                  <div className="text-3xl mb-4 text-emerald-500">✓</div>
                  <h3 style={serif} className="text-2xl font-semibold mb-2 text-stone-900">Message Sent</h3>
                  <p className="text-stone-700 text-sm">Thanks for reaching out — I’ll get back to you soon.</p>
                  <button onClick={() => setFormStatus("idle")} className="mt-6 px-5 py-2.5 rounded-lg bg-stone-100 border border-stone-200 text-stone-700 text-sm hover:text-stone-900 hover:scale-105 transition-all">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <Field label="Your Name">
                    <input type="text" name="name" placeholder="Enter your name" required className={inputCls} />
                  </Field>
                  <Field label="Your Email">
                    <input type="email" name="email" placeholder="Enter your email" required className={inputCls} />
                  </Field>
                  <Field label="Project Details">
                    <textarea name="message" rows="5" placeholder="Tell me about your project, requirements, timeline or budget..." required className={`${inputCls} resize-none`} />
                  </Field>
                  <button type="submit" disabled={formStatus === "sending"} className={`${btnPrimary} w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed`}>
                    {formStatus === "sending" ? "Sending..." : "Send Project Enquiry →"}
                  </button>
                  {formStatus === "error" && (
                    <p role="alert" className="text-center text-red-600 text-sm">Something went wrong. Please try again or email me directly.</p>
                  )}
                  <p className="text-center text-stone-500 text-xs">Quick response · Written milestones & payment terms · NDA available</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 bg-stone-50 px-6 py-12 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 style={serif} className="text-xl font-semibold text-stone-900 hover:text-[#c45c6a] hover:scale-105 transition-all duration-300 cursor-default">
                Trupti Mishra
              </h3>
              <p className="text-stone-600 text-sm mt-1">Freelance Full-Stack Developer</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                ["Home", "#home"],
                ["Projects", "#projects"],
                ["Services", "#services"],
                ["Testimonials", "#testimonials"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <a key={l} href={h} className="text-stone-600 hover:text-[#c45c6a] hover:scale-110 transition-all duration-300">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-stone-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-stone-600 text-sm text-center">© {new Date().getFullYear()} Trupti Mishra. All rights reserved.</p>
            <p className="text-stone-500 text-xs text-center">React · Laravel · MySQL · REST APIs</p>
          </div>
        </div>
      </footer>

      <ConnectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type={modalType} />
    </div>
  );
}