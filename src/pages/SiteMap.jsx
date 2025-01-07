import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../utils/Footer';

// For open External MAP page
const center = {
    lat: 23.0004454, // Replace with your company's latitude
    lng: 72.5000317 // Replace with your company's longitude
}

const SitemapPage = () => {
    return (
        <div className="">
            <main className="container mx-auto px-4 pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-primary-light mb-6 font-heading">Sitemap & Location</h1>
                    <p className="text-primary-light max-w-2xl mx-auto font-description">
                        Find your way around our website and locate our physical presence.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-1 md:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-primary-light rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-4 text-secondary font-heading">Our Location</h2>
                                <div className="aspect-video relative mb-6">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14690.827531103392!2d72.50865080000001!3d22.99780375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1735552830378!5m2!1sen!2sin"
                                        className="absolute inset-0 w-full h-full border-0"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Company Location"
                                    />  
                                </div>

                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center mt-4 text-secondary hover:text-secondary transition-colors font-button"
                                >
                                    View on Google Maps
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </main>
        </div>
    );
};

export default SitemapPage;
