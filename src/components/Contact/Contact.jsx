import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const initEmailJS = () => {
    emailjs.init('YOUR_EMAIL_JS_PUBLIC_KEY')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      initEmailJS()

      const response = await emailjs.send(
        'service_YOUR_SERVICE_ID',
        'template_YOUR_TEMPLATE_ID',
        {
          to_email: 'kiranvpawar369@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_EMAIL_JS_PUBLIC_KEY'
      )

      if (response.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      console.error('Email error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    viewport: { once: true },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    viewport: { once: true },
  }

  const contactInfo = [
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 8550904989',
      link: 'tel:+918550904989',
      openInNewTab: false,
    },
    {
      icon: FiMail,
      label: 'Email',
      value: 'kiranvpawar369@gmail.com',
      link: 'mailto:kiranvpawar369@gmail.com',
      openInNewTab: false,
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Shirpur, Maharashtra, India',
      link: '#',
      openInNewTab: false,
    },
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/kiran-vijay-pawar',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      url: 'https://github.com/kiranvpawar',
      label: 'GitHub',
    },
  ]

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.h2 className="section-title" variants={itemVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          Get In Touch
        </motion.h2>

        <motion.div className="contact-content" variants={containerVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          <motion.div className="contact-info-section" variants={itemVariants}>
            <h3>Contact Information</h3>

            <div className="contact-info-list">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon
                return (
                  <a
                    key={idx}
                    href={item.link}
                    className="info-item"
                    target={item.openInNewTab ? '_blank' : undefined}
                    rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
                  >
                    <div className="info-icon">
                      <Icon size={24} />
                    </div>
                    <div className="info-text">
                      <p className="info-label">{item.label}</p>
                      <p className="info-value">{item.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={24} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.form className="contact-form" onSubmit={handleSubmit} variants={itemVariants}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                aria-label="Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                aria-label="Email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Message Subject"
                aria-label="Subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                aria-label="Message"
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <motion.div className="status-message success" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div className="status-message error" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                ✕ Error sending message. Please try again or contact directly.
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
