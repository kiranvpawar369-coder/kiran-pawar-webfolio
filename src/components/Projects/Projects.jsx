import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import './Projects.css'

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'UXSense AI',
      description: 'UXSense AI is an intelligent web analysis and UX generation platform that helps evaluate website experience and generate smart design recommendations using AI-driven analysis workflows.',
      features: ['AI-based UX Insights', 'Website Analysis', 'Smart Design Recommendations', 'User Experience Dashboard', 'Automation Workflow'],
      tech: ['React', 'JavaScript', 'AI', 'Node.js', 'MongoDB'],
      image: '/assets/uxsense-ai.svg',
      github: 'https://github.com/kiranvpawar369-coder/UXSenseAI-Intelligent-web-analysis-and-ux-generation-platform',
      demo: 'https://github.com/kiranvpawar369-coder/UXSenseAI-Intelligent-web-analysis-and-ux-generation-platform',
    },
    {
      id: 2,
      title: 'DigiCraft Artisan Marketplace',
      description: 'A web-based marketplace connecting rural artisans with buyers, with dedicated Admin, Artisan, and Buyer modules. Deployed with Docker and Apache Tomcat on Render, with TiDB Cloud integration.',
      features: ['Admin, Artisan & Buyer Modules', 'Authentication', 'Product & Inventory Management', 'Order Processing', 'Admin Activity Tracking'],
      tech: ['Java', 'JSP', 'Servlets', 'JDBC', 'TiDB Cloud', 'HTML', 'CSS'],
      image: '/assets/digicraft-marketplace.svg',
      github: 'https://github.com/kiranvpawar369-coder/digicraft-artisan-marketplace',
      demo: 'https://digicraft-artisan-marketplace.onrender.com/index.html',
    },
    {
      id: 3,
      title: 'Retail Sales & Business Performance Analytics',
      description: 'An interactive analytics application for exploring retail sales, business performance, and product trends through visualizations and business insights.',
      features: ['Retail Sales Analysis', 'Business Performance Insights', 'Product Trend Analysis', 'Interactive Plotly Visualizations'],
      tech: ['Python', 'Pandas', 'Streamlit', 'Plotly'],
      image: '/assets/retail-analytics.svg',
      demo: 'https://retail-analytics-pro.streamlit.app/',
    },
  ]

  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
    viewport: { once: true },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    viewport: { once: true },
  }

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.h2 className="section-title" variants={itemVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }}>My Projects</motion.h2>

        <motion.div className="projects-grid" variants={containerVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          {projectsData.map((project) => (
            <motion.div key={project.id} className="project-card" variants={itemVariants} whileHover={{ y: -10 }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay">
                  <div className="overlay-buttons">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-btn github-btn">
                        <FaGithub size={20} />
                        GitHub
                      </a>
                    )}
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="overlay-btn demo-btn">
                      <FiExternalLink size={20} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn github">
                      <FaGithub size={18} />
                      GitHub
                    </a>
                  )}
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn demo">
                    <FiExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

