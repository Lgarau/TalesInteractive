import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Team from "./Team"

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Team />
    </div>
  );
}

export default HomePage;