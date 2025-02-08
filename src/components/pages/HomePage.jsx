import HeroComponent from "../unique/HeroComponent";
import HomeContentComponent from "../unique/HomeContentComponent";

export default function HomePage() {
  return (
    <div className="min-h-screen text-white">

      <HeroComponent />

      <HomeContentComponent />

    </div >
  );
}