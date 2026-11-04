import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { FiArrowUp } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Handle scroll to show back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ]

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://linkedin.com/in/kiran-vijay-pawar', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/kiranvpawar', label: 'GitHub' },
    { icon: FiMail, url: 'mailto:kiranvpawar369@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <motion.div className="footer-section logo-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="footer-logo">
            <img src="/assets/Kiran_Image.jpeg" alt="Kiran" className="footer-logo-img" />
          </div>
          <p>Kiran Vijay Pawar</p>
          <span className="subtitle">Java Full Stack Developer</span>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="footer-section links-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.id}>
                <ScrollLink to={link.id} smooth={true} duration={500} className="footer-link">
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div className="footer-section social-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
          <h3>Connect</h3>
          <div className="footer-socials">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="footer-social-icon"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="copyright">
          Â© {currentYear} Kiran Vijay Pawar. All rights reserved. | Developed with â¤ï¸ using React & Vite
        </p>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.div
          className="back-to-top"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ScrollLink to="home" smooth={true} duration={500} className="back-to-top-btn">
            <FiArrowUp size={24} />
          </ScrollLink>
        </motion.div>
      )}
    </footer>
  )
}

export default Footer



