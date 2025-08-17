import SocialIcons from "../components/social/SocialIcons.jsx";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | HealthEase Membership Pvt. Ltd.</title>
        <meta name="description" content="Get in touch with HealthEase Membership Pvt. Ltd. for any inquiries or support." />
      </Helmet>
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
            <p className="opacity-80 mb-6">We’re here to help you get your membership and answer any questions.</p>
          <ul className="space-y-3">
            <li>📞 <a className="text-primary font-semibold" href="tel:+917390958229">+91 73909 58229</a></li>
            <li>✉️ <a className="text-primary font-semibold" href="mailto:healtheasemembershipprivatelim@gmail.com">healtheasemembershipprivatelim@gmail.com</a></li>
            <li>💬 <a className="text-primary font-semibold" href="https://wa.me/917390958229" target="_blank">WhatsApp Chat</a></li>
            <li>📍Sultanpur, Lucknow, Uttar Pradesh</li>
          </ul>

          <div className="mt-6">
            <SocialIcons size={30} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <div className="text-lg font-semibold mb-3">Quick Message (mailto)</div>
          <form action="mailto:healtheasemembershipprivatelim@gmail.com" method="post" encType="text/plain">
            <div className="grid gap-4">
              <input className="border rounded-lg px-4 py-3" name="name" placeholder="Your Name" required />
              <input className="border rounded-lg px-4 py-3" name="phone" placeholder="Phone Number" required />
              <textarea className="border rounded-lg px-4 py-3" name="message" rows="4" placeholder="Message"></textarea>
              <button className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-blue-700">
                Send Email
              </button>
            </div>
          </form>
          <div className="mt-6">
            <iframe
              title="Map"
              className="w-full h-56 rounded-xl"
              src="https://maps.google.com/maps?q=Sultanpur&t=&z=12&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  </>
  );
}
