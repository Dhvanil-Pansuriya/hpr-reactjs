import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const menuRef = useRef(null);  // Reference to the menu container

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor("backdrop-blur-2xl border-b");
      } else {
        setBgColor("bg-transparent backdrop-blur-2xl ");
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Function to handle clicking outside of the menu
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener for click outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`px-4 py-3 ${bgColor} fixed w-full z-10 transition-all duration-300 font-description`}
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="relative flex items-center justify-around">
          <Logo />
          <ul className="flex items-center hidden space-x-10 lg:flex">
            <li>
              <Link
                to="/home"
                title="Home"
                className={`font-medium tracking-wide ${isActive("/home")
                  ? "text-background-light bg-secondary px-3 py-2 rounded-full"
                  : "text-primary-light"
                  } ${isActive("/")
                    ? "text-background-light bg-secondary px-3 py-2 rounded-full"
                    : "text-primary-light text-shadow"
                  } transition-colors duration-200 hover:text-deep-purple-accent-400`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                title="about"
                className={`text-shadow font-medium tracking-wide text-primary-light transition-colors duration-200 hover:text-deep-purple-accent-400  ${isActive("/about")
                  ? "text-background-light bg-secondary px-3 py-2 rounded-full"
                  : "text-primary-light text-shadow"
                  } transition-colors duration-200 hover:text-deep-purple-accent-400`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                title="faq"
                className={`text-shadow font-medium tracking-wide text-primary-light transition-colors duration-200 hover:text-deep-purple-accent-400  ${isActive("/faq")
                  ? "text-background-light bg-secondary px-3 py-2 rounded-full"
                  : "text-primary-light text-shadow"
                  } transition-colors duration-200 hover:text-deep-purple-accent-400`}
              >
                FAQ"s
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                title="contact"
                className={`text-shadow font-medium tracking-wide text-primary-light transition-colors duration-200 hover:text-deep-purple-accent-400  ${isActive("/contact")
                  ? "text-background-light bg-secondary px-3 py-2 rounded-full"
                  : "text-primary-light text-shadow"
                  } transition-colors duration-200 hover:text-deep-purple-accent-400`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="text-shadow p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-7 text-secondary" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full" ref={menuRef}>
                <div className="p-5 bg-primary-light border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center text-secondary"
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
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-primary-light focus:bg-secondary focus:outline-none focus:shadow-outline font-bold"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-secondary" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          to="/home"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-secondary transition-colors duration-200 hover:text-deep-purple-accent-400 "
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Home <hr />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          aria-label="about"
                          title="about"
                          className="font-medium tracking-wide text-secondary transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          About <hr />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          aria-label="faq"
                          title="faq"
                          className="font-medium tracking-wide text-secondary transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          FAQ"s <hr />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          aria-label="contact"
                          title="contact"
                          className="font-medium tracking-wide text-secondary transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Contact <hr />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/terms"
                          aria-label="terms"
                          title="terms"
                          className="font-medium tracking-wide text-secondary transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Terms & Conditions <hr />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <Link
              to="/terms"
              className="tracking-wide text-secondary hover:text-deep-purple-accent-400 border-2 border-secondary p-2 rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-center inline-block font-semibold"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
