import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function App() {
  const [pageLoading, setPageLoading] = useState(true);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [aboutLoaded, setAboutLoaded] = useState(false);
  const [skillsLoaded, setSkillsLoaded] = useState(false);
  const [servicesLoaded, setServicesLoaded] = useState(false);
  const [freelanceLoaded, setFreelanceLoaded] = useState(false);
  const [experienceLoaded, setExperienceLoaded] = useState(false);
  const [contactLoaded, setContactLoaded] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPageLoading(false), 1200),
      setTimeout(() => setHeroLoaded(true), 700),
      setTimeout(() => setAboutLoaded(true), 1000),
      setTimeout(() => setSkillsLoaded(true), 1300),
      setTimeout(() => setServicesLoaded(true), 1600),
      setTimeout(() => setFreelanceLoaded(true), 1900),
      setTimeout(() => setExperienceLoaded(true), 2200),
      setTimeout(() => setContactLoaded(true), 2500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  if (pageLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-black via-red-950 to-black flex flex-col items-center justify-center z-[9999]">
        <img
          src="/cutegirl.png"
          alt="Loading"
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
        alt="Loading"
        className="w-16 h-auto rounded-full mb-3 shadow-lg border-2 border-red-500/40 animate-pulse"
      />
      <p className="text-sm font-medium text-red-300">Loading...</p>
    </div>
  );

  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden">

      {/* Red & Black cyberpunk background */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black" />

        {/* Neon red glow orbs */}
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

        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.9'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-xl border border-red-600/30 rounded-full px-6 md:px-8 py-3 flex gap-4 md:gap-6 text-sm md:text-base font-medium z-50 shadow-lg">
        {["Home", "About", "Skills", "Services", "Freelance", "Experience", "Contact"].map((item) => (
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

      {/* HERO - profile photo fully visible (no cropping) */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-12 relative">
        {heroLoaded ? (
          <>
            <div className="absolute inset-0 opacity-25 pointer-events-none">
              <img
                src="/tech.png"
                alt="Tech background"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              className="relative mb-10 z-10"
              whileHover={{ scale: 1.1, rotateX: 12, rotateY: 12 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Adjusted profile photo - full image visible */}
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-red-500/70 shadow-2xl mx-auto bg-black/30">
                <motion.img
                  initial={{ y: 100, opacity: 0, scale: 0.8, rotateX: -30 }}
                  animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
                  transition={{ duration: 1.4, ease: "backOut" }}
                  src="/truptipic.jpeg"
                  alt="Trupti Mishra"
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
              className="text-5xl md:text-7xl font-extrabold mb-3 bg-gradient-to-r from-red-300 via-pink-300 to-red-400 text-transparent bg-clip-text z-10"
              initial={{ opacity: 0, y: 50, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              Trupti Mishra
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-4 z-10"
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              Full-Stack Developer
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed z-10"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.7 }}
            >
              Building clean, fast, scalable web solutions that deliver real value
            </motion.p>
          </>
        ) : (
          <SmallLoading />
        )}
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-6 max-w-5xl mx-auto text-center">
        {aboutLoaded ? (
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
                alt="Neon holographic workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
                About Me
              </h2>

              <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
                I seek to work in a growth-driven environment where I can contribute to scalable applications while enhancing my skills.  
                Strong hands-on experience in backend development, ORM-based databases, and full-stack design — building robust, user-friendly solutions.
              </p>

              <p className="mt-4 text-base md:text-lg text-gray-300">
                Core stack: Laravel (PHP), React.js, MySQL (Eloquent ORM), RESTful APIs, basic DevOps & cloud concepts.
              </p>
            </div>
          </motion.div>
        ) : (
          <SmallLoading />
        )}
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 px-6 bg-black/30 backdrop-blur-sm">
        {skillsLoaded ? (
          <>
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
              Skills
            </h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Frontend",
                  items: ["React.js", "Responsive UI", "Tailwind CSS"],
                  img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                },
                {
                  title: "Backend & Data",
                  items: ["Laravel (PHP)", "Eloquent ORM", "RESTful APIs", "MySQL"],
                  img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                },
                {
                  title: "Tools & Practices",
                  items: ["Git", "Docker basics", "Jira / Agile", "Postman"],
                  img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                }
              ].map((group, i) => (
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
                    src={group.img}
                    alt={group.title}
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
          </>
        ) : (
          <SmallLoading />
        )}
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 px-6">
        {servicesLoaded ? (
          <>
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
              Services
            </h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Full-Stack Development",
                  desc: "Complete modern web apps — React frontend + Laravel backend, clean code, fast & scalable",
                  img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                },
                {
                  title: "Backend & API Development",
                  desc: "Secure RESTful APIs, optimized databases, reliable backend for any scale",
                  img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                },
                {
                  title: "Performance & Optimization",
                  desc: "Speed tuning, query optimization, refactoring — faster & more efficient apps",
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
                    alt={service.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-red-300">{service.title}</h3>
                    <p className="text-gray-300 text-sm">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <SmallLoading />
        )}
      </section>

      {/* FREELANCE */}
      <section id="freelance" className="py-16 px-6 bg-black/30 backdrop-blur-sm">
        {freelanceLoaded ? (
          <>
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
              Freelance Projects
            </h2>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                whileHover={{ scale: 1.05, rotateX: 8, rotateY: 8 }}
                className="bg-black/50 backdrop-blur-xl rounded-3xl border border-red-600/20 hover:border-red-500/50 transition-all overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                  alt="Neon creative dev setup"
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-red-300">What I offer</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Custom web apps & dashboards</li>
                    <li>• Admin panels & internal tools</li>
                    <li>• Business websites</li>
                    <li>• APIs & backend systems</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
                whileHover={{ scale: 1.05, rotateX: 8, rotateY: 8 }}
                className="bg-black/50 backdrop-blur-xl rounded-3xl border border-red-600/20 hover:border-red-500/50 transition-all overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Cyberpunk team collab neon"
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-red-300">How we collaborate</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Fixed price or milestones</li>
                    <li>• Clear scope & updates</li>
                    <li>• Fast MVP delivery</li>
                    <li>• Regular communication</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </>
        ) : (
          <SmallLoading />
        )}
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-16 px-6 max-w-7xl mx-auto">
        {experienceLoaded ? (
          <>
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
              Experience
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                whileHover={{ scale: 1.05, rotateX: 8, rotateY: 8 }}
                className="bg-black/50 backdrop-blur-xl p-6 rounded-3xl border border-red-600/20 hover:border-red-500/50 transition-all shadow-2xl relative overflow-hidden h-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                  alt="Neon workspace"
                  className="absolute inset-0 object-cover opacity-10"
                />
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-red-300 mb-2">
                    Full Stack Developer
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    TEMPCON EXPRESS PVT. LTD, Mumbai
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    Worked as a Full Stack Developer on the organization's in-house CRM system "Tempex", handling the complete software development lifecycle from requirement analysis to deployment.
                  </p>
                  <ul className="space-y-2 text-gray-200 text-sm list-disc pl-4">
                    <li>Designed and implemented responsive React frontend architecture with modular components and reusable libraries for better scalability</li>
                    <li>Built and maintained backend logic using Laravel with Eloquent ORM, ensuring efficient database query management and clean relationships</li>
                    <li>Implemented secure RESTful APIs to connect backend services with React-based frontend, ensuring fast, secure, and scalable communication</li>
                    <li>Collaborated with business stakeholders using Jira in Agile workflow to analyze requirements and translate them into technical solutions</li>
                    <li>Optimized database queries and API performance, resulting in a more responsive CRM system capable of handling increased load</li>
                    <li>Contributed to team discussions, code reviews, and knowledge sharing, improving project quality and delivery timelines</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
                whileHover={{ scale: 1.05, rotateX: 8, rotateY: 8 }}
                className="bg-black/50 backdrop-blur-xl p-6 rounded-3xl border border-red-600/20 hover:border-red-500/50 transition-all shadow-2xl relative overflow-hidden h-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                  alt="Holographic terminal glow"
                  className="absolute inset-0 object-cover opacity-10"
                />
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-red-300 mb-2">
                    Software Developer
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    TechExcel Software Solutions Pvt Ltd, Mumbai
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    Developed and maintained web applications with focus on frontend architecture, backend integration, and performance optimization for multiple client projects.
                  </p>
                  <ul className="space-y-2 text-gray-200 text-sm list-disc pl-4">
                    <li>Developed responsive and interactive user interfaces using React.js and Tailwind CSS for enhanced user experience across devices</li>
                    <li>Designed and implemented backend services using PHP/Laravel with clean MVC architecture and Eloquent ORM for efficient data handling</li>
                    <li>Created and maintained secure RESTful APIs for seamless frontend-backend communication and third-party integrations</li>
                    <li>Optimized MySQL databases through schema design, indexing, query tuning, and performance troubleshooting for high-volume applications</li>
                    <li>Collaborated in Agile environment using Jira for sprint planning, task tracking, daily stand-ups, and cross-team coordination</li>
                    <li>Performed code reviews, debugging, unit testing, and performance improvements to maintain high code quality and reduce bugs</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                whileHover={{ scale: 1.05, rotateX: 8, rotateY: 8 }}
                className="bg-black/50 backdrop-blur-xl p-6 rounded-3xl border border-red-600/20 hover:border-red-500/50 transition-all shadow-2xl relative overflow-hidden h-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                  alt="Cyberpunk dev setup neon"
                  className="absolute inset-0 object-cover opacity-10"
                />
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-red-300 mb-2">
                    Software Developer
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Loke Infosolutions Private Limited, Mumbai
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    Focused on backend systems, API development, database optimization, and secure application architecture for business-critical solutions.
                  </p>
                  <ul className="space-y-2 text-gray-200 text-sm list-disc pl-4">
                    <li>Designed and developed high-performance RESTful APIs using Laravel framework with advanced security and rate limiting features</li>
                    <li>Managed and optimized MySQL databases including complex schema design, indexing, query optimization, and performance tuning</li>
                    <li>Implemented secure authentication & authorization systems using Laravel Passport/Sanctum for robust user management</li>
                    <li>Integrated third-party services, payment gateways, and external APIs, ensuring reliable data flow and transaction security</li>
                    <li>Worked in Agile methodology using Jira for task management, sprint planning, retrospectives, and team collaboration</li>
                    <li>Conducted thorough code reviews, debugging, unit/integration testing, and performance improvements to deliver stable production-ready code</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </>
        ) : (
          <SmallLoading />
        )}
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 text-center">
        {contactLoaded ? (
          <>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-red-300 to-pink-300 text-transparent bg-clip-text">
              Contact
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
                alt="Cyberpunk contact neon"
                className="absolute inset-0 object-cover opacity-10"
              />
              <div className="relative z-10">
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
                    className="w-full p-4 rounded-xl bg-black/60 border border-red-600/30 focus:border-red-400 focus:shadow-[0_0_15px_rgba(239,68,68,0.5)] outline-none transition-all h-32 peer text-white text-base"
                  />
                  <motion.label
                    initial={{ y: 14, opacity: 0.7 }}
                    className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all peer-focus:-translate-y-7 peer-focus:text-red-300 peer-not-placeholder-shown:-translate-y-7 text-base"
                  >
                    Message
                  </motion.label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5, boxShadow: "0 0 30px rgba(239,68,68,0.6)" }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-red-600 to-pink-600 px-10 py-4 rounded-full text-lg font-bold shadow-2xl w-full md:w-auto"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>

            <div className="mt-8 text-gray-300 text-base space-y-3">
              <p className="font-medium">+91 95949 32292</p>
              <p>mishratrupti971@gmail.com</p>

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
          </>
        ) : (
          <SmallLoading />
        )}
      </section>

    </div>
  );
}