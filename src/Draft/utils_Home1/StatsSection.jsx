import { useEffect, useState } from "react";

function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [totalSales, setTotalSales] = useState(0);
  const [officialAddons, setOfficialAddons] = useState(0);
  const [totalAddons, setTotalAddons] = useState(0);
  const [downloads, setDownloads] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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
        const interval = setInterval(() => {
          if (current < target) {
            current += step;
            setter(current);
          } else {
            setter(target);
            clearInterval(interval);
          }
        }, 20);
      };

      countUp(400000, setTotalSales, 10000);
      countUp(24, setOfficialAddons, 1);
      countUp(86, setTotalAddons, 1);
      countUp(86000, setDownloads, 1000);
    }
  }, [isVisible]);

  return (
    <div id="stats-section" className="w-full bg-background">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center px-4">
          <h2 className="text-2xl font-bold text-secondary sm:text-3xl lg:text-4xl">
            Trusted by eCommerce Businesses
          </h2>
          <p className="mt-4 text-sm text-secondary sm:text-base lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
            provident impedit esse recusandae facere libero harum sequi.
          </p>
        </div>

        {/* Stats Grid */}
        <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-lg bg-background-light px-4 py-6 text-center transition-transform hover:scale-105">
            <dt className="order-last text-sm font-medium text-secondary sm:text-base">Total Sales</dt>
            <dd className="text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
              ${totalSales.toLocaleString()}
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-background-light px-4 py-6 text-center transition-transform hover:scale-105">
            <dt className="order-last text-sm font-medium text-secondary sm:text-base">Official Addons</dt>
            <dd className="text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
              {officialAddons}
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-background-light px-4 py-6 text-center transition-transform hover:scale-105">
            <dt className="order-last text-sm font-medium text-secondary sm:text-base">Total Addons</dt>
            <dd className="text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
              {totalAddons}
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-background-light px-4 py-6 text-center transition-transform hover:scale-105">
            <dt className="order-last text-sm font-medium text-secondary sm:text-base">Downloads</dt>
            <dd className="text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
              {downloads.toLocaleString()}
            </dd>
          </div>
        </dl>

        {/* Contact Section */}
        <div className="flex items-center justify-center mt-10 px-4">
          <div className="w-full max-w-4xl border-2 border-dashed border-secondary p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                  Have any question about us?
                </h3>
                <p className="mt-2 text-base sm:text-lg lg:text-xl text-secondary">
                  Don't hesitate to contact us
                </p>
              </div>
              <div className="w-full sm:w-auto">
                <a
                  className="inline-block w-full sm:w-auto rounded border-2 border-secondary px-6 py-3 text-center text-sm font-medium text-secondary transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary active:text-secondary"
                  href="#"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;