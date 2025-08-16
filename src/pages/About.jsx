import Team from "../components/team/Team.jsx";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | HealthEase Membership Pvt. Ltd.</title>
        <meta name="description" content="Learn more about HealthEase Membership Pvt. Ltd. and our commitment to providing affordable healthcare solutions." />
      </Helmet>
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">About Health+ Member</h1>
          <p className="opacity-80 leading-relaxed">
            Health+ Member began with a commitment to support families who struggle with rising medical costs.
            Our membership card gives you access to up to 30% discounts at partnered stores and companies,
            and a helpline that guides you to hospitals during emergencies. We focus on speed, transparency,
            and trust—so that you can care for your loved ones without worrying about heavy bills.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 rounded-2xl bg-gray-50">
              <div className="text-xl font-semibold mb-2">Where We Started</div>
              <p className="text-sm opacity-80">Launched in Lucknow, built ground-up with local partners and health advisors.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50">
              <div className="text-xl font-semibold mb-2">Why We Exist</div>
              <p className="text-sm opacity-80">To reduce medical expenses and provide support when it matters most.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50">
              <div className="text-xl font-semibold mb-2">How We Work</div>
              <p className="text-sm opacity-80">Simple membership, strong partner network, and a human support team.</p>
            </div>
          </div>
        </div>
      </section>

      <Team />
    </>
  );
}
