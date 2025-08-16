import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Careers from "./pages/Careers.jsx";
import Membership from "./pages/Membership.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* <div>APPPPPPPPP</div> */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/membership" element={<Membership/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
    // <div className="text-primary">
    //   <h1 className="text-3xl font-bold">Welcome to the App</h1>
    //   <p className="text-secondary">This is a sample application using React and Tailwind CSS.</p>
    // </div>
  );
}
