import { Helmet } from "react-helmet";


export default function Membership() {
  
  return (
    <>
      <Helmet>
        <title>Membership | HealthEase Membership Pvt. Ltd.</title>
        <meta name="description" content="Discover the benefits of HealthEase Membership Pvt. Ltd. and how it can help you save on healthcare costs." />
      </Helmet>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img
            className="w-full rounded-2xl shadow-lg"
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200"
            alt="Membership Card"
          />
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Membership Benefits</h1>
            <p className="opacity-80 mb-6">
              Get up to 30% discounts at partner medical stores & companies. In emergencies, call us once —
              we’ll help you reach hospitals and get home safely.
            </p>
            <ul className="space-y-3">
              <li>✅ Up to 30% savings on medicines/services</li>
              <li>✅ 24/7 emergency hospital assistance</li>
              <li>✅ Card delivered within 1–2 days</li>
              <li>✅ Simple phone-based onboarding</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="tel:+919999999999" className="px-6 py-3 rounded-full bg-primary text-white font-semibold">📞 Call Now</a>
              <a href="/contact" className="px-6 py-3 rounded-full bg-slate-100 text-dark font-semibold">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white shadow">
            <div className="text-xl font-semibold mb-2">Who It’s For</div>
            <p className="text-sm opacity-80">Families, students, senior citizens — anyone who buys medicines regularly and wants peace of mind.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow">
            <div className="text-xl font-semibold mb-2">What You Need</div>
            <p className="text-sm opacity-80">Basic details for verification. Our team does the rest.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow">
            <div className="text-xl font-semibold mb-2">How Renewal Works</div>
            <p className="text-sm opacity-80">Annual renewal reminder via call/WhatsApp so you never miss benefits.</p>
          </div>
        </div>
      </section>
    </>
  );
}
