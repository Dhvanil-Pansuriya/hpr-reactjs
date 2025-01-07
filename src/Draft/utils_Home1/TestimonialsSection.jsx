import React from 'react';

const testimonials = [
  {
    quote: "Its great place for the innovators, specially for startups, they provide working space that is the office space, field for performing various tests of the product that you are trying to create. The staff here is very helpful and supportive, they also make the startups aware about market conditions so that the startups grow well and they dont need to face uncertainties",
    author: "Vikram Kataria",
    title : "User"
  },
  {
    quote: "Best Incubation space with standard facilities and open culture",
    author: "Aditya Shukla",
    title: "CEO Saltech"
  }
];

const TestimonialsSection = () => (
  <section className="py-16 lg:py-24 bg-background-light">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
          What Users Saying
        </h2>
        <div className="w-24 h-1 bg-primary-light  mx-auto rounded-full"></div>
      </div>

      <div className="grid gap-8 md:grid-row-2">
        {testimonials.map((testimonial, index) => (
          <div className="bg-background-light backdrop-blur-sm rounded-lg p-6 lg:p-8 relative" key={index}>
            <div className="absolute left-0 top-0 w-1 h-full bg-primary rounded-l-lg"></div>
            <blockquote className="text-gray-800 text-lg leading-relaxed mb-6">
              "{testimonial.quote}"
            </blockquote>
            <footer className="text-right">
              <cite className="not-italic">
                <span className="block font-semibold text-secondary">{testimonial.author}</span>
                {testimonial.title && <span className="text-sm text-secondary">{testimonial.title}</span>}
              </cite>
            </footer>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;