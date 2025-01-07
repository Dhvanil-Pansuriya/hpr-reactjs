import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [totalSales, setTotalSales] = useState(0);
  const [officialAddons, setOfficialAddons] = useState(0);
  const [totalAddons, setTotalAddons] = useState(0);
  const [downloads, setDownloads] = useState(0);

  useEffect(() => {
    // Configure observer with more lenient settings for mobile
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Once visible, disconnect the observer as we don't need it anymore
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Lower threshold for easier triggering
        rootMargin: '50px' // Add margin to trigger earlier
      }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const countUp = (target, setter, step = 100) => {
        let current = 0;
        const duration = 1500; // Total animation duration in ms
        const steps = Math.ceil(target / step);
        const interval = Math.floor(duration / steps);

        const timer = setInterval(() => {
          if (current < target) {
            current = Math.min(current + step, target);
            setter(current);
          } else {
            clearInterval(timer);
          }
        }, interval);

        return () => clearInterval(timer);
      };

      // Start all counters
      const cleanups = [
        countUp(400000, setTotalSales, 1000),
        countUp(24, setOfficialAddons, 1),
        countUp(86, setTotalAddons, 1),
        countUp(86000, setDownloads, 500)
      ];

      // Cleanup all intervals on unmount
      return () => cleanups.forEach(cleanup => cleanup());
    }
  }, [isVisible]);

  return (
    <div
      id="stats-section"
      className="w-full bg-gradient-to-br from-primary-light to-primary-light"
    >
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center px-4">
          <h2 className="text-3xl font-normal text-secondary sm:text-4xl lg:text-5xl font-heading">
            Your Trusted Real Estate Partner
          </h2>
          <p className="mt-4 text-base text-secondary sm:text-lg font-description">
            Helping families find their perfect homes across the country
          </p>
        </div>

        {/* Stats Grid */}
        <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Properties Sold", value: totalSales, prefix: "$" },
            { label: "Locations", value: officialAddons },
            { label: "Happy Families", value: totalAddons },
            { label: "Property Views", value: downloads },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] px-6 py-10 text-center transition-all hover:-translate-y-1 hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.06)] font-description"
            >
              <dd className="text-4xl font-extralight text-secondary sm:text-5xl">
                {stat.prefix}{stat.value.toLocaleString()}
              </dd>
              <dt className="mt-4 text-sm font-medium text-secondary sm:text-base">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>

        {/* Contact Section */}
        <div className="flex items-center justify-center mt-16 px-4">
          <div className="w-full max-w-4xl bg-background-light rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-8 lg:p-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="text-center sm:text-left font-description">
                <h3 className="text-2xl font-light text-secondary lg:text-3xl">
                  Ready to find your dream home?
                </h3>
                <p className="mt-2 text-base text-secondary lg:text-lg">
                  Schedule a consultation with our expert team today.
                </p>
              </div>
              <div className="w-full sm:w-auto">
                <Link
                  className="inline-block w-full sm:w-auto rounded-full bg-primary px-8 py-4 text-center text-sm font-medium text-secondary transition-all hover:bg-primary hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:bg-primary-light font-button"
                  to='/comingsoon'
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;