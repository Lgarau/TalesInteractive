import carouselPost from "../../data/carousel-posts";
import CarouselContentComponent from "../unique/CarouselContentComponent";

export default function CarouselComponent({ }) {

    return (
        <div className="flex overflow-x-scroll">
            {carouselPost.map((post) => {
                return <CarouselContentComponent key={post.id} title={post.title} content={post.content} image={post.img} />
            })}
        </div>
    );
}