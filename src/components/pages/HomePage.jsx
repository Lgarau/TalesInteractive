import HeroComponent from "../common/HeroComponent";
import CarouselComponent from "../common/CarouselComponent";
import homeinfo from "../../data/home-info";


export default function HomePage() {

  function HomeInfoComponent({ icon, title, content }) {


    return (

      <div className="w-80 text-center" >
        <i className={icon}></i>
        <div className="flex-1 p-6 rounded-lg max-w-150 ">
          <h2 className="text-4xl font-bold text-center mb-6">{title}</h2>
          <p className="text-lg text-white-700">
            {content}
          </p>
        </div>
      </div>


    );
  }

  return (
    <>
      <HeroComponent place="home" />

      <section>

        <div className="flex flex-wrap justify-center gap-20 text-center my-20 column-3" >
          {homeinfo.map((info) => {
            return <HomeInfoComponent key={info.id} title={info.title} content={info.content} icon={info.icon} />
          })}
        </div>

        <CarouselComponent />

      </section >
    </>
  );
}