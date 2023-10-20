import About from "./components/About";
import Event from "./components/Event";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="story">
        <Story />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="event">
        <Event />
      </section>
      <section id="rsvp">
        <Rsvp />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
