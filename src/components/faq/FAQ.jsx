import { useState } from "react";

const items = [
  { q: "What is the yearly fee?", a: "Typically ₹200–₹300 per member." },
  { q: "How fast is delivery?", a: "Cards are usually delivered within 1–2 days after verification." },
  { q: "Which stores accept it?", a: "Partner medical stores and companies in our network. See the Partners section." },
  { q: "Emergency assistance?", a: "Call our helpline and we’ll guide/assist you to the nearest hospital or ambulance." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Important Questions</h2>
        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={i} className="border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left px-5 py-4 font-semibold flex justify-between items-center"
              >
                {it.q}
                <span>{open === i ? "–" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm opacity-80">{it.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
