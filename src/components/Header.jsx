import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition ${
        scrolled ? "bg-white/90 backdrop-blur shadow" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            title="HealthEase Membership Pvt. Ltd. Official Logo"
            src="/logo.png"
            alt="HealthEase Membership Pvt. Ltd. official logo representing health, wellness, and active lifestyle"
            className="w-10 h-14 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-primary">HEALTHEASE <span className="text-green-500 font-medium">MEMBERSHIP</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[15px]">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/about" className="hover:text-primary">About Us</Link>
          <Link to="/membership" className="hover:text-primary">Membership</Link>
          <Link to="/careers" className="hover:text-primary">Careers</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
          <a href="tel:+917390958229" className="px-4 py-2 rounded-full bg-primary text-white font-semibold hover:bg-blue-700">
            Call Now
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded border"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 flex flex-col gap-3 text-[16px]">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/membership">Membership</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
            <a href="tel:+917390958229" className="mt-2 px-4 py-2 rounded-full bg-primary text-white text-center font-semibold">
              Call Now
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
