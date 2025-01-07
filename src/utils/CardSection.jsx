import React from 'react'
import { Settings, LineChart, Building2, Users, Network, PiggyBank } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
    {
        icon: Settings,
        title: "Rapid Prototyping And Prototyping Lab",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.",
        iconColor: "text-green-500",
        bgColor: "bg-green-100",
    },
    {
        icon: LineChart,
        title: "Grant/Angel/VC Funding",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla..",
        iconColor: "text-blue-500",
        bgColor: "bg-blue-100",
    },
    {
        icon: Building2,
        title: "IPR And Legal Services",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.",
        iconColor: "text-orange-500",
        bgColor: "bg-orange-100",
    },
    {
        icon: Users,
        title: "Training And Mentoring",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.",
        iconColor: "text-purple-500",
        bgColor: "bg-purple-100",
    },
    {
        icon: Network,
        title: "Sales and Networking Services",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.",
        iconColor: "text-red-500",
        bgColor: "bg-red-100",
    },
    {
        icon: PiggyBank,
        title: "Financial Assistance",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.",
        iconColor: "text-teal-500",
        bgColor: "bg-teal-100",
    },
]

const CardSection = () => {
    return (
        <div className="w-full bg-background">
            <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8 lg:py-24">
                <div className="flex items-center justify-center flex-col gap-3 mb-16">
                    <h2 className="text-3xl font-normal text-secondary text-center sm:text-4xl font-heading">
                        Comprehensive Real Estate Services


                    </h2>
                    <p className="text-center text-secondary text-lg max-w-2xl font-description">
                        Discover our full range of professional real estate services designed to meet all your property needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={index}
                                className="bg-background-light rounded-xl overflow-hidden relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.06)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                            >
                                <div className="p-6">
                                    {/* Background Pattern */}
                                    <div className="absolute top-0 right-0 w-48 h-48 transform translate-x-1/3 -translate-y-1/3 opacity-[0.03]">
                                        <div className={`w-full h-full ${service.iconColor} rounded-full`} />
                                    </div>

                                    {/* Icon */}
                                    <div
                                        className={`${service.bgColor} ${service.iconColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-medium text-secondary mb-3 font-heading">
                                        {service.title}
                                    </h3>
                                    <p className="text-secondary leading-relaxed font-description font-light">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="flex items-center justify-center mt-16">
                    <Link
                        to='/comingsoon'
                        className="inline-block rounded-full border-2 bg-secondary border-secondary px-8 py-3 text-sm font-medium text-primary transition-colors  hover:text-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-button"
                    >
                        Explore All Services
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardSection

