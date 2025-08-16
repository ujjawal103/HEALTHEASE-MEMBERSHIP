import { motion } from "framer-motion";

const team = [
  {
    name: "Ritika Singh",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600",
    bio: "Social impact leader with 8+ years in healthcare outreach and operations.",
  },
  {
    name: "Aman Verma",
    role: "Head of Partnerships",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600",
    bio: "Ex-corporate BD lead. Built a strong network of pharmacies & hospitals.",
  },
  {
    name: "Dr. Neha Kapoor (MBBS)",
    role: "Medical Advisor",
    img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=600",
    bio: "Public-health advocate guiding our medical protocols & emergency flow.",
  },
  {
    name: "Sanjay Patel",
    role: "Operations Lead",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600",
    bio: "Ensures fast card delivery, member support and field coordination.",
  },
];

export default function Team() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meet the Team</h2>
        <p className="text-center max-w-2xl mx-auto opacity-80 mb-10">
          We started with a simple mission: make essential healthcare more affordable and accessible for every family.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={m.img} alt={m.name} className="w-full h-48 object-cover"/>
              <div className="p-5">
                <div className="font-semibold">{m.name}</div>
                <div className="text-sm text-primary mb-2">{m.role}</div>
                <p className="text-sm opacity-80">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
