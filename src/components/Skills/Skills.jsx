import { motion } from 'framer-motion'
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaCode } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import { GiToolbox } from 'react-icons/gi'
import './Skills.css'

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend',
      icon: FaReact,
      skills: [
        { name: 'HTML', level: 90, icon: FaHtml5 },
        { name: 'CSS', level: 85, icon: FaCss3Alt },
        { name: 'JavaScript', level: 80, icon: FaJs },
        { name: 'React', level: 85, icon: FaReact },
      ],
    },
    {
      category: 'Backend',
      icon: FaJava,
      skills: [
        { name: 'Java', level: 85, icon: FaJava },
        { name: 'JSP', level: 75, icon: FaJava },
        { name: 'Servlets', level: 75, icon: FaJava },
        { name: 'Python', level: 70, icon: FaPython },
      ],
    },
    {
      category: 'Database',
      icon: SiMysql,
      skills: [
        { name: 'MySQL', level: 80, icon: SiMysql },
      ],
    },
    {
      category: 'Tools',
      icon: GiToolbox,
      skills: [
        { name: 'Git', level: 80, icon: FaGitAlt },
        { name: 'GitHub', level: 85, icon: FaGithub },
        { name: 'VS Code', level: 90, icon: FaCode },
        { name: 'Eclipse', level: 80, icon: FaCode },
      ],
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
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.h2 className="section-title" variants={itemVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }}>Skills & Expertise</motion.h2>

        <motion.div className="skills-grid" variants={containerVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          {skillsData.map((skillCategory, idx) => (
            <motion.div key={idx} className="skill-category" variants={itemVariants}>
              <div className="window-titlebar">
                <div className="window-controls">
                  <span className="win-close"></span>
                  <span className="win-min"></span>
                  <span className="win-max"></span>
                </div>
                <div style={{ flex: 1 }} />
              </div>
              <div className="category-header">
                <div className="category-icon"><skillCategory.icon size={32} /></div>
                <h3>{skillCategory.category}</h3>
              </div>

              <div className="skills-list">
                {skillCategory.skills.map((skill, skillIdx) => (
                  <motion.div key={skillIdx} className="skill-item" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <div className="skill-header">
                      <div className="skill-icon"><skill.icon size={20} /></div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div className="progress-fill" initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: skillIdx * 0.1 }} viewport={{ once: true }}></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills



