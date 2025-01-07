import React from "react";
import { Gift, Layout, Palette, Grid } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: Gift,
      title: "Free and Open-Source",
      description: "Lorem Ipsum is simply dummy text of the printing industry.",
    },
    {
      icon: Layout,
      title: "Multipurpose Template",
      description: "Lorem Ipsum is simply dummy text of the printing industry.",
    },
    {
      icon: Palette,
      title: "High-quality Design",
      description: "Lorem Ipsum is simply dummy text of the printing industry.",
    },
    {
      icon: Grid,
      title: "All Essential Elements",
      description: "Lorem Ipsum is simply dummy text of the printing industry.",
    },
  ];

  return (
    <div className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-secondary sm:text-4xl">
            Main Features Of Play
          </p>
          <p className="mt-4 max-w-2xl text-xl text-secondary mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div
              className="flex flex-col items-center text-center p-6 bg-primary-light rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              key={index}
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-primary-light" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary mb-4">{feature.description}</p>
              <Link to="/comingsoon"
                className="text-primary font-medium hover:text-background">
                Learn More

              </Link>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
