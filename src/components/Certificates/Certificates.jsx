import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import './Certificates.css'

const Certificates = () => {
  const certificatesData = [
    {
      id: 1,
      title: 'Full Stack Java with Angular',
      issuer: 'Symbiosis Skills & Professional University',
      date: '15/06/2026',
      description: 'Completed a certificate program focused on full stack Java development with Angular, covering modern web application building and enterprise software workflows.',
      skills: ['Java', 'Angular', 'Full Stack', 'Web Development'],
      image: '/assets/java-angular-certificate.svg',
    },
    {
      id: 2,
      title: 'Core Java, Advance Java & Spring Framework',
      issuer: 'R3 Systems India Pvt. Ltd.',
      date: '28.07.2025',
      description: 'Completed industrial training and internship covering Core Java, Advance Java, and Spring Framework with hands-on exposure to real-world application development.',
      skills: ['Core Java', 'Advanced Java', 'Spring', 'Internship'],
      image: '/assets/core-java-spring-certificate.svg',
    },
  ]

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

  return (
    <section className="certificates" id="certificates">
      <div className="certificates-container">
        <motion.h2 className="section-title" variants={itemVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          Certifications & Training
        </motion.h2>

        <motion.div className="certificates-grid" variants={containerVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          {certificatesData.map((cert) => (
            <motion.div key={cert.id} className="certificate-card" variants={itemVariants} whileHover={{ y: -10 }}>
              <div className="cert-image-wrap">
                <img src={cert.image} alt={cert.title} className="cert-image" />
              </div>

              <div className="cert-content">
                <div className="cert-header-row">
                  <div className="cert-icon">
                    <FiAward size={40} />
                  </div>
                  <div className="cert-meta">
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-description">{cert.description}</p>

                <div className="cert-skills">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cert-decoration"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates



