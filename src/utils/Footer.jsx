import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../commonUtils/Logo';

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-background-light pt-12 px-4 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Logo Section */}
                <div className="flex flex-col items-start">
                    <Logo />
                </div>

                {/* Discover Section */}
                <div className='font-button'>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">Discover</h3>
                    <ul className="space-y-3">
                        <li className="group relative">
                            <a href='/about' className="text-secondary hover:text-primary inline-block">
                                About us
                                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-16"></span>
                            </a>
                        </li>
                        <li className="group relative">
                            <a href='/faq' className="text-secondary hover:text-primary inline-block">
                                FAQ"s
                                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-10"></span>
                            </a>
                        </li>
                        <li className="group relative">
                            <a href='/contact' className="text-secondary hover:text-primary inline-block">
                                Contact us
                                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-20"></span>
                            </a>
                        </li>
                        <li className="group relative">
                            <a href='/terms' className="text-secondary hover:text-primary inline-block">
                                Terms & Conditions
                                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-36"></span>
                            </a>
                        </li>
                        <li className="group relative">
                            <a href='/contact' className="text-secondary hover:text-primary inline-block">
                                Site Map & Location
                                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-36"></span>
                            </a>
                        </li>
                    </ul>
                </div>


                {/* Address Section */}
                <div className='font-button'>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">Address</h3>
                    <div className="space-y-3">
                        <p className="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consectetur esse deleniti tenetur, aut suscipit error. Voluptates voluptas, vero, aliquam facere fuga rerum delectus assumenda, accusamus odio id perferendis temporibus?
                        </p>
                        <p className="text-secondary">
                            Email: <a href="mailto:example@gmail.com" className="text-primary hover:underline">example@gmail.com</a>
                        </p>

                        {/* Social Media Links */}
                        <div className="mt-6">
                            <h4 className="text-lg font-semibold mb-3 text-secondary">Follow Us</h4>
                            <div className="flex space-x-4">
                                <Link to='/comingsoon'
                                    className="text-secondary hover:text-primary">
                                    <FaFacebook className="w-6 h-6" />
                                </Link>
                                <Link to='/comingsoon'
                                    className="text-secondary hover:text-primary">
                                    <FaTwitter className="w-6 h-6" />
                                </Link>
                                <Link to='/comingsoon'
                                    className="text-secondary hover:text-primary">
                                    <FaInstagram className="w-6 h-6" />
                                </Link>
                                <Link to='/comingsoon'
                                    className="text-secondary hover:text-primary">
                                    <FaLinkedin className="w-6 h-6" />
                                </Link>
                                <Link to='/comingsoon'
                                    className="text-secondary hover:text-primary">
                                    <FaWhatsapp className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center mt-10 mb-0 border-t-2  py-5">
                <p className="text-sm text-muted-foreground font-heading">
                    Copyright © {currentYear} HPR. All rights reserved by{' '}
                    <span className="font-semibold text-foreground">HPR</span>
                </p>
                <span className="font-medium text-foreground ">Powered by <a href="https://ephoenixsolutions.com/" target='_blank' className='text-[#f72865]'>ePhoenix</a></span>
            </div>
        </footer>

    );
};

export default Footer;