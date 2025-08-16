import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Anjali Verma",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300",
    text: "I saved ~28% on monthly medicines. The emergency call service also helped my father once. Highly recommend!",
  },
  {
    name: "Rohit Sharma",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300",
    text: "Quick card delivery and very polite support team. Discounts worked at my local pharmacy.",
  },
  {
    name: "Farhana Khan",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300",
    text: "The partner network keeps growing. Good value for a small yearly fee.",
  },
];

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % reviews.length), 4000);
    return () => clearInterval(id);
  }, []);

  const r = reviews[index];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What Members Say</h2>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-6 text-center"
            >
              <div className="flex flex-col items-center">
                <img src={r.avatar} alt={r.name} className="w-20 h-20 rounded-full object-cover mb-3"/>
                <div className="text-sm mb-1 text-green-600 font-semibold">Verified Member ✓</div>
                <p className="text-lg mb-3">“{r.text}”</p>
                <div className="font-semibold">{r.name}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full ${i === index ? "bg-primary" : "bg-slate-300"}`}
                aria-label={`Go to slide ${i+1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
