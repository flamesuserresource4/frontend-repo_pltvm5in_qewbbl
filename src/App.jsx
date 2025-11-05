import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoCarousel from './components/PromoCarousel';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <PromoCarousel />
        <ProductGrid />
        <section id="services" className="bg-gradient-to-b from-black to-zinc-950 border-t border-zinc-900">
          <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold">IT Services</h2>
              <p className="text-zinc-400 mt-2">Enterprise-grade support tailored for growing businesses.</p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              {[{
                title: 'Managed IT',
                desc: 'Proactive monitoring, maintenance and end-user support.',
              },{
                title: 'Cloud & DevOps',
                desc: 'Design, migrate and operate on modern cloud platforms.',
              },{
                title: 'Cybersecurity',
                desc: 'Assessments, hardening and incident response readiness.',
              },{
                title: 'Consulting',
                desc: 'Solution architecture and technology strategy.',
              }].map((s) => (
                <div key={s.title} className="rounded-xl border border-zinc-800 p-6 bg-zinc-950/50 hover:border-red-600/60 transition-colors">
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="text-zinc-400 text-sm mt-2">{s.desc}</p>
                  <a href="#contact" className="inline-block mt-4 text-red-500 hover:text-red-400 font-medium text-sm">Learn more →</a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="deals" className="bg-black border-t border-zinc-900">
          <div className="mx-auto max-w-7xl px-4 py-14">
            <div className="rounded-2xl border border-zinc-800 p-8 bg-gradient-to-r from-zinc-950 to-black">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">Subscribe and get exclusive Marrengula IT deals</h3>
                  <p className="text-zinc-400">Weekly highlights, new drops and pro tips from our mascot M-01.</p>
                </div>
                <form className="flex w-full md:w-auto">
                  <input type="email" required placeholder="Your email address" className="w-full md:w-80 rounded-l-md bg-zinc-900 text-sm text-white placeholder:text-zinc-400 px-3 py-3 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-600" />
                  <button className="rounded-r-md bg-red-600 hover:bg-red-500 px-5 text-sm font-semibold">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="border-t border-zinc-900 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-zinc-300">
          <div>
            <h4 className="text-white font-semibold mb-2">Marrengula IT</h4>
            <p className="text-sm">Electronics that perform. Services that scale.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Shop</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#featured" className="hover:text-white">Featured</a></li>
              <li><a href="#deals" className="hover:text-white">Deals</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-sm">
              <li>Email: hello@marrengulait.com</li>
              <li>Phone: +258 84 000 0000</li>
              <li>Maputo, Mozambique</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow</h4>
            <p className="text-sm">#MarrengulaIT #EmpowerWithTech</p>
          </div>
        </div>
        <div className="text-center text-xs text-zinc-500 pb-8">© {new Date().getFullYear()} Marrengula IT. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
