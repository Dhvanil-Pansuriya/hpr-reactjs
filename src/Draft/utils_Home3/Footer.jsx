import React from "react";

const Footer = () => {
    return (
        <footer className="bg-secondary text-background-light pt-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left Section */}
                    <div className="md:col-span-2">
                        <h2 className="text-xl font-bold text-primary mb-4">PLAY</h2>
                        <p className="mb-6">
                            We create digital experiences for brands and companies by using
                            technology.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-background-light hover:text-primary-light">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-background-light hover:text-primary-light">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-background-light hover:text-primary-light">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-background-light hover:text-primary-light">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    {/* About Us */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary-light mb-4">About Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary-light">Home</a></li>
                            <li><a href="#" className="hover:text-primary-light">Features</a></li>
                            <li><a href="#" className="hover:text-primary-light">About</a></li>
                            <li><a href="#" className="hover:text-primary-light">Testimonial</a></li>
                        </ul>
                    </div>

                    {/* Features */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary-light mb-4">Features</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary-light">How it works</a></li>
                            <li><a href="#" className="hover:text-primary-light">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary-light">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary-light">Refund Policy</a></li>
                        </ul>
                    </div>

                    {/* Our Products */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary-light mb-4">Our Products</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary-light">LineIcons</a></li>
                            <li><a href="#" className="hover:text-primary-light">Ecommerce HTML</a></li>
                            <li><a href="#" className="hover:text-primary-light">TailAdmin</a></li>
                            <li><a href="#" className="hover:text-primary-light">PlainAdmin</a></li>
                        </ul>
                    </div>
                </div>

                <div className="container text-center mt-10 mb-0 border-t-2  py-5">
                    <p className="text-lg text-muted-foreground">
                        Copyright © 2024 IIC. All rights reserved by{' '}
                        <span className="font-medium text-foreground">Company</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
