import React from 'react';
import { Link } from 'react-router-dom';

const FuturePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background  to-primary text-secondary p-4">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 animate-fade-in-up font-heading">
          This Page Is Coming Soon
        </h1>
        <p className="text-lg md:text-xl sm:mt-10 mb-6 animate-fade-in-up font-description">
          We're currently working on this page and it will be available in the near future. Stay tuned for updates and new features.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block bg-background-light text-secondary px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 font-button"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default FuturePage;
