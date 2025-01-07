import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, MessageCircleMore } from 'lucide-react';
import Footer from '../utils/Footer';
import GotoTopBtn from '../utils/GotoTopBtn';
import { Link } from 'react-router-dom';
import FloatingButton from '../utils/FloatingButton';

// FAQ Data
const faqs = [
    {
        question: "Who should use our service?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla."
    },
    {
        question: "What is required to use our service?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla."
    },
    {
        question: "Do I need to have prior real estate experience?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.."
    },
    {
        question: "What makes our service different from others?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla."
    },
    {
        question: "How do I get started?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla."
    }
];

// Search Bar Component
function SearchBar({ value, onChange }) {
    return (
        <div className="relative w-full max-w-xl mb-8 ">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary/60 w-5 h-5" />
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full pl-12 pr-4 py-3 bg-primary-light border-b-2  rounded-md border-primary-light/20 focus:border-primary-light/40 outline-none text-secondary font-description"

            />
        </div>
    );
}

// FAQ Item Component
function FAQItem({ question, answer, isOpen, onToggle }) {
    return (
        <div className="border-b border-primary-light/10">
            <button
                onClick={onToggle}
                className="w-full py-4 flex justify-between items-center text-left"
            >
                <span className="text-primary-light font-heading font-medium">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-primary-light transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="pb-4 text-primary-light/80 font-description">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}


// Main FAQ Component
export default function FAQ() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openIndex, setOpenIndex] = useState(null);

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-secondary ">
            <main className="container mx-auto py-16 px-4 sm:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl font-bold text-primary-light my-12  font-heading">
                        Frequently Asked Questions
                    </h1>

                    <div className="mb-12">
                        <p className="text-primary-light/60 mb-2 font-description">Can't find what you are looking for?</p>
                        <div className="flex items-center gap-2">
                            <p className="text-primary-light font-heading">We would like to Contact with us</p>
                            <div className="w-12 h-12 rounded-full flex items-center justify-center ">
                                <Link to="/contact">
                                    <MessageCircleMore className="w-6 h-6 text-primary" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <SearchBar
                        value={searchQuery}
                        onChange={setSearchQuery}
                    />

                    <div className="space-y-2">
                        {filteredFaqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>
                </motion.div>
            </main>
            <FloatingButton />
            <GotoTopBtn />
            <Footer />
        </div>
    );
}
