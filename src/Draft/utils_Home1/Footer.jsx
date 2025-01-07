import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-background-light pt-12 px-4 border-t">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Logo Section */}
                <div className="flex flex-col items-start">
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <svg
                            className="w-8 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                        >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-secondary uppercase">
                            Company
                        </span>
                    </a>
                </div>

                {/* Discover Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">Discover</h3>
                    <ul className="space-y-3">
                        <li><a href="/" className="text-secondary hover:text-primary">About Us</a></li>
                        <li><a href="/" className="text-secondary hover:text-primary">Services</a></li>
                        <li><a href="/" className="text-secondary hover:text-primary">Incubation</a></li>
                        <li><a href="/" className="text-secondary hover:text-primary">Latest Programs</a></li>
                    </ul>
                </div>

                {/* Address Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">Address</h3>
                    <div className="space-y-3">
                        <p className="text-secondary">
                            PDEU Innovation & Incubation Centre (PDEU IIC),<br />
                            Pandit Deendayal Energy University<br />
                            Raisan Gandhinagar, Gujarat - 382421
                        </p>
                        <p className="text-secondary">
                            Email: <a href="mailto:dhvaninlpansuriya21@gmail.com" className="text-primary hover:underline">dhvaninlpansuriya21@gmail.com</a>
                        </p>

                        {/* Social Media Links */}
                        <div className="mt-6">
                            <h4 className="text-lg font-semibold mb-3 text-secondary">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="/" className="text-secondary hover:text-primary">
                                    <FaFacebook className="w-6 h-6" />
                                </a>
                                <a href="/" className="text-secondary hover:text-primary">
                                    <FaTwitter className="w-6 h-6" />
                                </a>
                                <a href="/" className="text-secondary hover:text-primary">
                                    <FaInstagram className="w-6 h-6" />
                                </a>
                                <a href="/" className="text-secondary hover:text-primary">
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                                <a href="/" className="text-secondary hover:text-primary">
                                    <FaWhatsapp className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center mt-10 mb-0 border-t-2  py-5">
                <p className="text-sm text-muted-foreground">
                    Copyright © {currentYear} IIC. All rights reserved by{' '}
                    <span className="font-medium text-foreground">Company</span>
                </p>
            </div>
        </footer>

    );
};

export default Footer;