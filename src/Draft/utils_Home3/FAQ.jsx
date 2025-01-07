import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(true);

    const faqs = [
        {
            question: "Is TailGrids Well-documented?",
            answer: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
        },
        {
            question: "Is TailGrids Well-documented?",
            answer: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
        },
        {
            question: "Is TailGrids Well-documented?",
            answer: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
        },
        {
            question: "Is TailGrids Well-documented?",
            answer: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
        }
    ];

    return (
        <section className="py-24  relative">
            {/* Decorative dots */}
            <div className="absolute top-8 left-8 animate-bounce animate-infinite animate-normal animate-fill-backwards">
                <div className="grid grid-cols-3 gap-2">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-secondary" />
                    ))}
                </div>
            </div>
            <div className="absolute bottom-8 right-8 animate-wiggle-more animate-infinite animate-normal animate-fill-backwards">
                <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-secondary" />
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-primary font-semibold mb-2">
                        FAQ
                    </p>
                    <h2 className="text-4xl font-bold text-secondary mb-4 flex justify-center items-center flex-col">
                        Any Questions? &nbsp;
                         <p className=' text-2xl my-5 text-primary  motion-preset-typewriter-[12] '>Look Here...</p>
                    </h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        There are many variations of passages of Lorem Ipsum
                        available but the majority have suffered alteration in some form.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
                    {faqs.map((faq, index) => (
                        <div className="border-b border-primary rounded-md last:border-1" key={index}>
                            <button
                                className="w-full flex items-start justify-between py-6 text-left"
                            >
                                <div className="flex gap-4">
                                    <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <span className="text-xl font-medium text-secondary">{faq.question}</span>
                                </div>
                            </button>
                            {isOpen && (
                                <div className="pb-6 pl-10 ml-4">
                                    <p className="text-secondary">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>      </div>
        </section>
    );
};

export default FAQ;