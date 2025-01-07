import React from 'react'
import { Settings, LineChart, Building2, Users, Network, PiggyBank } from 'lucide-react'

const services = [
    {
        icon: Settings,
        title: "Rapid Prototyping And Prototyping Lab",
        description:
            "We offer rapid prototyping services and access to a state-of-the-art prototyping lab. Our team can assist you in turning your ideas into tangible prototypes quickly and efficiently.",
        iconColor: "text-green-500",
        bgColor: "bg-green-100",
    },
    {
        icon: LineChart,
        title: "Grant/Angel/VC Funding",
        description:
            "We assist startups in securing grant, angel, and venture capital funding. Our team has extensive experience and can guide you through the process of identifying potential funding sources, preparing your pitch, and negotiating terms.",
        iconColor: "text-blue-500",
        bgColor: "bg-blue-100",
    },
    {
        icon: Building2,
        title: "IPR And Legal Services",
        description:
            "We provide comprehensive Intellectual Property Rights (IPR) and legal services. Our team of experts can guide you through the process of patent filing, trademark registration, and copyright protection.",
        iconColor: "text-orange-500",
        bgColor: "bg-orange-100",
    },
    {
        icon: Users,
        title: "Training And Mentoring",
        description:
            "We offer comprehensive training and mentoring programs for startups. Our experienced mentors provide guidance on business strategy, market analysis, and product development.",
        iconColor: "text-purple-500",
        bgColor: "bg-purple-100",
    },
    {
        icon: Network,
        title: "Sales and Networking Services",
        description:
            "We offer sales and networking services to startups. Our team can help you develop a sales strategy, identify potential customers, and build a strong network in your industry.",
        iconColor: "text-red-500",
        bgColor: "bg-red-100",
    },
    {
        icon: PiggyBank,
        title: "Financial Assistance",
        description:
            "We offer financial assistance to startups in the form of grants, loans, and other financial resources. Our team of financial experts can guide you through the process of securing funding for your startup.",
        iconColor: "text-teal-500",
        bgColor: "bg-teal-100",
    },
]

const CardSection = () => {
    return (
        <div className="container mx-auto px-16 py-16">
            <div className='flex items-center justify-center flex-col gap-2 mb-10'>
                <div className='text-2xl font-semibold'>
                    Services We Can Help You With
                </div>
                <div className='text-lg'>
                    Explore a wide range of services we offer to incubated startups through PDEU IIC.
                    Start your application today!
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                    const Icon = service.icon
                    return (
                        <div
                            key={index}
                            className="bg-background-light rounded-lg shadow-md overflow-hidden relative group hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-6">
                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-48 h-48 transform translate-x-1/3 -translate-y-1/3 opacity-5">
                                    <div className={`w-full h-full ${service.iconColor} rounded-full`}></div>
                                </div>

                                {/* Icon */}
                                <div
                                    className={`${service.bgColor} ${service.iconColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                                >
                                    <Icon className="w-6 h-6" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-secondary mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-secondary leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    )
                })}

            </div>

            <div className="w-full sm:w-auto flex items-center justify-center my-10">
                <a
                    className="inline-block w-full sm:w-auto rounded border-2 border-secondary px-6 py-3 text-center text-sm font-medium text-secondary transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary active:text-secondary"
                    href="/"
                >
                    Read More
                </a>
            </div>


        </div>
    )
}

export default CardSection

