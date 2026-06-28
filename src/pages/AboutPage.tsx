export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-hand text-2xl text-teal-300 mb-3">About Us</div>
          <h1 className="font-serif-display text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Crafting dreams into reality since 2009
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                <div className="font-serif-display text-4xl font-bold">10+</div>
                <div className="text-sm text-teal-100 mt-1">Years of excellence</div>
              </div>
            </div>
            <div>
              <div className="font-hand text-2xl text-teal-700 mb-3">Who We Are</div>
              <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                Crafting Dreams Into <span className="text-teal-600">Reality</span>
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Founded by <strong>Ar. Jigar Panchal</strong> in 2009, Pratyaksh Design is an Ahmedabad-based consulting firm specializing in Architecture Planning and Interior Designing, serving clients across Gujarat, Rajasthan and Mumbai.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                We hope you connect with our customized designs and find the perfect inspiration for your dream space. Our highly skilled team of professionals is dedicated to delivering excellence in every project.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                With a leading team of designers, we bring the cutting-edge expertise required to manage today's architectural and interior demands—seamlessly taking your project from the initial concept and presentation stages all the way through to highly detailed technical drawings.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Innovative Design', desc: 'Fresh, functional solutions' },
                  { title: 'Sustainable', desc: 'Eco-conscious architecture' },
                  { title: 'Client-Focused', desc: 'Your vision, our craft' },
                  { title: 'Turnkey Delivery', desc: 'From concept to handover' },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    </div>
                    <div><div className="font-semibold text-stone-900">{f.title}</div><div className="text-sm text-stone-500">{f.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-serif-display text-2xl font-bold text-stone-900 mb-3">Our Mission</h3>
              <p className="text-stone-600 leading-relaxed">
                To deliver innovative, sustainable, and client-centric architectural solutions that transform spaces and enrich lives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="font-serif-display text-2xl font-bold text-stone-900 mb-3">Our Vision</h3>
              <p className="text-stone-600 leading-relaxed">
                To be the most trusted design studio in Western India, known for excellence in architecture, interiors, and turnkey project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="font-hand text-2xl text-teal-700 mb-3">Our Team</div>
            <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">Meet Our Experts</h2>
          </div>
          
          {/* Founder */}
          <div className="bg-gradient-to-br from-teal-50 to-white p-8 md:p-12 rounded-2xl border border-teal-100 text-center max-w-2xl mx-auto mb-12">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4">JP</div>
            <h3 className="font-serif-display text-2xl font-bold text-stone-900">Ar. Jigar Panchal</h3>
            <p className="text-teal-700 font-medium mb-3">Founder & Principal Architect</p>
            <p className="text-stone-600 leading-relaxed">
              With over a decade of experience in architecture and interior design, Jigar has led the firm to deliver more than 114 successful projects across Western India.
            </p>
          </div>

          {/* Core Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Rahbhai Panchal', role: 'Project Manager' },
              { name: 'Pravinbhai Poaraniya', role: 'Project Co-ordinator' },
              { name: 'Darshit Gajjar', role: 'Project Designer' },
              { name: 'Kaushal Mistry', role: 'Structure Designer' },
            ].map((member, i) => (
              <div key={i} className="bg-stone-50 p-6 rounded-xl border border-stone-100 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-xl mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="font-semibold text-stone-900">{member.name}</h4>
                <p className="text-teal-700 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
