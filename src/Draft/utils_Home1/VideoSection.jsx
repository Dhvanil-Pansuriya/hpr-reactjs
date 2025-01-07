import React, { useState } from 'react';

const VideoSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      id: 1,
      // Convert watch URL to embed URL
      url: "https://www.youtube.com/embed/HLEtAASiuQs",
      title: "PDEU IIC: Where ideas come to life"
    },
    {
      id: 2,
      // Convert watch URL to embed URL
      url: "https://www.youtube.com/embed/uClYeKJjmC0",
      title: "PDEU IIC: Where ideas come to life"
    },
    {
      id: 3,
      // Convert watch URL to embed URL
      url: "https://www.youtube.com/embed/NgyVCtYkltY",
      title: "PDEU IIC: Where ideas come to life"
    }
  ];

  const getEmbedUrl = () => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };


  return (
    <section className="py-16 px-4 relative bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -left-8 -top-8 w-24 h-24 bg-background bg-opacity-50"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #000000 0, #f0f0f0 1px, transparent 0, transparent 50%)',
              backgroundSize: '10px 10px'
            }} />
          <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-background bg-opacity-50"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #f0f0f0 0, #000000 1px, transparent 0, transparent 50%)',
              backgroundSize: '10px 10px'
            }} />

          {/* Quote mark */}
          <div className="absolute -left-16 top-0 text-8xl text-primary font-serif">"</div>

          {/* Video container */}
          <div className=" rounded-lg border-2 border-primary-light p-4">
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src={videos[currentVideo].url}
                title={videos[currentVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: videos.length }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentVideo ? 'bg-secondary w-6' : 'bg-primary'
                }`}
              onClick={() => setCurrentVideo(index)}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;