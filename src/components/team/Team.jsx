import { motion } from "framer-motion";
import { address } from "framer-motion/client";

const team = [
  {
    name: "Yogesh Sharma",
    role: "Founder & CEO",
    img: "Yogesh-Sharma.jpeg",
    bio: "Visionary leader with a passion for transforming healthcare delivery.",
    address : "SULTANPUR"
  },
  {
    name: "Vaibhav Sharma",
    role: "Co-Founder",
    img: "Vaibhav-Sharma.jpeg",
    bio: "Entrepreneur with a passion for healthcare innovation and technology.",
    address : "SULTANPUR"
  },
  {
    name: "Sanjay Upadhyay",
    role: "Director & Business advisor",
    img: "Sanjay-Upadhyay.jpeg",
    bio: "Transforming healthcare delivery through innovative solutions.",
    address : "SULTANPUR"
  },
  {
    name: "Aalok Kumar Tiwari",
    role: "HR Head",
    img: "Aalok-Kumar-Tiwari.jpeg",
    bio: "Dedicated to building strong teams and fostering a positive workplace culture.",
    address: "SULTANPUR"
  },
  {
    name: "Prateek tivari",
    role: "Director",
    img: "Prateektivari.jpeg",
    bio: "Committed to driving strategic growth and delivering excellence through effective leadership.",
    address: "SULTANPUR"
  },
];

export default function Team() {
  return (
    <section className="py-16 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meet the Team</h2>
        <p className="text-center max-w-2xl mx-auto opacity-80 mb-10">
          We started with a simple mission: make essential healthcare more affordable and accessible for every family.
        </p>

        <div className="grid md:grid-cols-3 gap-6 ">
          {team.map((m, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="h-[400px] w-full"><img src={m.img} alt={m.name} className="w-full h-[400px] object-cover position-center"/></div>
              <div className="p-5">
                <div className="font-semibold">{m.name}</div>
                <div className="text-sm text-primary mb-2">{m.role}</div>
                <p className="text-sm opacity-80">{m.bio}</p>
                <h5>{m.address}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
