import React from 'react'
import StatsSection from '../utils_Home1/StatsSection';
import CardSection from '../utils_Home1/CardSection';
import EventCard from '../utils_Home1/EventCard';
import TestimonialsSection from '../utils_Home1/TestimonialsSection';
import VideoSection from '../utils_Home1/VideoSection';
import Footer from '../utils_Home1/Footer';

const Home1 = () => {

    return (
        <div>
            {/* Welcome Page Content*/}
            <div className="mb-10">
                <div className="bg-background">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 my-20 sm:my-36">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary-light uppercase rounded-full bg-  ">
                                    Brand new
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-secondary sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">
                                    <svg
                                        viewBox="0 0 52 24"
                                        fill="currentColor"
                                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-primary-light lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                    >
                                        <defs>
                                            <pattern
                                                id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                                                x="0"
                                                y="0"
                                                width=".135"
                                                height=".30"
                                            >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                    </svg>
                                </span>
                                The quick, brown fox jumps over a lazy dog
                            </h2>
                            <p className="text-base text-primary-light md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae.
                            </p>
                        </div>
                        <div className="flex items-center sm:justify-center">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-secondary text-primary-light transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Get started
                            </button>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold text-secondary transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative px-4 sm:px-0">
                    <div className="absolute inset-0 bg-background h-1/2" />
                    <div className="relative grid mx-auto overflow-hidden bg-background-light divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
                        <div className="inline-block p-8 text-center">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-black-50">
                                <svg
                                    className="w-10 h-10 text-  "
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="font-bold tracking-wide text-primary">
                                Make it better
                            </p>
                        </div>
                        <div className="inline-block p-8 text-center">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-black-50">
                                <svg
                                    className="w-10 h-10 text-  "
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="font-bold tracking-wide text-primary">
                                Do it faster
                            </p>
                        </div>
                        <div className="inline-block p-8 text-center">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-black-50">
                                <svg
                                    className="w-10 h-10 text-  "
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="font-bold tracking-wide text-primary">
                                Working harder
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Divider */}
            {/* <Divider content='Hello this is divider' /> */}

            {/* Middle Text Content */}
            <section className="text-primary body-font">
                <div className="container px-5 pb-20 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-  mb-8" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed text-lg text-secondary">
                            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.
                        </p>
                        <span className="inline-block h-1 w-10 rounded bg-  mt-8 mb-6"></span>
                        <h2 className="text-secondary font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                        <p className="text-primary">Senior Product Designer</p>
                        <a
                            className="inline-block rounded border border-current mt-7 px-8 py-3 text-sm font-medium text-  transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-secondary"
                            href="#"
                        >
                            Read more
                        </a>
                    </div>
                </div>
            </section>


            {/* Stat Components */}
            <StatsSection />

            {/* Card Section */}
            <CardSection />

            {/* EventCard Section */}
            <EventCard />

            {/* Latest News and Achievements */}
            <section className="min-h-screen bg-gradient-to-r from-background-light to-background  flex items-center py-5">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                        <div className="lg:w-1/2 relative h-[300px] lg:h-[600px]">
                            <img
                                src='https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000&h=1000'
                                alt="Startup Weekend Event"
                                className="w-full h-full object-cover rounded-lg shadow-xl"
                            />
                        </div>

                        <div className="lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
                            <h1 className="text-3xl lg:text-5xl font-bold text-secondary mb-6">
                                Latest News and Achievements</h1>
                            <p className="text-secondary text-lg lg:text-xl mb-8 leading-relaxed">
                                PDEU IIC organised Techstars Startup Weekend which is a dynamic three-day accelerator program where innovators, developers, and entrepreneurs come together to turn ideas into reality. The goal was to create a startup concept from scratch in just 54 hours. This event was from 9th Aug-24 to 11th Aug-24.                            </p>
                            <button className="bg-primary-light text-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary transition-colors duration-300 w-fit">
                                DISCOVER MORE
                            </button>
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
        </div>
    )
}

export default Home1