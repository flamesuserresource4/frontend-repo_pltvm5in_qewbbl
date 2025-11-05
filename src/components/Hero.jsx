import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[86vh] bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <span className="inline-block text-xs tracking-widest uppercase text-red-500 bg-red-500/10 border border-red-600/30 rounded-full px-3 py-1 mb-4">Marrengula IT</span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Technology that
            <span className="text-red-500"> empowers </span>
            your growth.
          </h1>
          <p className="mt-4 text-zinc-300 max-w-xl">
            Cutting-edge electronics and enterprise-grade IT services for ambitious teams. Shop premium gear or scale with our managed IT, cloud and security solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#featured" className="inline-flex items-center justify-center rounded-md bg-red-600 hover:bg-red-500 px-5 py-3 text-sm font-semibold text-white transition-colors">Shop Featured</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md border border-zinc-700 hover:border-zinc-600 px-5 py-3 text-sm font-semibold text-white/90 transition-colors">Explore Services</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden md:block"
        >
          <div className="rounded-2xl border border-zinc-800/80 bg-black/50 backdrop-blur p-5">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-red-600 to-red-400 shadow-[0_0_40px_0_rgba(255,22,22,0.35)]" />
              <div>
                <p className="text-zinc-400 text-sm">Meet our avatar</p>
                <h3 className="text-white font-semibold">M-01: Marrengula Tech Mascot</h3>
                <p className="text-zinc-400 text-sm">Your guide to smarter tech decisions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
