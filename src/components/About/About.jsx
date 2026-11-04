import { motion } from 'framer-motion'
import { FiAward, FiBook } from 'react-icons/fi'
import './About.css'

const About = () => {
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
    <section className="about" id="about">
      <div className="about-container">
        <motion.h2 className="section-title" variants={itemVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }}>About Me</motion.h2>

        <motion.div className="about-content" variants={containerVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          <motion.div className="about-text" variants={itemVariants}>
            <p>I am a dedicated and passionate B.Tech Computer Engineering student from R C Patel Institute of Technology, graduating in 2027. With a strong foundation in software development, I specialize in Java Full Stack Development and modern web technologies.</p>
            <p>My expertise spans across frontend development using React, HTML, CSS, and JavaScript, combined with robust backend solutions using Java, JSP, Servlets, and MySQL. I am committed to building scalable, efficient, and user-centric applications.</p>
          </motion.div>

          <motion.div className="about-cards" variants={containerVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <motion.div className="info-card" variants={itemVariants}>
              <div className="card-icon"><FiAward size={40} /></div>
              <h3>Experience</h3>
              <p className="label">Fresher</p>
              <p className="value">Ready to contribute and grow</p>
            </motion.div>

            <motion.div className="info-card" variants={itemVariants}>
              <div className="card-icon"><FiBook size={40} /></div>
              <h3>College</h3>
              <p className="label">R C Patel Institute of Technology</p>
              <p className="value">B.Tech Computer Engineering</p>
            </motion.div>

            <motion.div className="info-card" variants={itemVariants}>
              <div className="card-icon"><FiBook size={40} /></div>
              <h3>Graduation</h3>
              <p className="label">Expected</p>
              <p className="value">2027</p>
            </motion.div>

            <motion.div className="info-card" variants={itemVariants}>
              <div className="card-icon"><FiAward size={40} /></div>
              <h3>CGPA</h3>
              <p className="label">Current</p>
              <p className="value">6.49 / 10</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About



