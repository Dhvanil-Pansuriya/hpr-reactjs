import { Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Meet AutoManage, the best AI management tools",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "Dec 22, 2023",
    image: "https://kzmo9zvp89wvlyt20503.lite.vusercontent.net/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "How to earn more money as a wellness coach",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "Mar 15, 2023",
    image: "https://kzmo9zvp89wvlyt20503.lite.vusercontent.net/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "The no-fuss guide to upselling and cross selling",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "Jan 05, 2023",
    image: "https://kzmo9zvp89wvlyt20503.lite.vusercontent.net/placeholder.svg?height=400&width=600",
  },
];

export default function BlogSection() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-primary font-medium mb-4">Our Blogs</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Recent News</h2>
        <p className="text-secondary max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-background-light rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
          >
            <div className="relative h-48 md:h-64 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full  text-secondary text-sm mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <time>{post.date}</time>
              </div>
              <h3 className="text-xl font-bold mb-2 line-clamp-2 text-primary">
                {post.title}
              </h3>
              <p className="text-secondary line-clamp-2">{post.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
