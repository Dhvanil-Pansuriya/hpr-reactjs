import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Footer from '../utils/Footer';
import { useEffect, useState } from 'react';
import SiteMap from './SiteMap';
import GotoTopBtn from '../utils/GotoTopBtn';
import emailjs from 'emailjs-com';

export default function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const LIMITS = {
        name: 100,
        email: 250,
        message: 2000
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);



    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (value.length <= LIMITS[id]) {
            setFormData(prev => ({ ...prev, [id]: value }));
        }
    };

    const getCharacterCountClass = (current, limit) => {
        if (current === limit) return 'text-red-500';
        if (current >= limit * 0.9) return 'text-yellow-500';
        return 'text-primary';
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID,
                {
                    user_name: formData.name,
                    user_email: formData.email,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error('EmailJS Error:', err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
            <main className="container mx-auto py-16 sm:px-16 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-primary-light mb-6 mt-10 font-heading">Get in Touch</h1>
                    <p className="text-primary-light max-w-2xl mx-auto font-description">
                        Have questions about finding your dream home? We're here to help you every step of the way.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 sm:mx-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Contact Information */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-secondary p-3 rounded-lg">
                                <MapPin className="h-6 w-6 text-primary-light" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary-light mb-2 font-heading">Our Location</h3>
                                <p className="text-primary-light font-description font-light">
                                  Lorem ipsum dolor sit amet consectetur adipisicing 
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-secondary p-3 rounded-lg">
                                <Phone className="h-6 w-6 text-primary-light" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary-light mb-2 font-heading">Phone</h3>
                                <p className="text-primary-light font-description font-light">+91 0000000000</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-secondary p-3 rounded-lg">
                                <Mail className="h-6 w-6 text-primary-light" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary-light mb-2 font-heading">Email</h3>
                                <p className="text-primary-light font-description font-light">xxxxxx@xxxx.com</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-secondary bg-opacity-50 p-8 rounded-lg"
                    >
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label htmlFor="name" className="block text-primary-light font-heading">
                                        Name
                                    </label>
                                    <span className={getCharacterCountClass(formData.name.length, LIMITS.name)}>
                                        {formData.name.length}/{LIMITS.name}
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 bg-secondary text-primary-light rounded-md focus:outline-none focus:ring-2 focus:ring-secondary font-description font-light"
                                    placeholder="Your name"
                                    required
                                    maxLength={LIMITS.name}
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label htmlFor="email" className="block text-primary-light font-heading">
                                        Email
                                    </label>
                                    <span className={getCharacterCountClass(formData.email.length, LIMITS.email)}>
                                        {formData.email.length}/{LIMITS.email}
                                    </span>
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 bg-secondary text-primary-light rounded-md focus:outline-none focus:ring-2 focus:ring-secondary font-description font-light"
                                    placeholder="your@email.com"
                                    required
                                    maxLength={LIMITS.email}
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label htmlFor="message" className="block text-primary-light font-heading">
                                        Message
                                    </label>
                                    <span className={getCharacterCountClass(formData.message.length, LIMITS.message)}>
                                        {formData.message.length}/{LIMITS.message}
                                    </span>
                                </div>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 bg-secondary text-primary-light rounded-md focus:outline-none focus:ring-2 focus:ring-secondary font-description font-light"
                                    placeholder="Your message"
                                    required
                                    maxLength={LIMITS.message}
                                />

                            </div>
                            <button
                                type="submit"
                                className={`w-full py-2 px-4 rounded-md transition-colors font-button ${loading
                                    ? 'bg-gray-500 cursor-not-allowed'
                                    : 'bg-secondary hover:bg-prim text-primary-light'
                                    }`}
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                        {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
                        {error && <p className="text-red-500 mt-4">Failed to send the message. Please try again.</p>}
                    </motion.div>
                </div>
                <SiteMap />
            </main>
            <Footer />
            <GotoTopBtn />
        </div>
    );
}