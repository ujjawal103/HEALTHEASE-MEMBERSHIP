import { motion } from "framer-motion";

const card = (title, text, img) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 24 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-2xl shadow-lg p-6"
  >
    <img src={img} alt={title} className="w-full h-70 object-cover rounded-xl mb-4"/>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm opacity-80">{text}</p>
  </motion.div>
);

export default function MembershipInfo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Our Membership?</h2>
        <p className="text-center max-w-2xl mx-auto opacity-80 mb-10">
          Affordable yearly card for families: instant savings, trusted partners, and help when you need it the most.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {card(
            "Up to 30% Discounts",
            "Save on medicines & partner services across our verified network.",
            "discount30.png"
          )}
          {card(
            "Emergency Assistance",
            "One call and our team helps you reach the nearest hospital or ambulance.",
            "emergencyAssistence.png"
          )}
          {card(
            "Fast Delivery (1–2 days)",
            "Simple process — share your details and get your card quickly.",
            "fastDeliver.png"
          )}
        </div>
      </div>
    </section>
  );
}
