import Hero from "../components/hero/Hero.jsx";
import MembershipInfo from "../components/membership/MembershipInfo.jsx";
import HowItWorks from "../components/process/HowItWorks.jsx";
import Companies from "../components/partners/Companies.jsx";
import ReviewsCarousel from "../components/reviews/ReviewsCarousel.jsx";
import FAQ from "../components/faq/FAQ.jsx";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>HealthEase Membership</title>
        <meta name="description" content="Join HealthEase Membership to access exclusive health benefits, save on medical expenses, and enjoy a seamless healthcare experience. Sign up today and get your membership card in 1–2 days!" />
       </Helmet>
      <Hero />
      <MembershipInfo />
      <HowItWorks />
      {/* <Companies /> */}
      <ReviewsCarousel />
      <FAQ />
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Ready to start saving?</h3>
          <p className="opacity-80 mt-2">Call us now and get your membership card in 1–2 days.</p>
          <div className="mt-6">
            <a href="tel:+917390958229" className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-blue-700">📞 Call Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
