import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team = () => {

    const teamMembers = [
        {
            name: "Melissa Tatcher",
            role: "Marketing Expert",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
            socials: {
                facebook: "/comingsoon",
                twitter: "/comingsoon",
                instagram: "/comingsoon"
            }
        },
        {
            name: "Stuard Ferrel",
            role: "Digital Marketer",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
            socials: {
                facebook: "/comingsoon",
                twitter: "/comingsoon",
                instagram: "/comingsoon"
            }
        },
        {
            name: "Eva Hudson",
            role: "Creative Designer",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
            socials: {
                facebook: "/comingsoon",
                twitter: "/comingsoon",
                instagram: "/comingsoon"
            }
        },
        {
            name: "Jackie Sanders",
            role: "SEO Expert",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
            socials: {
                facebook: "/comingsoon",
                twitter: "/comingsoon",
                instagram: "/comingsoon"
            }
        }
    ];

    return (
        <section className="py-24 bg-background-light   ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-primary font-semibold mb-2">
                        Our Team Members
                    </p>
                    <h2 className="text-4xl font-bold text-secondary mb-4">
                        Our Creative Team
                    </h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        There are many variations of passages of Lorem Ipsum
                        available but the majority have suffered alteration in some form.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div className="bg-primary-light p-6 rounded-xl shadow-sm text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-primary-light" key={index}>
                            <div className="relative w-32 h-32 mx-auto mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-secondary mb-1">{member.name}</h3>
                            <p className="text-secondary mb-4">{member.role}</p>
                            <div className="flex justify-center gap-4 mt-4">
                                {member.socials.facebook && (
                                    <Link to={member.socials.facebook} className="text-secondary hover:text-primary">
                                        <Facebook className="w-5 h-5" />
                                    </Link>
                                )}
                                {member.socials.twitter && (
                                    <Link to={member.socials.twitter} className="text-secondary hover:text-primary">
                                        <Twitter className="w-5 h-5" />
                                    </Link>
                                )}
                                {member.socials.instagram && (
                                    <Link to={member.socials.instagram} className="text-secondary hover:text-primary">
                                        <Instagram className="w-5 h-5" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;