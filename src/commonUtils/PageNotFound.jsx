import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-background to-primary flex flex-col items-center justify-center text-secondary">
      {/* Animation Section */}
      <div className="text-center mb-12">
        <h1 className="text-8xl font-extrabold animate-bounce font-heading">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-in-up font-description">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-lg animate-fade-in-up font-description">
          Maybe the page was moved or deleted, or you mistyped the URL.
        </p>
        
      </div>

      {/* Button to go back to homepage */}
      <Link
        to="/"
        className="mt-8 inline-block bg-background-light text-secondary px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 font-button"
      >
        Go to Homepage
      </Link>

      {/* Animated Floating Effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-20 transform rotate-180"
        >
          <path
            fill="rgba(255, 255, 255, 0.4)"
            d="M0,288L1440,32L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default PageNotFound;
