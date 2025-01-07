import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const events = [
  {
    date: 'January 16, 2024',
    title: 'Lorem ipsum dolor sit amet ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.',
    imageUrl: 'https://placehold.co/400x250',
  },
  {
    date: 'March 4, 2024',
    title: 'Lorem ipsum dolor sit amet ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla..',
    imageUrl: 'https://placehold.co/400x250',
  },
  {
    date: 'March 13, 2024',
    title: "Lorem ipsum dolor sit amet ",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.',
    imageUrl: 'https://placehold.co/400x250',
  },
  {
    date: 'April 9, 2024',
    title: 'Lorem ipsum dolor sit amet ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.',
    imageUrl: 'https://placehold.co/400x250',
  },
  {
    date: 'June 29, 2024',
    title: 'Lorem ipsum dolor sit amet ',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.",
    imageUrl: 'https://placehold.co/400x250',
  },
  {
    date: 'August 9, 2024',
    title: 'Lorem ipsum dolor sit amet  ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.',
    imageUrl: 'https://placehold.co/400x250',
  },
];

const EventCard = () => {
  return (
    <>
      <div className="min-h-screen   px-4 sm:px-6 lg:px-8 my-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4 font-heading">Latest Events</h1>
            <p className="text-lg text-secondary font-description">Discover our recent activities and upcoming events</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div className="bg-background-light rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105" key={index}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-primary">
                    <Calendar size={16} />
                    <span className="text-sm font-medium font-description">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 font-heading">{event.title}</h3>
                  <p className="text-secondary mb-4 line-clamp-2 font-description">{event.description}</p>
                  <Link to='/comingsoon'
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 font-button">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



    </>
  );
}



export default EventCard;