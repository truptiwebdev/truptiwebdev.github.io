import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function App() {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

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

  const SmallLoading = () => (
    <div className="flex flex-col items-center justify-center py-12">
      <img
        src="/cutegirl.png"
        alt="Small loading character"
        className="w-16 h-auto rounded-full mb-3 shadow-lg border-2 border-red-500/40 animate-pulse"
      />
      <p className="text-sm font-medium text-red-300">Loading section...</p>
    </div>
  );

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
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-12 relative">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <img src="/tech.png" alt="Tech futuristic background" className="w-full h-full object-cover" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="relative mb-10 z-10"
          whileHover={{ scale: 1.1, rotateX: 12, rotateY: 12 }}
        >
          <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-red-500/70 shadow-2xl mx-auto bg-black/30">
            <img
              src="/truptipic.jpeg"
              alt="Trupti Mishra profile picture"
              className="w-full h-full object-contain object-center"
            />
          </div>

          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/60 to-pink-600/50 blur-2xl -z-10"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-3 bg-gradient-to-r from-red-300 via-pink-300 to-red-400 text-transparent bg-clip-text z-10"
        >
          Trupti Mishra
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-4 z-10"
        >
          Freelance Full-Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed z-10"
        >
          I build fast, modern, scalable web apps — from MVPs to production-ready SaaS tools, dashboards, and custom business solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 text-red-300 text-sm md:text-base font-medium"
        >
          Laravel • React • MySQL • REST APIs • Tailwind
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-green-400 text-sm font-semibold"
        >
          ● Available for freelance projects
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 mt-8 z-10"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-red-600 to-pink-600 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-red-400 px-8 py-3 rounded-full font-semibold hover:bg-red-600/20 transition-all"
          >
            Hire Me
          </a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.03, rotateX: 6, rotateY: 6 }}
          className="bg-black/50 backdrop-blur-xl border border-red-600/30 p-8 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              alt="Neon holographic workspace background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
              About Me
            </h2>

            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
              Freelance full-stack developer specializing in Laravel + React stacks. I help startups, small businesses and entrepreneurs launch clean, performant web applications — fast MVPs, internal tools, client portals, and custom SaaS features.
            </p>

            <p className="mt-4 text-base md:text-lg text-gray-300">
              Core stack: Laravel (PHP), React.js + Tailwind, MySQL, RESTful APIs, basic DevOps & deployment knowledge.
            </p>
          </div>
        </motion.div>
      </section>

      {/* TRUSTED TECH */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
          Trusted Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-red-300 font-medium text-lg">
          <span>Laravel</span>
          <span>React</span>
          <span>MySQL</span>
          <span>REST APIs</span>
          <span>Tailwind</span>
          <span>Docker</span>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 px-6 bg-black/30 backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
          Skills
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Frontend",
              items: ["React.js", "Responsive UI/UX", "Tailwind CSS", "Framer Motion"],
              img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Backend & Data",
              items: ["Laravel (PHP)", "Eloquent ORM", "RESTful APIs", "MySQL / PostgreSQL"],
              img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Tools & Delivery",
              items: ["Git", "Docker basics", "Jira / Agile", "Postman", "Vercel / Railway / Forge"],
              img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
            }
          ].map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
              className="bg-black/50 backdrop-blur-xl rounded-3xl border border-red-600/20 hover:border-red-500/50 transition-all overflow-hidden shadow-2xl"
            >
              <img
                src={group.img}
                alt={`${group.title} illustration`}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-red-300">{group.title}</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {group.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-black" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-400 via-pink-500 to-red-400 bg-clip-text text-transparent mb-5">
              Recent Client Projects
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real solutions delivered to startups, creators & businesses — fast, clean and scalable.
              <br className="hidden md:block" />
              <span className="text-red-400 font-semibold">Hover cards to feel the vibe →</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative bg-black/65 backdrop-blur-xl rounded-3xl border border-red-700/30 hover:border-red-500/70 overflow-hidden shadow-2xl transition-all duration-400 hover:shadow-[0_0_50px_rgba(239,68,68,0.3)]"
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="relative h-56 overflow-hidden border-b border-red-900/40">
                  <img
                    src={project.image}
                    alt={`${project.title} dashboard screenshot`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    <span className="text-red-300 font-medium">Problem:</span> {project.problem}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.split(" • ").map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-red-950/60 text-red-300 text-xs rounded-full border border-red-800/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-green-400 font-medium">
                      ✓ {project.outcome}
                    </div>
                    <div className="flex gap-4 mt-3 text-sm">
                      <a
  href={project.demo}
  target="_blank"
  rel="noopener noreferrer"
  className="text-red-400 hover:underline"
>
  Live Demo
</a>
                      <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-20">
            <p className="text-2xl text-gray-200 mb-8">
              Ready to get a similar high-quality project for your business?
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-red-600 to-pink-600 px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-[0_0_60px_rgba(239,68,68,0.5)] transition-all transform hover:-translate-y-2"
            >
              Start Your Project Now →
            </a>
          </div>
        </div>
      </section>

      {/* CLIENT RESULTS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
          Client Results
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            "✔ Built logistics CRM dashboard used for daily operations",
            "✔ Reduced manual admin work by 50% using automation tools",
            "✔ Developed SaaS subscription platform with Stripe billing",
            "✔ Built secure REST APIs for mobile applications",
            "✔ Optimized database queries improving speed by 40%",
            "✔ Delivered scalable dashboards for startups"
          ].map((item, i) => (
            <div key={i} className="bg-black/50 p-6 rounded-2xl border border-red-500/20">
              <p className="text-gray-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="py-16 px-6 text-center bg-black/30 backdrop-blur-sm">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
          How I Work With Clients
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 text-left">
          <div className="bg-black/50 p-6 rounded-2xl border border-red-500/20">
            <h3 className="text-red-300 font-bold mb-2">1. Discovery</h3>
            <p className="text-gray-300 text-sm">
              Understanding your idea, requirements and business goals.
            </p>
          </div>

          <div className="bg-black/50 p-6 rounded-2xl border border-red-500/20">
            <h3 className="text-red-300 font-bold mb-2">2. Development</h3>
            <p className="text-gray-300 text-sm">
              Building scalable backend and responsive frontend features.
            </p>
          </div>

          <div className="bg-black/50 p-6 rounded-2xl border border-red-500/20">
            <h3 className="text-red-300 font-bold mb-2">3. Testing</h3>
            <p className="text-gray-300 text-sm">
              Ensuring performance, security and smooth user experience.
            </p>
          </div>

          <div className="bg-black/50 p-6 rounded-2xl border border-red-500/20">
            <h3 className="text-red-300 font-bold mb-2">4. Launch</h3>
            <p className="text-gray-300 text-sm">
              Deployment, optimization and continuous improvements.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 px-6 bg-black/30 backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
          What I Can Build for You
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Custom Web Applications & MVPs",
              desc: "From idea to live product — full-stack React + Laravel apps, dashboards, SaaS tools, CRMs",
              img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Backend & API Systems",
              desc: "Secure, scalable REST APIs, database design, authentication, third-party integrations",
              img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Performance & Refactoring",
              desc: "Speed optimization, legacy Laravel/React code cleanup, mobile responsiveness, query tuning",
              img: "/tech.png"
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
              className="bg-black/50 backdrop-blur-xl rounded-3xl border border-red-600/20 hover:border-red-500/50 transition-all overflow-hidden shadow-2xl"
            >
              <img
                src={service.img}
                alt={`${service.title} preview`}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-red-300">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
          Professional Experience
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              role: "Full Stack Developer",
              company: "TEMPCON EXPRESS PVT. LTD, Mumbai",
              desc: "Built internal CRM using React + Laravel. Focused on APIs, performance & clean architecture.",
            },
            {
              role: "Software Developer",
              company: "TechExcel Software Solutions, Mumbai",
              desc: "Delivered multiple client projects — responsive UIs + Laravel backends + integrations.",
            },
            {
              role: "Software Developer",
              company: "Loke Infosolutions Pvt Ltd, Mumbai",
              desc: "Developed secure REST APIs, optimized MySQL databases, implemented auth & payments.",
            }
          ].map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-black/50 backdrop-blur-xl p-6 rounded-2xl border border-red-600/20 hover:border-red-500/50 transition-all shadow-xl"
            >
              <h3 className="text-xl font-bold text-red-300 mb-2">{exp.role}</h3>
              <p className="text-gray-400 text-sm mb-3">{exp.company}</p>
              <p className="text-gray-300 text-sm">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="flex justify-center gap-8 text-center mb-12">
        <div>
          <p className="text-3xl font-bold text-red-400">4+</p>
          <p className="text-gray-400 text-sm">Years Experience</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-red-400">20+</p>
          <p className="text-gray-400 text-sm">Projects Built</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-red-400">10+</p>
          <p className="text-gray-400 text-sm">Happy Clients</p>
        </div>
      </div>

      {/* WHY WORK WITH ME */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
          Why Work With Me
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-left">
          {[
            "✔ 4+ years freelance web development experience",
            "✔ Specialized in Laravel + React full-stack architecture",
            "✔ Built scalable SaaS tools, dashboards & internal systems",
            "✔ Experience working with startups & growing businesses",
            "✔ Clean, maintainable and scalable backend code",
            "✔ Fast communication & reliable delivery",
            "✔ Performance optimization & database tuning",
            "✔ Focus on real business results, not just code"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-black/50 p-6 rounded-2xl border border-red-500/20 hover:border-red-400/40 transition-all"
            >
              <p className="text-gray-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-6 text-center bg-black/30 backdrop-blur-sm">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
          Client Testimonials
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-6 rounded-2xl border border-red-500/20">
            <p className="text-gray-300 mb-4">
              “Trupti delivered our dashboard faster than expected and the code quality was excellent.”
            </p>
            <p className="text-red-300 font-semibold">— Startup Founder</p>
          </div>

          <div className="bg-black/50 p-6 rounded-2xl border border-red-500/20">
            <p className="text-gray-300 mb-4">
              “Our internal CRM became much faster and easier to manage after her improvements.”
            </p>
            <p className="text-red-300 font-semibold">— Operations Manager</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
          Let's Build Something Great
        </h2>

        <motion.form
          action="https://formspree.io/f/xlgwbvjk"
          method="POST"
          initial={{ opacity: 0, y: 60, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 1.05, rotateX: 8, rotateY: 8 }}
          className="max-w-xl mx-auto space-y-5 bg-black/50 backdrop-blur-xl p-8 rounded-3xl border border-red-600/20 relative overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
            alt="Cyberpunk contact background"
            className="absolute inset-0 object-cover opacity-10"
          />
          <div className="relative z-10 space-y-5">
            {[
              { type: "text", name: "name", placeholder: "Your Name" },
              { type: "email", name: "email", placeholder: "Your Email" },
            ].map((field, i) => (
              <div key={i} className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  required
                  className="w-full p-4 rounded-xl bg-black/60 border border-red-600/30 focus:border-red-400 focus:shadow-[0_0_15px_rgba(239,68,68,0.5)] outline-none transition-all peer text-white text-base"
                />
                <motion.label
                  initial={{ y: 14, opacity: 0.7 }}
                  className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all peer-focus:-translate-y-7 peer-focus:text-red-300 peer-not-placeholder-shown:-translate-y-7 text-base"
                >
                  {field.placeholder}
                </motion.label>
              </div>
            ))}

            <div className="relative">
              <textarea
                name="message"
                required
                className="w-full p-4 rounded-xl bg-black/60 border border-red-600/30 focus:border-red-400 focus:shadow-[0_0_15px_rgba(239,68,68,0.5)] outline-none transition-all h-32 peer text-white text-base resize-y"
              />
              <motion.label
                initial={{ y: 14, opacity: 0.7 }}
                className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all peer-focus:-translate-y-7 peer-focus:text-red-300 peer-not-placeholder-shown:-translate-y-7 text-base"
              >
                Tell me about your project...
              </motion.label>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5, boxShadow: "0 0 30px rgba(239,68,68,0.6)" }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-red-600 to-pink-600 px-10 py-4 rounded-full text-lg font-bold shadow-2xl w-full md:w-auto"
              type="submit"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>

        <div className="mt-8 text-gray-300 text-base space-y-3">
          <p className="font-medium">+91 95949 32292</p>
          <p>mishratrupti971@gmail.com</p>
          <p className="text-sm text-red-300 mt-2">
            Quick response • Fixed-price / milestone payments • NDA available
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mt-6 text-base">
            <a
              href="https://www.linkedin.com/in/truptimishra-366545243"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-300 hover:text-red-200 transition-colors"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://leetcode.com/u/truptimishra047/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-300 hover:text-red-200 transition-colors"
            >
              LeetCode Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Trupti Mishra • Built with passion & code
      </footer>
    </div>
  );
}