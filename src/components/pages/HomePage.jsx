import HeroComponent from "../common/HeroComponent";
import CarouselComponent from "../common/CarouselComponent";
import homeinfo from "../../data/home-info";
import HomeInfoComponent from "../unique/HomeInfo";

export default function HomePage() {
  return (
    <>

      <HeroComponent />
      <section>
        <div className="flex flex-wrap justify-center gap-20 text-center pt-30 column-3" >
          {homeinfo.map((info) => {
            return <HomeInfoComponent key={info.id} title={info.title} content={info.content} icon={info.icon} />
          })}
        </div>

        <CarouselComponent />

      </section >
    </>
  );
}