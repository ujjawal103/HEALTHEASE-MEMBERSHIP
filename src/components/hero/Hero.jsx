import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-[90vh] md:h-[92vh] relative flex items-center justify-center text-center"
    >
      <img
        src="/heroSection.jpg"
        alt="healthease-membership"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl px-4 text-white"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Save up to <span className="text-secondary">30%</span> with your Membership Card
        </h1>
        <p className="mt-4 text-base md:text-lg opacity-90">
          Discounts at partnered medical stores & companies. 24/7 emergency hospital assistance. Fast delivery within 1–2 days.
        </p>
        <div className="mt-8 flex gap-3 justify-center">
          <a href="tel:+917390958229" className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-blue-700">
            📞 Call Now
          </a>
          <a href="/membership" className="px-6 py-3 rounded-full bg-white text-dark font-semibold hover:bg-slate-100">
            Get Membership
          </a>
        </div>
      </motion.div>
    </section>
  );
}
