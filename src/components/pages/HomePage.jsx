import HeroComponent from "../common/HeroComponent";
import CarouselComponent from "../common/CarouselComponent";
import HomeContentComponent from "../common/HomeContentComponent";

export default function HomePage() {
  return (
    <div className="min-h-screen text-white pb-30">

      <HeroComponent />

      <HomeContentComponent />

      <CarouselComponent />

    </div >
  );
}