const blogs = [
  {
    title: '10 Tips for Designing Your Dream Home',
    excerpt: 'Expert advice on creating a space that reflects your personality and lifestyle while maximizing functionality.',
    date: 'March 15, 2024',
    category: 'Residential',
    readTime: '5 min read',
  },
  {
    title: 'Sustainable Architecture: Building for the Future',
    excerpt: 'Explore how eco-friendly design principles are transforming modern architecture and creating healthier spaces.',
    date: 'March 8, 2024',
    category: 'Architecture',
    readTime: '7 min read',
  },
  {
    title: 'Industrial Planning: Optimizing Workflow',
    excerpt: 'Key strategies for designing industrial spaces that boost productivity, safety, and operational efficiency.',
    date: 'February 28, 2024',
    category: 'Industrial',
    readTime: '6 min read',
  },
  {
    title: 'Color Psychology in Interior Design',
    excerpt: 'How colors influence mood, productivity, and well-being — and how to use them effectively in your space.',
    date: 'February 20, 2024',
    category: 'Interior',
    readTime: '4 min read',
  },
  {
    title: 'The Rise of 3D Visualization in Architecture',
    excerpt: 'How photorealistic renders and 360° walkthroughs are revolutionizing the design process.',
    date: 'February 12, 2024',
    category: 'Technology',
    readTime: '5 min read',
  },
  {
    title: 'Turnkey Projects: What to Expect',
    excerpt: 'A complete guide to turnkey project delivery — from concept to handover, everything you need to know.',
    date: 'February 5, 2024',
    category: 'Turnkey',
    readTime: '8 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-hand text-2xl text-teal-300 mb-3">Blog & Insights</div>
          <h1 className="font-serif-display text-5xl md:text-6xl font-bold mb-4">Design Stories</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Articles, tips, and inspiration from our design studio
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured */}
          <div className="mb-12 bg-stone-50 rounded-2xl overflow-hidden grid md:grid-cols-2">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt={blogs[0].title} className="w-full h-full object-cover aspect-video md:aspect-auto" />
            <div className="p-8 flex flex-col justify-center">
              <div className="text-xs text-teal-700 font-semibold uppercase tracking-wider mb-2">Featured Article</div>
              <h2 className="font-serif-display text-3xl font-bold text-stone-900 mb-3">{blogs[0].title}</h2>
              <p className="text-stone-600 mb-4">{blogs[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-stone-500">
                <span>{blogs[0].date}</span>
                <span>•</span>
                <span>{blogs[0].readTime}</span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.slice(1).map((b, i) => (
              <article
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-100 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="relative">
                  <img src={blogImages[i % blogImages.length]} alt={b.title} className="aspect-video w-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-teal-700 font-medium">
                      {b.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
                    <span>{b.date}</span>
                    <span>•</span>
                    <span>{b.readTime}</span>
                  </div>
                  <h3 className="font-serif-display text-xl font-bold text-stone-900 mb-3 group-hover:text-teal-700 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{b.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif-display text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-teal-100 mb-8 text-lg">
            Get the latest design tips, trends, and project inspiration delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing!'); }}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-lg text-stone-900 outline-none"
            />
            <button type="submit" className="bg-white text-teal-700 hover:bg-teal-50 px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

const blogImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
];
