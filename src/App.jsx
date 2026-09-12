import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function App() {
  const [pageLoading, setPageLoading] = useState(true);
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

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

  if (pageLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-black via-red-950 to-black flex flex-col items-center justify-center z-[9999]">
        <img
          src="/cutegirl.png"
          alt="Cute loading character"
          className="w-48 h-auto md:w-64 rounded-2xl shadow-2xl mb-6 border-4 border-red-500/50 animate-bounce"
        />
        <motion.p
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-300 via-pink-300 to-red-400 text-transparent bg-clip-text"
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </div>
    );
  }

  const projects = [
    {
      title: "AI SaaS Landing Page",
      description: "Modern AI startup landing page with product features, pricing plans, testimonials and responsive UI.",
      problem: "Startups need high-converting landing pages to present their SaaS products professionally.",
      tech: "React • Vite • Tailwind • Responsive UI • Vercel",
      outcome: "Delivered a fast modern landing page suitable for SaaS startups and product launches",
      demo: "https://aiwritersaas-landing.vercel.app",
      github: "https://github.com/truptiwebdev/aiwritersaas-landing",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1600",
    },
    {
      title: "SaaS Subscription & Billing Platform",
      description: "Full SaaS starter platform with Stripe billing, teams, permissions and subscription management.",
      problem: "Startups needed a ready backend to launch paid SaaS products quickly.",
      tech: "React • Laravel • Stripe • Tailwind • Vercel",
      outcome: "Helped founders launch SaaS products 4× faster",
      demo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600",
    },
    {
      title: "E-commerce Admin Dashboard",
      description: "Full product management dashboard with order tracking, payments and customer storefront.",
      problem: "Store owners needed a simple system to manage products and orders.",
      tech: "React • Laravel • Stripe • MySQL • Tailwind",
      outcome: "Improved store operations efficiency by 45%",
      demo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1600",
    },
    {
      title: "Real-time Collaboration Whiteboard",
      description: "Live collaborative board with drawing, sticky notes and team rooms.",
      problem: "Remote teams needed a real-time brainstorming tool.",
      tech: "React • Laravel Reverb • WebSockets • Canvas API",
      outcome: "Enabled seamless remote collaboration",
      demo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
    },
    {
      title: "Smart Personal Finance Tracker",
      description: "AI-powered budgeting dashboard with spending insights and charts.",
      problem: "Users struggled to track and understand their expenses.",
      tech: "React • Laravel • Chart.js • OpenAI",
      outcome: "Helped users improve financial awareness",
      demo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1551288049-b1f4d7c6e0e5?auto=format&fit=crop&q=80&w=1600",
    },
    {
      title: "Freelancer CRM & Invoice System",
      description: "Client management tool with invoicing, proposals and time tracking.",
      problem: "Freelancers needed a simple system to manage clients and payments.",
      tech: "React • Laravel • Stripe • Mailgun",
      outcome: "Reduced admin work for freelancers by 50%",
      demo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1600",
    },
  ];

  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden bg-black">

      {/* Background effects */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black" />

        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-br from-red-600/30 via-pink-600/20 to-transparent blur-3xl"
          animate={{
            x: ["-40%", "30%", "-20%", "40%"],
            y: ["-50%", "40%", "-60%", "30%"],
            scale: [1, 1.3, 0.9, 1.4],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "-20%", left: "-30%" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-red-500/25 via-purple-500/15 to-transparent blur-3xl"
          animate={{
            x: ["30%", "-50%", "20%", "-40%"],
            y: ["30%", "-40%", "50%", "-30%"],
            scale: [1, 1.35, 0.85, 1.45],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 8 }}
          style={{ bottom: "-15%", right: "-25%" }}
        />

        <div
          className="absolute inset-0 opacity-20 mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.9'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-xl border border-red-600/30 rounded-full px-6 md:px-8 py-3 flex gap-4 md:gap-6 text-sm md:text-base font-medium z-50 shadow-lg">
        {["Home", "About", "Skills", "Projects", "Services", "Experience", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative hover:text-red-300 transition-colors group"
            whileHover={{ scale: 1.08, y: -2 }}
          >
            {item}
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-20 relative"
      >
        {/* Hero Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/tech.png"
            alt="Futuristic technology background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mb-8 md:mb-10 z-10"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-red-500/70 shadow-2xl mx-auto bg-black/40">
            <img
              src="/truptipic.jpeg"
              alt="Trupti Mishra - Freelance Full-Stack Developer"
              className="w-full h-full object-contain object-center"
            />
          </div>

          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/50 to-pink-600/40 blur-2xl -z-10"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Small Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-red-300 text-sm md:text-base font-semibold tracking-wider uppercase mb-3 z-10"
        >
          Freelance Full-Stack Developer
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-5 bg-gradient-to-r from-red-300 via-pink-300 to-red-400 text-transparent bg-clip-text z-10 max-w-5xl"
        >
          I Build Modern Websites & Web Applications That Help Businesses Grow
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed z-10"
        >
          I’m Trupti Mishra, a full-stack developer with 2+ years of professional
          experience and 8+ months of freelancing experience. I create responsive
          business websites, SaaS products, dashboards, and custom web applications
          tailored to your goals.
        </motion.p>

        {/* Services Highlight */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 text-sm md:text-base text-gray-300 z-10"
        >
          Business Websites • Landing Pages • SaaS • Dashboards • Custom Web Apps
        </motion.p>

        {/* Tech Stack */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-3 text-red-300 text-sm md:text-base font-medium z-10"
        >
          React • Laravel • MySQL • REST APIs • Tailwind CSS
        </motion.p>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-5 flex items-center gap-2 text-green-400 text-sm md:text-base font-semibold z-10"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          Available for freelance projects
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 z-10"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-red-600 to-pink-600 px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all"
          >
            View My Work →
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="border border-red-400 px-8 py-3.5 rounded-full font-semibold hover:bg-red-600/20 transition-all"
          >
            Let's Work Together
          </motion.a>
        </motion.div>

        {/* Experience Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10 text-center z-10"
        >
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white">2+</p>
            <p className="text-xs md:text-sm text-gray-400">
              Years Experience
            </p>
          </div>

          <div>
            <p className="text-2xl md:text-3xl font-bold text-white">8+</p>
            <p className="text-xs md:text-sm text-gray-400">
              Months Freelancing
            </p>
          </div>

          <div>
            <p className="text-2xl md:text-3xl font-bold text-white">10+</p>
            <p className="text-xs md:text-sm text-gray-400">
              Happy Clients
            </p>
          </div>
        </motion.div>
      </section>
     {/* ABOUT */}
<section id="about" className="py-20 px-6 max-w-6xl mx-auto">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    className="bg-black/50 backdrop-blur-xl border border-red-600/30 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    <div className="relative z-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-red-300 text-sm font-semibold uppercase tracking-widest mb-2">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
          Turning Ideas Into Digital Experiences
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-base md:text-lg text-gray-200 leading-relaxed">
          I’m Trupti Mishra, a Full-Stack Developer with{" "}
          <span className="text-red-300 font-semibold">
            2+ years of professional experience
          </span>{" "}
          and{" "}
          <span className="text-red-300 font-semibold">
            8+ months of freelancing experience
          </span>
          .
        </p>

        <p className="mt-5 text-base md:text-lg text-gray-300 leading-relaxed">
          I build modern, responsive and user-friendly websites and web
          applications for businesses, startups and entrepreneurs. From
          business websites and landing pages to SaaS platforms, dashboards,
          CRMs and custom web applications, I focus on creating solutions that
          are reliable, scalable and easy to use.
        </p>

        <p className="mt-5 text-base md:text-lg text-gray-300 leading-relaxed">
          My goal is simple — understand your business, turn your idea into a
          professional digital product, and deliver a website or application
          that helps you achieve your goals.
        </p>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {[
          {
            title: "2+",
            text: "Years Experience",
          },
          {
            title: "8+",
            text: "Months Freelancing",
          },
          {
            title: "10+",
            text: "Happy Clients",
          },
          {
            title: "20+",
            text: "Projects Built",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-black/50 border border-red-500/20 rounded-2xl p-5 text-center hover:border-red-400/50 transition-all"
          >
            <p className="text-2xl md:text-3xl font-bold text-red-300">
              {item.title}
            </p>

            <p className="text-sm text-gray-400 mt-1">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="mt-10 text-center">
        <p className="text-sm text-gray-400 mb-3">
          Core Technologies
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {[
            "React",
            "Laravel",
            "PHP",
            "MySQL",
            "Tailwind CSS",
            "REST APIs",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-red-950/50 border border-red-700/30 text-red-300 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
</section>

{/* TRUSTED TECH */}
<section className="py-16 px-6 text-center relative">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="max-w-5xl mx-auto"
  >
    <p className="text-red-300 text-sm font-semibold uppercase tracking-widest mb-3">
      Technologies I Work With
    </p>

    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
      Built With Modern Technology
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm md:text-base">
      I use reliable and modern technologies to build responsive websites,
      scalable web applications, dashboards and custom digital solutions.
    </p>

    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {[
        "React.js",
        "Laravel",
        "PHP",
        "MySQL",
        "Tailwind CSS",
        "REST APIs",
        "JavaScript",
        "Git",
        "Docker",
      ].map((tech, index) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ y: -3, scale: 1.05 }}
          className="px-5 py-2.5 rounded-full bg-black/50 backdrop-blur-md border border-red-500/20 text-gray-200 text-sm md:text-base font-medium hover:border-red-400/60 hover:text-red-300 transition-all shadow-lg"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  </motion.div>
</section>

{/* SKILLS */}
<section id="skills" className="py-20 px-6 bg-black/30 backdrop-blur-sm">
  <div className="max-w-6xl mx-auto">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <p className="text-red-300 text-sm font-semibold uppercase tracking-widest mb-3">
        My Expertise
      </p>

      <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text mb-4">
        Skills & Expertise
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
        From frontend experiences to backend systems, I build complete,
        reliable and scalable digital solutions.
      </p>
    </motion.div>

    {/* Skill Cards */}
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          title: "Frontend Development",
          description:
            "Building responsive, modern and user-friendly interfaces that work smoothly across devices.",
          items: [
            "React.js",
            "JavaScript",
            "HTML5 & CSS3",
            "Tailwind CSS",
            "Responsive UI/UX",
            "Framer Motion",
          ],
          img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
        },
        {
          title: "Backend & Database",
          description:
            "Developing secure backend systems, APIs and database-driven applications.",
          items: [
            "Laravel",
            "PHP",
            "RESTful APIs",
            "MySQL",
            "PostgreSQL",
            "Eloquent ORM",
          ],
          img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80",
        },
        {
          title: "Tools & Delivery",
          description:
            "Using modern development and deployment tools to deliver reliable projects efficiently.",
          items: [
            "Git & GitHub",
            "Docker",
            "Postman",
            "Jira / Agile",
            "Vercel",
            "Railway / Forge",
          ],
          img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
        },
      ].map((group, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          whileHover={{ y: -8 }}
          className="bg-black/50 backdrop-blur-xl rounded-3xl border border-red-600/20 hover:border-red-500/50 transition-all overflow-hidden shadow-2xl"
        >
          {/* Image */}
          <div className="relative h-44 overflow-hidden">
            <img
              src={group.img}
              alt={`${group.title} development`}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-red-300">
              {group.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {group.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full bg-red-950/50 border border-red-700/30 text-red-200 text-xs md:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Client-Focused Skills */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {[
        "Responsive Websites",
        "SaaS Applications",
        "Dashboards & CRMs",
        "API Integrations",
      ].map((item) => (
        <div
          key={item}
          className="bg-black/40 border border-red-500/20 rounded-2xl p-4 text-center hover:border-red-400/50 transition-all"
        >
          <p className="text-gray-200 text-sm font-medium">
            ✓ {item}
          </p>
        </div>
      ))}
    </motion.div>

  </div>
</section>

{/* PROJECTS */}
<section id="projects" className="py-20 px-6 relative">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-black" />
  </div>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-14"
    >
      <p className="text-red-300 text-sm font-semibold uppercase tracking-widest mb-3">
        Selected Work
      </p>

      <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-red-400 via-pink-500 to-red-400 bg-clip-text text-transparent mb-5">
        Projects I’ve Built
      </h2>

      <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        A selection of web applications, SaaS products, dashboards and
        business solutions I’ve designed and developed.
      </p>
    </motion.div>

    {/* Project Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: index * 0.08 }}
          whileHover={{ y: -8 }}
          className="group relative bg-black/65 backdrop-blur-xl rounded-3xl border border-red-700/30 hover:border-red-500/70 overflow-hidden shadow-2xl transition-all duration-300"
        >

          {/* Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-pink-600 to-red-600" />

          {/* Project Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Project Number */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-red-500/30 text-red-300 text-xs font-semibold">
              0{index + 1}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">

            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Problem */}
            <div className="mb-4">
              <p className="text-xs uppercase tracking-wide text-red-300 font-semibold mb-1">
                Problem
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Outcome */}
            <div className="mb-5">
              <p className="text-xs uppercase tracking-wide text-green-400 font-semibold mb-1">
                Outcome
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                {project.outcome}
              </p>
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.split(" • ").map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-full bg-red-950/60 text-red-300 text-xs border border-red-800/40"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-red-900/30">

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-red-300 hover:text-red-200 transition-colors"
              >
                Live Demo →
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                GitHub →
              </a>
            </div>

          </div>
        </motion.div>
      ))}
    </div>

    {/* Small Business Projects */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16"
    >
      <div className="text-center mb-8">
        <p className="text-red-300 text-sm font-semibold uppercase tracking-widest mb-2">
          Business Websites
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Websites for Growing Businesses
        </h3>

        <p className="text-gray-400 text-sm md:text-base mt-2 max-w-2xl mx-auto">
          I also create modern, mobile-friendly websites for businesses and
          personal brands.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">

        {/* Salon */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-black/50 border border-red-500/20 rounded-2xl p-6 text-center hover:border-red-400/50 transition-all"
        >
          <div className="text-4xl mb-4">💇‍♀️</div>

          <h4 className="text-xl font-bold text-white mb-2">
            Salon Website
          </h4>

          <p className="text-gray-400 text-sm leading-relaxed">
            Modern salon website with services, pricing, gallery and
            appointment-focused design.
          </p>

          <p className="mt-4 text-red-300 text-xs font-semibold">
            Business Website
          </p>
        </motion.div>

        {/* Cafe */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-black/50 border border-red-500/20 rounded-2xl p-6 text-center hover:border-red-400/50 transition-all"
        >
          <div className="text-4xl mb-4">☕</div>

          <h4 className="text-xl font-bold text-white mb-2">
            Cafe Website
          </h4>

          <p className="text-gray-400 text-sm leading-relaxed">
            Attractive cafe website with menu, location, gallery and
            customer enquiry features.
          </p>

          <p className="mt-4 text-red-300 text-xs font-semibold">
            Business Website
          </p>
        </motion.div>

        {/* Gym */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-black/50 border border-red-500/20 rounded-2xl p-6 text-center hover:border-red-400/50 transition-all"
        >
          <div className="text-4xl mb-4">🏋️</div>

          <h4 className="text-xl font-bold text-white mb-2">
            Gym Website
          </h4>

          <p className="text-gray-400 text-sm leading-relaxed">
            High-energy fitness website with membership plans, programs,
            trainers and enquiry-focused sections.
          </p>

          <p className="mt-4 text-red-300 text-xs font-semibold">
            Business Website
          </p>
        </motion.div>

      </div>
    </motion.div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mt-16"
    >
      <p className="text-lg md:text-xl text-gray-200 mb-6">
        Have a project in mind?
      </p>

      <a
        href="#contact"
        className="inline-block bg-gradient-to-r from-red-600 to-pink-600 px-9 py-4 rounded-full font-bold shadow-xl hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] transition-all hover:-translate-y-1"
      >
        Start Your Project →
      </a>
    </motion.div>

  </div>
</section>

{/* CLIENT RESULTS */}
<section
  id="results"
  className="max-w-7xl mx-auto px-6 py-24 relative"
>
  <div className="text-center mb-14">
    <p className="text-sm uppercase tracking-[0.3em] text-pink-400 font-semibold mb-3">
      Proven Work
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-white">
      Results That Matter
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
      I focus on building reliable digital solutions that improve business
      workflows, performance, and day-to-day operations — not just writing code.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        icon: "🚚",
        title: "Logistics CRM",
        result: "Built a CRM dashboard used for daily business operations.",
        type: "Business Operations",
      },
      {
        icon: "⚡",
        title: "Workflow Automation",
        result: "Reduced manual administrative work by 50% using automation tools.",
        type: "Automation",
      },
      {
        icon: "💳",
        title: "SaaS Subscription Platform",
        result: "Developed a SaaS platform with subscription and Stripe billing functionality.",
        type: "SaaS Development",
      },
      {
        icon: "🔗",
        title: "REST API Systems",
        result: "Developed secure REST APIs for mobile applications and connected systems.",
        type: "Backend Development",
      },
      {
        icon: "🚀",
        title: "Database Performance",
        result: "Optimized database queries and improved application speed by 40%.",
        type: "Performance Optimization",
      },
      {
        icon: "📊",
        title: "Startup Dashboards",
        result: "Delivered scalable dashboards designed around startup and business workflows.",
        type: "Dashboard Development",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.05 }}
        className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.06] hover:border-pink-500/30 transition-all duration-300"
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="text-3xl">
            {item.icon}
          </div>

          <span className="text-xs px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300">
            {item.type}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">
          {item.title}
        </h3>

        <p className="text-gray-400 leading-relaxed">
          {item.result}
        </p>

        <div className="mt-6 h-px bg-white/10 group-hover:bg-pink-500/30 transition-colors" />

        <p className="text-sm text-gray-500 mt-4">
          Real-world development & delivery
        </p>
      </motion.div>
    ))}
  </div>

  <div className="mt-14 text-center">
    <p className="text-gray-400 mb-5">
      Have a similar business challenge?
    </p>

    <a
      href="#contact"
      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform"
    >
      Let’s Discuss Your Project
      <span>→</span>
    </a>
  </div>
</section>

     {/* DEVELOPMENT PROCESS */}
<section
  id="process"
  className="max-w-7xl mx-auto px-6 py-24 relative"
>
  <div className="text-center mb-14">
    <p className="text-sm uppercase tracking-[0.3em] text-pink-400 font-semibold mb-3">
      Simple & Transparent
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-white">
      How I Work With Clients
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
      A clear development process keeps your project organized, predictable,
      and focused on the final business goal.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        number: "01",
        icon: "💬",
        title: "Discovery",
        description:
          "We discuss your idea, requirements, target users, features, timeline, and project goals.",
      },
      {
        number: "02",
        icon: "⚙️",
        title: "Development",
        description:
          "I build the website or application using a clean, scalable, and responsive development approach.",
      },
      {
        number: "03",
        icon: "🧪",
        title: "Testing",
        description:
          "I test functionality, responsiveness, APIs, forms, performance, and important user flows.",
      },
      {
        number: "04",
        icon: "🚀",
        title: "Launch",
        description:
          "After final approval, I deploy the project and make sure everything is ready for real users.",
      },
    ].map((step, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        className="relative group rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.06] hover:border-pink-500/30 transition-all duration-300"
      >
        <div className="flex items-center justify-between mb-7">
          <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-2xl">
            {step.icon}
          </div>

          <span className="text-4xl font-bold text-white/10 group-hover:text-pink-500/20 transition-colors">
            {step.number}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">
          {step.title}
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm">
          {step.description}
        </p>
      </motion.div>
    ))}
  </div>

  <div className="mt-14 rounded-2xl border border-pink-500/20 bg-gradient-to-r from-pink-500/10 to-red-500/5 p-7 md:p-8 text-center">
    <h3 className="text-2xl font-semibold text-white mb-3">
      Have an idea? Let’s turn it into a working product.
    </h3>

    <p className="text-gray-400 max-w-2xl mx-auto mb-6">
      Share your requirements and I’ll help you choose the right approach,
      features, and technology for your project.
    </p>

    <a
      href="#contact"
      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform"
    >
      Start a Conversation
      <span>→</span>
    </a>
  </div>
</section>
{/* SERVICES */}
<section id="services" className="py-20 px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      Services I Offer
    </h2>

    <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
      Practical, scalable web solutions designed to help businesses launch,
      improve, and grow online.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Business Websites */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition">
        <div className="text-3xl mb-4">🌐</div>

        <h3 className="text-xl font-semibold text-white mb-3">
          Business Websites
        </h3>

        <p className="text-gray-400 text-sm leading-6 mb-4">
          Professional, responsive websites for businesses, startups,
          local brands, salons, cafes, gyms, and service providers.
        </p>

        <p className="text-cyan-400 text-sm">
          React • Laravel • Tailwind CSS
        </p>
      </div>

      {/* Landing Pages */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition">
        <div className="text-3xl mb-4">🚀</div>

        <h3 className="text-xl font-semibold text-white mb-3">
          Landing Pages
        </h3>

        <p className="text-gray-400 text-sm leading-6 mb-4">
          High-converting landing pages for products, services,
          campaigns, portfolios, and marketing purposes.
        </p>

        <p className="text-cyan-400 text-sm">
          Responsive UI • CTA • Performance
        </p>
      </div>

      {/* Custom Web Applications */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition">
        <div className="text-3xl mb-4">💻</div>

        <h3 className="text-xl font-semibold text-white mb-3">
          Custom Web Applications
        </h3>

        <p className="text-gray-400 text-sm leading-6 mb-4">
          Custom dashboards, CRM systems, admin panels, business tools,
          and web applications built around your workflow.
        </p>

        <p className="text-cyan-400 text-sm">
          React • Laravel • MySQL
        </p>
      </div>

      {/* SaaS & MVP */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition">
        <div className="text-3xl mb-4">⚡</div>

        <h3 className="text-xl font-semibold text-white mb-3">
          SaaS & MVP Development
        </h3>

        <p className="text-gray-400 text-sm leading-6 mb-4">
          Build and launch MVPs and SaaS products with scalable
          architecture, authentication, subscriptions, and dashboards.
        </p>

        <p className="text-cyan-400 text-sm">
          React • Laravel • REST APIs • Stripe
        </p>
      </div>

      {/* Backend & APIs */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition">
        <div className="text-3xl mb-4">🔗</div>

        <h3 className="text-xl font-semibold text-white mb-3">
          Backend & API Development
        </h3>

        <p className="text-gray-400 text-sm leading-6 mb-4">
          Secure REST APIs, backend logic, database integration,
          authentication, third-party integrations, and payment systems.
        </p>

        <p className="text-cyan-400 text-sm">
          PHP • Laravel • MySQL • REST APIs
        </p>
      </div>

      {/* Fixes & Performance */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition">
        <div className="text-3xl mb-4">🛠️</div>

        <h3 className="text-xl font-semibold text-white mb-3">
          Fixes & Performance
        </h3>

        <p className="text-gray-400 text-sm leading-6 mb-4">
          Fix existing website issues, improve slow applications,
          optimize databases, resolve bugs, and improve overall performance.
        </p>

        <p className="text-cyan-400 text-sm">
          Bug Fixes • Optimization • Database Performance
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="text-center mt-12">
      <p className="text-gray-400 mb-5">
        Have a project in mind? Let's build something that works for your business.
      </p>

      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition"
      >
        Let's Work Together
        <span>→</span>
      </a>
    </div>

  </div>
</section>

     {/* EXPERIENCE */}
<section
  id="experience"
  className="max-w-7xl mx-auto px-6 py-24 relative"
>
  <div className="text-center mb-14">
    <p className="text-sm uppercase tracking-[0.3em] text-pink-400 font-semibold mb-3">
      My Background
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-white">
      Professional Experience
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
      Professional experience building full-stack applications, business
      systems, APIs, dashboards, and scalable web solutions.
    </p>
  </div>

  <div className="relative">
    {/* Timeline Line */}
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500/50 via-red-500/30 to-transparent" />

    <div className="space-y-8">
      {[
        {
          year: "Professional Experience",
          role: "Full Stack Developer",
          company: "TEMPCON EXPRESS PVT. LTD, Mumbai",
          desc:
            "Built and maintained an internal CRM using React and Laravel. Worked on REST APIs, application performance, database-driven features, and clean full-stack architecture.",
          skills: ["React", "Laravel", "REST APIs", "MySQL", "Performance"],
        },
        {
          year: "Professional Experience",
          role: "Software Developer",
          company: "TechExcel Software Solutions, Mumbai",
          desc:
            "Worked on multiple client projects by developing responsive user interfaces, Laravel backends, API integrations, and business-focused web solutions.",
          skills: ["Laravel", "PHP", "React", "Responsive UI", "Integrations"],
        },
        {
          year: "Professional Experience",
          role: "Software Developer",
          company: "Loke Infosolutions Pvt Ltd, Mumbai",
          desc:
            "Developed secure REST APIs, optimized MySQL databases, and implemented authentication and payment-related functionality for web applications.",
          skills: ["PHP", "REST APIs", "MySQL", "Authentication", "Payments"],
        },
      ].map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`relative md:w-[calc(50%-32px)] ${
            i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
          }`}
        >
          {/* Timeline Dot */}
          <div
            className={`hidden md:block absolute top-8 w-4 h-4 rounded-full bg-pink-500 border-4 border-[#080808] shadow-[0_0_20px_rgba(236,72,153,0.5)] ${
              i % 2 === 0 ? "-right-[41px]" : "-left-[41px]"
            }`}
          />

          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 hover:bg-white/[0.06] hover:border-pink-500/30 transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="text-xs uppercase tracking-wider text-pink-400 font-semibold">
                {exp.year}
              </span>

              <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                {i === 0
                  ? "Full Stack"
                  : i === 1
                  ? "Client Projects"
                  : "Backend & APIs"}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {exp.role}
            </h3>

            <p className="text-pink-300 font-medium mb-4">
              {exp.company}
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {exp.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="text-xs px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Experience Summary */}
  <div className="mt-16 grid sm:grid-cols-3 gap-5">
    {[
      {
        value: "2+",
        label: "Years Professional Experience",
      },
      {
        value: "8+",
        label: "Months Freelancing",
      },
      {
        value: "20+",
        label: "Projects Built",
      },
    ].map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="text-center rounded-2xl border border-white/10 bg-white/[0.03] p-6"
      >
        <div className="text-3xl font-bold text-white mb-2">
          {stat.value}
        </div>

        <p className="text-sm text-gray-400">
          {stat.label}
        </p>
      </motion.div>
    ))}
  </div>
</section>

{/* WHY WORK WITH ME */}
<section className="py-20 px-6">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      Why Work With Me
    </h2>

    <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
      I focus on building reliable, practical, and business-focused web
      solutions — not just writing code.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <div className="text-3xl mb-4">💼</div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Professional Experience
        </h3>
        <p className="text-gray-400 text-sm leading-6">
          2+ years of professional development experience working on
          real-world web applications and business projects.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <div className="text-3xl mb-4">🚀</div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Freelance Experience
        </h3>
        <p className="text-gray-400 text-sm leading-6">
          8+ months of freelancing experience focused on understanding
          client requirements and delivering practical solutions.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <div className="text-3xl mb-4">🎯</div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Business-Focused
        </h3>
        <p className="text-gray-400 text-sm leading-6">
          I build websites and applications with usability, performance,
          scalability, and business goals in mind.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <div className="text-3xl mb-4">⚡</div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Clean & Scalable Code
        </h3>
        <p className="text-gray-400 text-sm leading-6">
          Structured code and reusable components make applications easier
          to maintain, improve, and scale.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <div className="text-3xl mb-4">🤝</div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Clear Communication
        </h3>
        <p className="text-gray-400 text-sm leading-6">
          Clear communication throughout the project helps keep
          requirements, progress, and expectations aligned.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <div className="text-3xl mb-4">🔧</div>
        <h3 className="text-xl font-semibold text-white mb-2">
          End-to-End Support
        </h3>
        <p className="text-gray-400 text-sm leading-6">
          From development and API integration to bug fixing and
          performance improvements, I can support the complete workflow.
        </p>
      </div>

    </div>

  </div>
</section>

{/* TESTIMONIALS */}
<section id="testimonials" className="py-20 px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      Client Feedback
    </h2>

    <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
      Real project experiences from clients I've worked with.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      {/* TESTIMONIAL 1 */}
      <motion.div
        whileHover={{ y: -6 }}
        className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
      >
        <div className="text-cyan-400 text-4xl mb-4">
          “
        </div>

        <p className="text-gray-300 leading-7 mb-6">
          Trupti delivered our dashboard faster than expected and the code
          quality was excellent.
        </p>

        <div>
          <p className="text-white font-semibold">
            Startup Founder
          </p>

          <p className="text-gray-500 text-sm">
            Dashboard Project
          </p>
        </div>
      </motion.div>

      {/* TESTIMONIAL 2 */}
      <motion.div
        whileHover={{ y: -6 }}
        className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
      >
        <div className="text-cyan-400 text-4xl mb-4">
          “
        </div>

        <p className="text-gray-300 leading-7 mb-6">
          Our internal CRM became much faster and easier to manage after
          her improvements.
        </p>

        <div>
          <p className="text-white font-semibold">
            Operations Manager
          </p>

          <p className="text-gray-500 text-sm">
            CRM & Performance Project
          </p>
        </div>
      </motion.div>

      {/* TESTIMONIAL 3 */}
      <motion.div
        whileHover={{ y: -6 }}
        className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
      >
        <div className="text-cyan-400 text-4xl mb-4">
          ★
        </div>

        <p className="text-gray-300 leading-7 mb-6">
          Successfully delivered a web development project with a strong
          focus on requirements, usability, and reliable implementation.
        </p>

        <div>
          <p className="text-white font-semibold">
            Happy Client
          </p>

          <p className="text-gray-500 text-sm">
            Web Development Project
          </p>
        </div>
      </motion.div>

    </div>

    <div className="text-center mt-10">
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition"
      >
        Start Your Project
        <span>→</span>
      </a>
    </div>

  </div>
</section>
     {/* CONTACT */}
<section id="contact" className="py-20 px-6">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Let's Build Something Great
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto">
        Have a website, web application, SaaS idea, or an existing project
        that needs improvement? Tell me what you're building.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-10 items-start">

      {/* LEFT - CONTACT INFORMATION */}
      <div className="space-y-6">

        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            Start a Conversation
          </h3>

          <p className="text-gray-400 leading-7">
            Share your requirements, project idea, timeline, or current
            website. I'll get back to you and we can discuss the best
            approach for your project.
          </p>
        </div>

        {/* Email */}
        <a
          href="mailto:mishratrupti971@gmail.com"
          className="block p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition"
        >
          <p className="text-gray-500 text-sm mb-1">
            Email
          </p>

          <p className="text-white break-all">
            mishratrupti971@gmail.com
          </p>
        </a>

        {/* Phone */}
        <a
          href="tel:+919594932292"
          className="block p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition"
        >
          <p className="text-gray-500 text-sm mb-1">
            Phone
          </p>

          <p className="text-white">
            +91 95949 32292
          </p>
        </a>

        {/* Freelance Availability */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
          <p className="text-cyan-400 font-semibold mb-2">
            Available for Freelance Projects
          </p>

          <p className="text-gray-400 text-sm leading-6">
            Business websites, landing pages, dashboards, custom web
            applications, SaaS/MVP development, REST APIs, bug fixes,
            and performance optimization.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4">

          <a
            href="https://www.linkedin.com/in/truptimishra-366545243"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400/50 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/truptimishra047/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400/50 transition"
          >
            LeetCode
          </a>

        </div>

      </div>

      {/* RIGHT - CONTACT FORM */}
      <motion.div
        whileHover={{ y: -3 }}
        className="rounded-3xl bg-black/50 backdrop-blur-xl border border-white/10 p-6 md:p-8"
      >

        {formStatus === "success" ? (
          <div className="text-center py-10">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Message Sent
            </h3>
            <p className="text-gray-400">
              Thanks for reaching out — I'll get back to you soon.
            </p>
            <button
              onClick={() => setFormStatus("idle")}
              className="mt-6 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400/50 transition"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-cyan-400/60 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-cyan-400/60 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Project Details
              </label>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project, requirements, timeline, or budget..."
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-cyan-400/60 transition resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {formStatus === "sending" ? "Sending..." : "Send Project Enquiry →"}
            </button>

            {formStatus === "error" && (
              <p className="text-center text-red-400 text-sm">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            <p className="text-center text-gray-500 text-xs">
              Quick response • Fixed-price / milestone payments • NDA available
            </p>

          </form>
        )}

      </motion.div>

    </div>

  </div>
</section>
      {/* FOOTER */}
<footer className="border-t border-white/10 bg-black/40 px-6 py-10">
  <div className="max-w-6xl mx-auto">

    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

      {/* Brand */}
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-white">
          Trupti Mishra
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Freelance Full-Stack Developer
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-5 text-sm">
        <a
          href="#home"
          className="text-gray-400 hover:text-cyan-400 transition"
        >
          Home
        </a>

        <a
          href="#projects"
          className="text-gray-400 hover:text-cyan-400 transition"
        >
          Projects
        </a>

        <a
          href="#services"
          className="text-gray-400 hover:text-cyan-400 transition"
        >
          Services
        </a>

        <a
          href="#testimonials"
          className="text-gray-400 hover:text-cyan-400 transition"
        >
          Testimonials
        </a>

        <a
          href="#contact"
          className="text-gray-400 hover:text-cyan-400 transition"
        >
          Contact
        </a>
      </div>

    </div>

    <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">

      <p className="text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Trupti Mishra. All rights reserved.
      </p>

      <p className="text-gray-600 text-xs text-center">
        React • Laravel • MySQL • REST APIs
      </p>

    </div>

  </div>
</footer>
    </div>
  );
}