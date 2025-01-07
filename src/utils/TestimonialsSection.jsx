import React from 'react';

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.",
    author: "John Doe",
    title : "User"
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.",
    author: "John Doe",
    title: "CEO "
  }
];

const TestimonialsSection = () => (
  <section className="py-16 lg:py-24 bg-background-light">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
          What Users Saying
        </h2>
        <div className="w-24 h-1 bg-primary  mx-auto rounded-full"></div>
      </div>

      <div className="grid gap-8 md:grid-row-2">
        {testimonials.map((testimonial, index) => (
          <div className="bg-primary-light backdrop-blur-sm rounded-lg p-6 lg:p-8 relative" key={index}>
            <div className="absolute left-0 top-0 w-1 h-full bg-primary rounded-l-lg"></div>
            <blockquote className="text-gray-800 text-lg leading-relaxed mb-6 font-description">
              "{testimonial.quote}"
            </blockquote>
            <footer className="text-right">
              <cite className="not-italic">
                <span className="block font-semibold text-secondary font-heading">{testimonial.author}</span>
                {testimonial.title && <span className="text-sm text-secondary font-description font-light">{testimonial.title}</span>}
              </cite>
            </footer>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;