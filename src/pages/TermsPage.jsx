import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Footer from '../utils/Footer'
import GotoTopBtn from '../utils/GotoTopBtn'

export default function TermsPage() {
  const [expandedSection, setExpandedSection] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);


  const terms = [
    {
      title: "1. Acceptance of Terms",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla."
    },
    {
      title: "2. User Registration",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla."
    },
    {
      title: "3. Property Listings",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.."
    },
    {
      title: "4. Privacy Policy",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla."
    },
    {
      title: "5. Intellectual Property",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla."
    },
    {
      title: "6. Limitation of Liability",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background  to-secondary">

      <main className="container mx-auto px-4 py-16 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-primary-light mb-6 my-10 font-heading">Terms and Conditions</h1>
          <p className="text-primary-light max-w-2xl mx-auto font-description">
            Please read these terms and conditions carefully before using our services.
            Last updated: {new Date().toLocaleDateString()} <br /> <span className='text-red-400 font-bold'>
              ( Note : this is current date, if you want to change any static date then you can do it in TermsPage.jsx file)
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {terms.map((term, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-secondary bg-opacity-50 rounded-lg overflow-hidden"
              style={{ willChange: 'opacity, transform' }} // Hint for optimization
            >
              <button
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-button"
              >
                <h2 className="text-xl font-semibold text-primary-light font-heading">{term.title}</h2>
                <ChevronDown
                  className={`w-5 h-5 text-primary-light transition-transform ${expandedSection === index ? 'rotate-90' : ''}`}
                />
              </button>

              {expandedSection === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-4"
                >
                  <p className="text-primary-light font-description font-light">{term.content}</p>
                </motion.div>
              )}
            </motion.div>
          ))}

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-primary-light mb-6 font-description">
            If you have any questions about these Terms and Conditions, please contact us.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md border border-primary hover:border-secondary transition-colors font-button"
          >
            Contact Us
          </Link>
        </motion.div>
      </main>

      <Footer />
      <GotoTopBtn />
    </div>
  )
}

