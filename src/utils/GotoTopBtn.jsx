import { ArrowUp } from 'lucide-react';
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { GoArrowUp } from 'react-icons/go';
import { IoArrowUpOutline } from 'react-icons/io5';

const GotoTopBtn = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleWhatsappClick = () => {
        const phoneNumber = '+919924274295'; // Add Mobile number here (Current Mo.Number Hardik sir's number)
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
    };
    return (
        <div>
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-secondary text-primary-light rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none border font-heading h-12 w-12 flex items-center justify-center "
                title='Go to up'
            >
                <IoArrowUpOutline size={22} />
            </button>
            <button
                onClick={handleWhatsappClick}
                className="fixed bottom-8 right-24 bg-green-500 text-primary-light p-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none border font-heading h-12 w-12 flex items-center justify-center "
                title='Chat with us'
            >
                <FaWhatsapp size={22} />
            </button>
        </div>
    )
}

export default GotoTopBtn
