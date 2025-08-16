import SocialIcons from "./social/SocialIcons.jsx";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-slate-200 mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img title="HealthEase Membership Pvt. Ltd. Official Logo"
              src="/logo.png"
              alt="healthease-membership-logo.png"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold text-primary">HEALTHEASE <span className="text-green-500 font-medium">MEMBERSHIP</span></span>
          </div>
          <p className="text-sm opacity-80">
            Affordable membership for families: up to 30% discounts at partner medical stores & companies, plus emergency hospital assistance.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
            <li><Link to="/membership" className="hover:text-blue-500">Membership</Link></li>
            <li><Link to="/careers" className="hover:text-blue-500">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📞 <a className="hover:text-blue-500" href="tel:+919999999999">+91 99999 99999</a></li>
            <li>✉️ <a className="hover:text-blue-500" href="mailto:healthease@gmail.com">healthease@gmail.com</a></li>
            <li>📍 Lucknow, Uttar Pradesh</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Follow</h4>
          <SocialIcons size={26} />
        </div>
      </div>
      <div className="border-t border-slate-700 py-4 text-center text-xs opacity-75">
        © {new Date().getFullYear()} Healthease Membership. All rights reserved.
      </div>
    </footer>
  );
}
