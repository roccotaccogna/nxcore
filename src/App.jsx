import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBanner from "./components/TrustBanner";
import Solutions from "./components/Solutions";
import WhyUs from "./components/WhyUs";
import Expertise from "./components/Expertise";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBanner />
      <Solutions />
      <WhyUs />
      <Expertise />
      <Team />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
