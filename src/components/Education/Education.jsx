import { motion } from 'framer-motion'
import { FiBook, FiAward } from 'react-icons/fi'
import './Education.css'

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'B.Tech',
      institution: 'R C Patel Institute of Technology',
      duration: '2023 - 2027',
      details: [
        { label: 'Specialization', value: 'Computer Engineering' },
        { label: 'CGPA', value: '6.49 / 10' },
      ],
      icon: FiBook,
    },
    {
      id: 2,
      degree: 'HSC (12th)',
      institution: 'Secondary Education',
      duration: 'Completed',
      details: [
        { label: 'Percentage', value: '86.17%' },
      ],
      icon: FiAward,
    },
    {
      id: 3,
      degree: 'SSC (10th)',
      institution: 'Primary Education',
      duration: 'Completed',
      details: [
        { label: 'Percentage', value: '94.60%' },
      ],
      icon: FiAward,
    },
  ]

  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
    viewport: { once: true },
  }

  const itemVariants = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    viewport: { once: true },
  }

  return (
    <section className="education" id="education">
      <div className="education-container">
        <motion.h2 className="section-title" variants={itemVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }}>Education</motion.h2>

        <motion.div className="education-timeline" variants={containerVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          {educationData.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div key={item.id} className="timeline-item" variants={itemVariants}>
                <div className="timeline-marker">
                  <div className="marker-circle">
                    <Icon size={20} />
                  </div>
                  {idx !== educationData.length - 1 && <div className="timeline-line"></div>}
                </div>

                <motion.div className="timeline-content" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <div className="content-header">
                    <h3 className="degree">{item.degree}</h3>
                    <span className="duration">{item.duration}</span>
                  </div>

                  <p className="institution">{item.institution}</p>

                  <div className="education-details">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="detail-item">
                        <span className="detail-label">{detail.label}:</span>
                        <span className="detail-value">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Education



