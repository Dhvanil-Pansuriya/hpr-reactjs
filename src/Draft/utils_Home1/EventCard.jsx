import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';


const events = [
  {
    date: 'January 16, 2024',
    title: 'National Startup Day',
    description: 'PDEU and PDEU Innovation and Incubation Centre(PDEU IIC) jointly hosted National Startup Day at PDEU',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    date: 'March 4, 2024',
    title: 'IIT Bhubaneswar Professors Visit to PDEU & PDEU IIC',
    description: 'The visit was aimed at fostering collaborative ties between Pandit Deendayal Energy University (PDEU), PDEU Innovation and Incubation Centre (PDEU IIC) and IIT Bhubaneswar.',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    date: 'March 13, 2024',
    title: "International Women's Day with Women Cell PDEU",
    description: 'The event commenced with a captivating Indian Dance Performance presented by students from the management department, serving as a vibrant introduction to the gathering.',
    imageUrl: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    date: 'April 9, 2024',
    title: 'IDEATHON',
    description: 'Ideathon 2024 was organised to provide a dynamic platform to participants for fostering innovation and creativity.',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    date: 'June 29, 2024',
    title: 'Innovators Summit 1.0',
    description: "The Innovator's Summit 1.0 brought together startups at PDEU IIC, creating a platform for founders to connect",
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    date: 'August 9, 2024',
    title: 'Techstars Startup Weekend Gandhinagar 2024',
    description: 'Techstars Startup Weekend is a dynamic three-day accelerator program where innovators, developers, and entrepreneurs come together.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=600',
  },
];

const EventCard = () => {
  return (
    <>
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4">Latest Events</h1>
            <p className="text-lg text-secondary">Discover our recent activities and upcoming events</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div className="bg-background-light rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl" key={index}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{event.title}</h3>
                  <p className="text-secondary mb-4 line-clamp-2">{event.description}</p>
                  <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
                    Read More <ArrowRight size={16} />
                  </button>
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