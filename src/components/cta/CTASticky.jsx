export default function CTASticky() {
  return (
    <div className="fixed md:hidden bottom-4 inset-x-0 px-4 z-50">
      <div className="max-w-md mx-auto flex gap-3">
        <a href="tel:+919999999999" className="flex-1 bg-primary text-white font-semibold py-3 rounded-full text-center shadow-lg">
          Call Now
        </a>
        <a href="https://wa.me/919999999999" target="_blank" className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-full text-center shadow-lg">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
