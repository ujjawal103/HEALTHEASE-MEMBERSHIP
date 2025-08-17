import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      title: "Call Us",
      text: "Tap the call button and share your basic details.",
      img: "callUs.png",
    },
    {
      title: "Verification",
      text: "We verify and create your membership record.",
      img: "verification.png",
    },
    {
      title: "Get Your Card",
      text: "Receive your card within 1–2 days and start saving instantly.",
      img: "getCard.png",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How to Claim & Start Using Benefits</h2>
        <p className="text-center max-w-2xl mx-auto opacity-80 mb-10">
          Three simple steps — no long forms or hassle.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={s.img} alt={s.title} className="w-full h-70 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm opacity-80">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
