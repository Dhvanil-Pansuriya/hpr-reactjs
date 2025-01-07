import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '../utils/Footer'
import GotoTopBtn from "../utils/GotoTopBtn"
import FloatingButton from '../utils/FloatingButton'
import ImageSlider from '../utils/ImageSLider'
import img_success_story from '../assets/about/img_success_story.png'
import img_innovation from '../assets/about/img_innovation.png'
import img_business_integrity from '../assets/about/img_business_integrity.png'
import img_excellence from '../assets/about/img_excellence.png'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const directors = [
        {
            name: "Dr. John Doe",
            title: "Chairman",
            image: "https://via.placeholder.com/200x200",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima s quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.."
        },
        {
            name: "Dr. John Doe",
            title: "CEO and Director",
            image: "https://via.placeholder.com/200x200",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni  exercitationem vero, nisi molestias magnam nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla."
        },
        {
            name: "Dr. John Doe",
            title: "Director",
            image: "https://via.placeholder.com/200x200",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestlla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla."
        }
    ];

    const values = [
        {
            img: img_innovation,
            title: 'Innovation',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.',
        },
        {
            img: img_business_integrity,
            title: 'Integrity',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.',
        },
        {
            img: img_excellence,
            title: 'Excellence',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-background  to-secondary">
            <main className="container mx-auto py-16 sm:px-16 px-4 ">

                {/* header of about */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-secondary mb-6 mt-10 font-heading">About Our Vision</h1>
                    <p className="text-primary-light max-w-2xl mx-auto font-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti natus quas cumque harum eveniet voluptatum omnis debitis, earum accusantium iste exercitationem id facere ipsum atque quia, laudantium veniam eius?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum, iure repellendus illum excepturi fuga ipsam omnis alias culpa expedita est quia repudiandae id voluptate. Eligendi vel possimus accusantium asperiores!L lorem
                    </p>
                </motion.div>

                {/* Slider for Awards And Recognitions  */}
                <section className="mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl font-bold text-secondary font-heading">Awards And Recognitions</h1>
                        <ImageSlider />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <img
                                src={img_success_story}
                                alt="Modern building"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-2xl"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-6"
                        >

                            <h2 className="text-4xl font-bold  text-primary-light font-heading">Our Story</h2>
                            <p className="text-primary-light font-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur ut nesciunt! Fugiat nisi animi minus facere nam ad doloribus! Officia itaque provident nemo maxime ab aut modi, corporis iste.
                            </p>
                            <div className="grid grid-cols-2 gap-8 font-description">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
                                    <div className="text-primary-light">Happy Clients</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                                    <div className="text-primary-light">Properties Sold</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Board Of Directors */}
                <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl font-bold text-secondary mb-4">
                                Board Of Directors
                            </h1>
                            <div className="w-16 h-1 bg-background mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {directors.map((director, index) => (
                                <div className="bg-background-light p-8 rounded-lg shadow-lg flex flex-col items-center text-center" key={index}>
                                    <div className="relative mb-4">
                                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background">
                                            <img
                                                src={director.image}
                                                alt={director.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="inline-block bg-background rounded-full px-6 py-2 mb-2">
                                            <h3 className="text-primary-light font-medium text-lg">{director.name}</h3>
                                        </div>
                                        <p className="text-secondary font-medium">{director.title}</p>
                                    </div>

                                    <p className="text-secondary leading-relaxed">
                                        {director.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Over values */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-24 text-center"
                >
                    <h2 className="text-3xl font-bold text-primary-light mb-12 font-heading">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                                className="p-6 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all"
                            >
                                <img
                                    src={value.img} // Correctly referencing the image
                                    alt={value.title} // Correctly referencing the title
                                    width={400}
                                    height={200}
                                    className="rounded-lg shadow-2xl"
                                />
                                <h3 className="text-xl font-bold text-primary my-4 font-heading">{value.title}</h3>
                                <p className="text-primary-light font-description">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <section className="relative w-full  ">
                    {/* Diagonal lines overlay */}
                    <div className="absolute inset-0">
                    </div>

                    {/* Content */}
                    <div className="relative flex flex-col items-center justify-center px-4 py-16 text-center">
                        <h2 className="mb-8 text-2xl font-semibold text-gray-800 sm:text-3xl md:text-4xl">
                            Have any questions or need assistance?
                        </h2>
                        <button
                            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-light transition-all duration-200  focus:outline-none focus:ring-2  focus:ring-offset-2"
                            onClick={() => window.location.href = '/contact'}
                        >
                            CONTACT US
                        </button>
                    </div>
                </section>


            </main>


            <Footer />

            <FloatingButton />
            <GotoTopBtn />
        </div>
    )
}

export default About    
