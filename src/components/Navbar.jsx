import { useState } from 'react';
import { Menu, X, ShoppingCart, Search, Laptop, Cpu, Headphones, Server, Home } from 'lucide-react';

const NavItem = ({ label, children }) => (
  <div className="group relative">
    <button className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors">{label}</button>
    {children}
  </div>
);

const MegaMenu = ({ sections }) => (
  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full w-screen bg-zinc-900/95 backdrop-blur border-t border-zinc-800 shadow-xl">
    <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
      {sections.map((section) => (
        <div key={section.title}>
          <div className="flex items-center gap-2 text-white mb-3">
            {section.icon}
            <h4 className="font-semibold tracking-wide">{section.title}</h4>
          </div>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const sections = [
    {
      title: 'Laptops & PCs',
      icon: <Laptop size={16} className="text-red-500" />,
      links: ['Gaming Laptops', 'Ultrabooks', 'Desktops', 'Workstations'],
    },
    {
      title: 'Components',
      icon: <Cpu size={16} className="text-red-500" />,
      links: ['GPUs', 'CPUs', 'Motherboards', 'Memory'],
    },
    {
      title: 'Peripherals',
      icon: <Headphones size={16} className="text-red-500" />,
      links: ['Monitors', 'Keyboards', 'Headsets', 'Mice'],
    },
    {
      title: 'IT Services',
      icon: <Server size={16} className="text-red-500" />,
      links: ['Managed IT', 'Cloud & DevOps', 'Cybersecurity', 'Consulting'],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
              <Home size={16} className="text-white" />
            </div>
            <span className="font-bold tracking-wider text-white">Marrengula IT</span>
          </a>

          <div className="hidden md:flex items-center gap-4">
            <NavItem label="Shop">
              <MegaMenu sections={sections} />
            </NavItem>
            <NavItem label="Services">
              <MegaMenu sections={sections.slice(3)} />
            </NavItem>
            <a href="#deals" className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white">Deals</a>
            <a href="#contact" className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <input
                className="w-72 rounded-md bg-zinc-900 text-sm text-white placeholder:text-zinc-400 px-3 py-2 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Search products, brands, services"
              />
              <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            </div>
            <button className="relative p-2 rounded-md border border-zinc-800 hover:border-zinc-700 transition-colors">
              <ShoppingCart size={18} className="text-white" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-red-600 text-white rounded-full px-1">2</span>
            </button>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-zinc-800 py-3 space-y-2">
            <a href="#" className="block text-zinc-200">Shop</a>
            <a href="#" className="block text-zinc-200">Services</a>
            <a href="#deals" className="block text-zinc-200">Deals</a>
            <a href="#contact" className="block text-zinc-200">Contact</a>
            <div className="pt-2">
              <input
                className="w-full rounded-md bg-zinc-900 text-sm text-white placeholder:text-zinc-400 px-3 py-2 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Search products, brands, services"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
