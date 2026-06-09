import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Trainers from "./components/Trainers";
import Plans from "./components/Plans";
import BMI from "./components/BMI";
import Booking from "./components/Booking";
import CustomerCare from "./components/CustomerCare";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <About />
        <Gallery />
        <Trainers />
        <Plans />
        <BMI />
        <Booking />
        <CustomerCare />
      </main>
      <Footer />
    </>
  );
}
