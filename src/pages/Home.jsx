import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import Divider from '../utils/Divider'
import StatsSection from '../utils/StatsSection';
import CardSection from '../utils/CardSection';
import EventCard from '../utils/EventCard';
import VideoSection from '../utils/VideoSection';
import Footer from '../utils/Footer';
import TestimonialsSection from '../utils/TestimonialsSection';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import GotoTopBtn from '../utils/GotoTopBtn';
import FloatingButton from '../utils/FloatingButton';

import img_news_achievements from '../assets/home/img_news_achievements.png'

const Home = () => {

    // For Animation
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>

            {/* Welcome Page Content*/}
            <section className="relative min-h-[600px] lg:h-screen w-full bg-[url(https://wallpapers.com/images/featured/information-technology-background-yj5lntx9lzio3yiz.jpg)] bg-cover bg-center bg-no-repeat py-32 ">
                <div
                    className="absolute inset-0 bg-gradient-to-r backdrop-blur-[5px] sm:bg-transparent from-background ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                />

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 md:py-24 lg:py-32 lg:h-full lg:flex lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-left">
                        <h1 className="text-3xl font-extrabold text-secondary sm:text-5xl">
                            <span className="block text-4xl sm:text-6xl lg:text-6xl mb-2 animate-fade-in font-heading">
                                Lorem ipsum dolor 
                            </span>
                            <strong className="block font-extrabold text-primary-light animate-fade-in-delay font-heading">
                               Lorem ipsum dolor 
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg text-secondary sm:text-xl/relaxed animate-fade-in-up font-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae cupiditate perferendis. Laborum omnis reprehenderit impedit ea assumenda nisi nobis et, praesentium facere consequatur minus voluptatem temporibus non doloribus cum.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                to='/comingsoon'
                                className="w-full sm:w-auto inline-flex justify-center items-center rounded bg-primary px-8 py-3 text-sm font-medium text-secondary shadow hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 transition duration-300 ease-in-out transform hover:-translate-y-1 font-button"
                            >
                                Get Started
                            </Link>

                            <Link
                                to='/comingsoon'
                                className="w-full sm:w-auto inline-flex justify-center items-center rounded bg-background/90 px-8 py-3 text-sm font-medium text-secondary shadow hover:bg-background focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 transition duration-300 ease-in-out transform hover:-translate-y-1 font-button"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* Divider */}
            {/* <Divider content='Hello this is divider' /> */}

            {/* Middle Text Content */}
            <div className="flex items-center justify-center flex-col mx-5 my-10">
                <div
                    ref={ref}
                    className={`w-full md:w-2/3 flex flex-col items-center text-center transform transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h1 className="title-font sm:text-5xl text-4xl mb-6 font-semibold text-secondary font-heading">
                       Lorem Discover Unique Stories and Experiences
                    </h1>
                    <p className="mb-8 leading-relaxed text-lg text-primary font-description">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, minima soluta neque iure eius vel voluptates impedit ipsam ea architecto illum magnam velit, eum voluptatum odit similique pariatur. Voluptate, veniam!
                    </p>
                    <Link
                        className="inline-block rounded-md bg-gradient-to-r from-background to-primary px-8 py-3 text-sm font-medium text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 active:scale-95 font-button"
                        to='/comingsoon'

                    >
                        Read More
                    </Link>
                </div>
            </div>


            {/* Stat Components */}
            <StatsSection />

            {/* Card Components */}
            <CardSection />


            {/* Events Cards */}
            <EventCard />


            {/* Latest News and Achievements */}

            <section className="min-h-screen bg-gradient-to-r from-background-light to-primary-light flex items-center py-5 my-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                        {/* Image Section */}
                        <div className="lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[600px] flex justify-center">
                            <img
                                src={img_news_achievements}
                                alt="Latest News and Achievements"
                                className="w-full h-auto max-w-full rounded-lg transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-1/2 p-4 sm:p-6 lg:p-12 flex flex-col justify-center text-center lg:text-left">
                            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-secondary mb-4 sm:mb-6 lg:mb-6 font-heading">
                                Latest News and Achievements
                            </h1>
                            <p className="text-secondary text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed font-description font-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis laudantium assumenda, adipisci doloremque illum, recusandae obcaecati quasi, dolorum architecto omnis aspernatur sequi nemo vitae quis saepe voluptate cumque dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus doloremque iure esse vel. Excepturi doloribus explicabo quia dolore repellendus ipsum repudiandae quasi officiis doloremque! Eveniet iste excepturi fugiat quod suscipit!lorem lorem
                            </p>
                            <Link
                                to="/comingsoon"
                                className="bg-background text-secondary px-6 sm:px-8 py-3 rounded-lg font-semibold transform transition-transform duration-300 hover:scale-105 w-fit mx-auto lg:mx-0 font-button"
                            >
                                DISCOVER MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* What Users Saying */}
            <TestimonialsSection />

            {/* Video Section */}
            <VideoSection />

            {/* Footer */}
            <Footer />



            <FloatingButton />
            <GotoTopBtn />
        </div>
    )
}

export default Home
