import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Star } from 'lucide-react';


const Testimonials = () => {

    const testimonials = [
        {
            quote: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
            author: {
                name: "Sabo Masties",
                role: "Founder",
                company: "Rolex",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            }
        },
        {
            quote: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
            author: {
                name: "Musharof Chowdhury",
                role: "Founder",
                company: "Ayro UI",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            }
        },
        {
            quote: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
            author: {
                name: "William Smith",
                role: "Founder",
                company: "Trorex",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            }
        },
        {
            quote: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
            author: {
                name: "William Smith",
                role: "Founder",
                company: "Trorex",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            }
        }
    ];

    return (
        <section className="py-24 bg-background-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-primary font-semibold mb-2">
                        Testimonials
                    </p>
                    <h2 className="text-4xl font-bold text-secondary mb-4">
                        What our Clients Say
                    </h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        There are many variations of passages of Lorem Ipsum
                        available but the majority have suffered alteration in some form.
                    </p>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {testimonials.map((testimonial, index) => (
                            <div className="bg-primary-light p-8 rounded-xl shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-primary-light" key={index}>
                                <p className="text-secondary mb-6">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.author.image}
                                        alt={testimonial.author.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-secondary">{testimonial.author.name}</h4>
                                        <p className="text-sm text-secondary">
                                            {testimonial.author.role} @ {testimonial.author.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;