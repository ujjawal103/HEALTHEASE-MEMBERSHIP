import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CTASticky from "./cta/CTASticky.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main className="pt-[76px]">{children}</main>
      <Footer />
      <CTASticky />
    </div>
  );
}
