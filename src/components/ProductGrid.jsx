import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Marrengula Pro X15 Laptop',
    price: 1599,
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 2,
    name: 'RTX 4080 Graphics Card',
    price: 1199,
    img: 'https://images.unsplash.com/photo-1587202372775-98927b5953f5?q=80&w=1200&auto=format&fit=crop',
    badge: 'Hot',
  },
  {
    id: 3,
    name: 'UltraSharp 34" Monitor',
    price: 799,
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Mechanical Keyboard RGB',
    price: 149,
    img: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Wireless Noise-Cancel Headset',
    price: 249,
    img: 'https://images.unsplash.com/photo-1518445155910-06d4d3e9c02b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'NVMe SSD 2TB Gen4',
    price: 179,
    img: 'https://images.unsplash.com/photo-1587202372616-b43abea06cdf?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ProductGrid() {
  return (
    <section id="featured" className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Products</h2>
            <p className="text-zinc-400">Curated picks from Marrengula IT</p>
          </div>
          <a href="#" className="text-red-500 hover:text-red-400 font-medium">View all</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="group relative rounded-xl overflow-hidden border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950"
            >
              {p.badge && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase px-2 py-1">
                  {p.badge}
                </span>
              )}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium leading-snug line-clamp-2 min-h-[2.5rem]">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-red-500 font-semibold">${p.price}</span>
                  <button className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs font-semibold text-white hover:border-red-600 hover:bg-red-600/10 transition-colors">Add to cart</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
