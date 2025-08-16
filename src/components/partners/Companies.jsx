import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const logos = [
  "https://images.unsplash.com/photo-1601944179060-1e6e6f3b5d03?q=80&w=600",
  "https://images.unsplash.com/photo-1529612700005-e35377bf1415?q=80&w=600",
  "https://images.unsplash.com/photo-1671719115276-373c2c26d1f1?q=80&w=600",
  "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=600",
  "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=600",
  "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600",
];

export default function Companies() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelectorAll("img"),
      { opacity: 0, y: 16 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 80%" }
      }
    );
  }, []);

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Trusted by Partners & Stores</h2>
        <p className="text-center max-w-2xl mx-auto opacity-80 mb-10">
          Some of the companies and medical stores offering member discounts.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="Partner" className="w-full h-16 object-contain grayscale hover:grayscale-0 transition"/>
          ))}
        </div>
      </div>
    </section>
  );
}
