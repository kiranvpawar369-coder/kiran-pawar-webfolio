import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { FiDownload, FiMail, FiArrowDown } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdPhone } from 'react-icons/md'
import './Hero.css'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [scrollY, setScrollY] = useState(0)
  const fullText = 'Java Full Stack Developer'
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 60)
      return () => clearTimeout(timer)
    }
  }, [index, fullText])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section className="hero" id="home">
      {/* Parallax Background Elements */}
      <div className="hero-bg">
        <div className="gradient-blob" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
        <div className="gradient-blob-2" style={{ transform: `translateY(${scrollY * 0.3}px)` }}></div>
        <div className="grid-bg"></div>
      </div>

      <div className="hero-container">
        <motion.div className="hero-content" variants={containerVariants} initial="initial" animate="animate">
          <motion.div variants={itemVariants}>
            <p className="hero-greeting">Welcome to my portfolio</p>
          </motion.div>

          <motion.h1 className="hero-name" variants={itemVariants}>
            Kiran Vijay Pawar
          </motion.h1>

          <motion.div className="hero-role" variants={itemVariants}>
            <span className="typing-text">{displayText}</span>
            <span className="cursor">_</span>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            Computer Engineering Student | Building Scalable Web Applications with Java & React
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="/resume.pdf" download="Kiran_Resume.pdf" className="btn btn-primary">
              <FiDownload size={20} /> Download Resume
            </a>
            <ScrollLink to="contact" smooth={true} duration={500} className="btn btn-secondary">
              <FiMail size={20} /> Contact Me
            </ScrollLink>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            <a href="https://linkedin.com/in/kiran-vijay-pawar" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/kiranvpawar" target="_blank" rel="noopener noreferrer" className="social-icon github">
              <FaGithub size={24} />
            </a>
            <a href="mailto:kiranvpawar369@gmail.com" className="social-icon email">
              <FiMail size={24} />
            </a>
            <a href="tel:+918550904989" className="social-icon phone">
              <MdPhone size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          variants={itemVariants}
          animate={{ y: [0, -20, 0], transition: { duration: 4, repeat: Infinity } }}
        >
          <div className="image-wrapper" style={{ transform: `perspective(1000px) rotateY(${scrollY * 0.02}deg)` }}>
            <img src="/assets/Kiran_Image.jpeg" alt="Kiran Vijay Pawar" className="profile-image" />
            <div className="image-glow"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p>Scroll to explore</p>
        <FiArrowDown size={20} />
      </motion.div>
    </section>
  )
}

export default Hero



