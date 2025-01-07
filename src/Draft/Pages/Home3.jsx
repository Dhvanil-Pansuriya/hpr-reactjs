import React from 'react'
import TechStack from '../utils_Home3/TechStack'
import { Github, ArrowUp } from 'lucide-react';
import Features from '../utils_Home3/Features';
import Toolkit from '../utils_Home3/Toolkit';
import Testimonials from '../utils_Home3/Testimonials';
import FAQ from '../utils_Home3/FAQ';
import Team from '../utils_Home3/Team';
import BlogSection from '../utils_Home3/BlogSection';
import ContactSection from '../utils_Home3/ContactSection';
import Footer from '../utils_Home3/Footer';
import { Link } from 'react-router-dom';


const Home3 = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {/* Welcome */}
      <div className="bg-background  min-h-screen pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-light mb-6 motion-preset-focus ">
            Open-Source Web Template for<br />
            SaaS, Startup, Apps, and More
          </h1>

          <p className="text-secondary text-lg md:text-xl mb-3  max-w-3xl mx-auto ">
            Multidisciplinary Web Template Built with Your Favourite Technology
            - HTML Bootstrap, Tailwind and React NextJS.
          </p>

          <div className="text-center">
            <p className="text-primary-light mb-4">Built with latest technology</p>
            <div className="flex justify-center space-x-6 ">
              {/* Technology logos would go here - using divs as placeholders */}
              <TechStack />
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
          <div className="rounded-lg shadow-xl ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/665/135/non_2x/e-learning-made-with-binary-code-innovative-online-education-webinar-teaching-online-training-courses-skill-development-digital-binary-data-streaming-digital-code-background-illustration-vector.jpg"
              alt="Dashboard Preview"
              className="rounded-lg w-full "
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <Features />

      {/* Toolkit */}
      <Toolkit />

      {/* Some text */}
      <div className="relative py-32 bg-background overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-background rounded-full opacity-10 transform rotate-12" />
          <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-background rounded-full opacity-10 transform -rotate-12" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-primary-light max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
              What Are You Looking For?
            </h2>
            <h3 className="text-3xl md:text-4xl mb-6">
              Get Started Now
            </h3>
            <p className="text-primary-light   mb-8">
              There are many variations of passages of Lorem Ipsum but the
              majority have suffered in some form.
            </p>

            <Link to="/comingsoon"

              className="px-8 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-background-light text-secondary transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-center inline-block "
            >
              Start using Play
            </Link>

          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Team Section */}
      <Team />

      {/* Blog-Post Section */}
      <BlogSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-background-light text-secondary p-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none border"
      >
        <ArrowUp />
      </button>

    </>
  )
}

export default Home3
