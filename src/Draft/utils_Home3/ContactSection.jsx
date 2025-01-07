import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-background-light py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-semibold uppercase text-secondary mb-4">Contact Us</h2>
            <h1 className="text-3xl font-bold text-secondary mb-6">
              Let's talk about your problem.
            </h1>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-secondary">Our Location</h3>
                <p className="text-secondary">
                  401 Broadway, 24th Floor, Orchard Cloud View, London
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">How Can We Help?</h3>
                <p className="text-secondary">
                  info@yourdomain.com
                  <br />
                  contact@yourdomain.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-background-light shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-secondary font-medium mb-2" htmlFor="fullName">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Adam Gelius"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-background-light"
                />
              </div>
              <div className="mb-4">
                <label className="block text-secondary font-medium mb-2" htmlFor="email">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@yourmail.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-background-light"
                />
              </div>
              <div className="mb-4">
                <label className="block text-secondary font-medium mb-2" htmlFor="phone">
                  Phone*
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="+885 1254 5211 552"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-background-light"
                />
              </div>
              <div className="mb-6">
                <label className="block text-secondary font-medium mb-2" htmlFor="message">
                  Message*
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Type your message here"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-background-light"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-lg   transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
