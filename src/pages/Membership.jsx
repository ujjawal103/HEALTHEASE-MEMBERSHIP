import { Helmet } from "react-helmet";

export default function Membership() {
  return (
    <>
      <Helmet>
        <title>Membership | HealthEase Membership Pvt. Ltd.</title>
        <meta
          name="description"
          content="Discover the benefits of HealthEase Membership Pvt. Ltd. and how it can help you save on healthcare costs."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img
            className="w-full rounded-2xl shadow-lg"
            src="membership.png"
            alt="Membership Card"
          />
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Membership Benefits
            </h1>
            <p className="opacity-80 mb-6 text-lg">
              Join <span className="font-semibold">HealthEase Membership</span>{" "}
              and enjoy exclusive healthcare savings & support services designed
              for you and your family.
            </p>

            <ul className="space-y-3 text-base">
              <li>✅ Up to 30% savings on medicines & healthcare services</li>
              <li>✅ 24/7 emergency hospital assistance & home drop service</li>
              <li>✅ Membership card delivered within 1–2 days</li>
              <li>✅ Simple onboarding via phone — hassle free</li>
              <li>✅ Special concessions at partner medical companies</li>
              <li>✅ Priority access to healthcare guidance & support</li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a
                href="tel:+917390958229"
                className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow hover:scale-105 transition"
              >
                📞 Call Now
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-full bg-slate-100 text-dark font-semibold shadow hover:scale-105 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
            <div className="text-xl font-semibold mb-2">Who It’s For</div>
            <p className="text-sm opacity-80">
              Families, students, senior citizens — anyone who buys medicines
              regularly and wants peace of mind.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
            <div className="text-xl font-semibold mb-2">What You Need</div>
            <p className="text-sm opacity-80">
              Just basic details for verification. Our team takes care of the
              rest.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
            <div className="text-xl font-semibold mb-2">How Renewal Works</div>
            <p className="text-sm opacity-80">
              Annual renewal reminder via call/WhatsApp so you never miss out on
              benefits.
            </p>
          </div>
        </div>
      </section>

      {/* EXTRA BENEFITS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose HealthEase Membership?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Save more with exclusive discounts at partner pharmacies",
              "Emergency support & priority hospital assistance",
              "Convenient & fast card delivery",
              "Annual membership renewal reminders",
              "Affordable healthcare solutions for families",
              "Trusted by students, parents & senior citizens",
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-50 border hover:shadow-lg transition"
              >
                <span className="text-2xl">🌟</span>
                <p className="mt-3 text-sm opacity-80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
