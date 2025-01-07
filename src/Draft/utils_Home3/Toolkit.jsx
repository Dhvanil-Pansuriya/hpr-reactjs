import React from 'react';
import { Link } from 'react-router-dom';

const Toolkit = () => {
  return (
    <div className="py-24 bg-primary-light ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="max-w-xl  ">
            <h2 className="text-4xl font-bold mb-6 text-secondary">
              Brilliant Toolkit to Build Nextgen Website Faster.
            </h2>
            <div className="space-y-4 text-secondary">
              <p>
                The main 'thrust' is to focus on educating attendees on how to best
                protect highly vulnerable business applications with interactive panel
                discussions and roundtables led by subject matter experts.
              </p>
              <p>
                The main 'thrust' is to focus on educating attendees on how to best
                protect highly vulnerable business applications with interactive panel.
              </p>
            </div>

            <Link
              to="/comingsoon"
              className="mt-8 bg-primary text-primary-light px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-center inline-block"
            >
              Know More
            </Link>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Image */}
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Team collaboration"
              className="w-full h-[300px] object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
            <div className="space-y-6">
              {/* Second Image */}
              <img
                src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Modern workspace"
                className="w-full h-[140px] object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
              />
              {/* Experience Box */}
              <div className="bg-primary p-8 rounded-lg text-center text-primary-light transform transition-transform duration-500 hover:scale-105">
                <div className="text-5xl font-bold mb-2">09</div>
                <div className="text-lg font-medium">We have</div>
                <div className="text-sm text-primary-light">Years of experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
