import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  ChevronDown,
  Menu,
  X,
  Download
} from 'lucide-react';
import profilePic from '../assets/profile.jpg';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/Dilan\'s CV.pdf?v=3';            // ✅ URL path
  link.download = 'Dilan\'s CV.pdf';  // ✅ just a file name, no slash
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  const projects = [
    {
      title: 'Hasthi Safari Cottage',
      subtitle: 'Full-stack Hotel Management System',
      description:
        'Complete hotel management solution for Hasthi Safari Cottage in Ambilipitiya with booking, room management, and customer tracking features.',
      tech: ['React', 'Vite', 'TailwindCSS', 'JavaScript'],
      github: 'https://github.com/dilanax/HasthiCottage-MERN.git',
      demo: 'https://hasthi-safari-cottage-client.azurewebsites.net/', // 🔁 replace with your real hosted URL
      year: '2025'
    },
    {
      title: 'Online E-Shopping Store',
      subtitle: ' E-commerce Platform',
      description:
        'Feature-rich e-commerce platform with CRUD operations, product management, and shopping cart functionality.',
      tech: ['JavaScript', 'HTML', 'CSS', 'PHP'],
      github: 'https://github.com/dilanax/e-shopping-Store.git',
      demo: '', // 🔁 replace with your real hosted URL
      year: '2025'
    },
    {
      title: 'Daily Reminder & To-Do',
      subtitle: 'Productivity Web Application',
      description:
        'Lightweight task management application with add, edit, delete, and complete features for daily productivity.',
      tech: ['JavaScript', 'HTML', 'CSS', 'PHP'],
      github: 'https://github.com/dilanax/Daily_Remainder_Application.git',
      demo: '', // 🔁 replace with your real hosted URL
      year: '2024'
    },
    {
      title: 'Find Sport App',
      subtitle: 'Sports Activity Tracker',
      description:
        'Mobile application for tracking sports activities, managing schedules, and connecting with sports enthusiasts.',
      tech: ['Kotlin', 'XML', 'Android Studio'],
      github: 'https://github.com/dilanax/My-Application-FindSport.git',
      demo: '', // add Play Store / APK link later if you have
      year: '2025'
    },
    {
      title: 'HealthCare App',
      subtitle: 'Personal Health Tracker',
      description:
        'Mobile health tracking application for monitoring wellness metrics and maintaining healthy habits.',
      tech: ['Kotlin', 'XML', 'Android Studio'],
      github: 'https://github.com/dilanax/Health_Care.git',
      demo: '', // add Play Store / APK link later if you have
      year: '2025'
    }
  ];

  const skills = [
    { name: 'JavaScript', level: 85, category: 'language' },
    { name: 'React.js', level: 85, category: 'framework' },
    { name: 'Git/GitHub', level: 95, category: 'tool' },
    { name: 'PHP', level: 85, category: 'language' },
    { name: 'Express.js', level: 85, category: 'framework' },
    { name: 'VS Code', level: 95, category: 'tool' },
    { name: 'Kotlin', level: 80, category: 'language' },
    { name: 'Node.js', level: 85, category: 'framework' },
    { name: 'Android Studio', level: 85, category: 'tool' },
    { name: 'Java', level: 80, category: 'language' },
    { name: 'Tailwind CSS', level: 85, category: 'framework' },
    { name: 'Figma', level: 95, category: 'tool' },
    { name: 'SQL', level: 85, category: 'language' },
    { name: 'MySQL', level: 85, category: 'framework' },
    { name: 'HTML', level: 95, category: 'language' },
    { name: 'MongoDB', level: 90, category: 'framework' },
    { name: 'CSS', level: 95, category: 'language' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-slate-900">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Dilan Avishka
              </span>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize hover:text-blue-600 transition-colors font-medium ${
                      activeSection === item
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-slate-700'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={downloadCV}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium"
                >
                  <Download size={16} />
                  CV
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-200 text-slate-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-slate-100 rounded-md text-slate-700 font-medium"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={downloadCV}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium"
              >
                <Download size={16} />
                Download CV
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-cyan-100/40"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6">
              <img
                src={profilePic}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-slate-900">Dilan Avishka</h1>
          <p className="text-2xl md:text-3xl text-slate-700 mb-4 font-semibold">
            Full-Stack Developer
          </p>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            3rd Year Software Engineering Student at SLIIT | Passionate about building innovative web
            and mobile applications
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={downloadCV}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all hover:scale-105 shadow-lg font-medium"
            >
              <Download size={20} />
              Download CV
            </button>
            <a
              href="https://github.com/dilanax"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg transition-all hover:scale-105 shadow-lg font-medium"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/dilan-avishka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#0077B5] hover:bg-[#006399] text-white rounded-lg transition-all hover:scale-105 shadow-lg font-medium"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dilanavishka070@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all hover:scale-105 shadow-lg font-medium"
            >
              <Mail size={20} />
              Email Me
            </a>
          </div>
          <button onClick={() => scrollToSection('about')} className="animate-bounce mt-8">
            <ChevronDown size={32} className="text-blue-600" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4 py-2">
                  <h4 className="text-xl font-semibold text-blue-700">SLIIT</h4>
                  <p className="text-slate-700 font-medium">
                    BSc (Hons) in Information Technology
                  </p>
                  <p className="text-slate-600">Specializing in Software Engineering</p>
                  <p className="text-sm text-slate-500 mt-1">Jul 2023 - Present</p>
                </div>
                <div className="border-l-4 border-cyan-600 pl-4 py-2">
                  <h4 className="text-xl font-semibold text-cyan-700">VTA Sri Lanka</h4>
                  <p className="text-slate-700 font-medium">NVQ Level 4</p>
                  <p className="text-slate-600">Computer Hardware Technician</p>
                  <p className="text-sm text-slate-500 mt-1">Completed: 2021</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-cyan-600 rounded-lg">
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Profile</h3>
              </div>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Highly motivated third-year undergraduate with expertise in full-stack web
                  development and mobile app development. Strong command of multiple programming
                  languages with excellent problem-solving abilities.
                </p>
                <p>
                  Passionate about learning new technologies and building innovative solutions.
                  Currently seeking internship opportunities to gain practical industry experience.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Full-Stack Development
                  </span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                    Mobile Development
                  </span>
                  <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">
                    Problem Solving
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all md:col-span-2 border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-600 rounded-lg">
                  <Briefcase className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Seeking Internship</h3>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed">
                Currently looking for internship opportunities in software development to apply my
                skills in real-world projects and contribute to innovative teams. Open to full-stack,
                frontend, backend, or mobile development positions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-2 border border-slate-200 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium">{project.subtitle}</p>
                  </div>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons: GitHub + Live Demo */}
                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition"
                  >
                    <Github size={18} />
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['language', 'framework', 'tool'].map((category) => (
              <div
                key={category}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="text-xl font-bold mb-6 capitalize text-slate-900">
                  {category === 'language'
                    ? 'Languages'
                    : category === 'framework'
                    ? 'Frameworks & Libraries'
                    : 'Tools & Platforms'}
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-700 font-medium">{skill.name}</span>
                          <span className="text-blue-600 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-4 bg-slate-50 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">
            Get In Touch
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200">
            <p className="text-center text-xl text-slate-700 mb-8 font-medium">
              I'm currently seeking internship opportunities. Let's connect!
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dilanavishka070@gmail.com"
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all hover:scale-105 border border-blue-100"
              >
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <p className="font-semibold text-slate-900">dilanavishka070@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+94705390664"
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl hover:shadow-lg transition-all hover:scale-105 border border-cyan-100"
              >
                <div className="p-3 bg-cyan-600 rounded-lg">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Phone</p>
                  <p className="font-semibold text-slate-900">+94 70 539 0664</p>
                </div>
              </a>
              <a
                href="https://github.com/dilanax"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-lg transition-all hover:scale-105 border border-slate-200"
              >
                <div className="p-3 bg-slate-800 rounded-lg">
                  <Github size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">GitHub</p>
                  <p className="font-semibold text-slate-900">@dilanax</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/dilan-avishka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all hover:scale-105 border border-blue-200"
              >
                <div className="p-3 bg-[#0077B5] rounded-lg">
                  <Linkedin size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">LinkedIn</p>
                  <p className="font-semibold text-slate-900">Dilan Avishka</p>
                </div>
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 justify-center text-slate-600">
              <MapPin size={20} />
              <span className="font-medium">Ambalantota, Sri Lanka</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="mb-2">© 2025 Dilan Avishka. All rights reserved.</p>
          <p className="text-sm">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
