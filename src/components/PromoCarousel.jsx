import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'Gaming Week — Up to 40% Off',
    subtitle: 'Top GPUs, high-refresh monitors and pro peripherals',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    cta: 'Shop Gaming',
  },
  {
    id: 2,
    title: 'Business Essentials',
    subtitle: 'Reliable laptops and enterprise services for teams',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
    cta: 'View Laptops',
  },
  {
    id: 3,
    title: 'Secure Your Stack',
    subtitle: 'Managed IT, Cloud & Cybersecurity by Marrengula IT',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop',
    cta: 'Explore Services',
  },
];

export default function PromoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-black">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="relative h-[320px] md:h-[420px] overflow-hidden rounded-2xl border border-zinc-800">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[index].id}
              src={slides[index].image}
              alt={slides[index].title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
          <div className="relative h-full flex flex-col justify-end md:justify-center p-6 md:p-12 max-w-xl">
            <motion.h3
              key={`title-${slides[index].id}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-white text-2xl md:text-4xl font-extrabold"
            >
              {slides[index].title}
            </motion.h3>
            <p className="text-zinc-200 mt-2 md:mt-3">{slides[index].subtitle}</p>
            <a
              href="#featured"
              className="inline-flex w-fit mt-4 rounded-md bg-red-600 hover:bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
            >
              {slides[index].cta}
            </a>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-6 rounded-full transition-all ${i === index ? 'bg-red-500 w-8' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
