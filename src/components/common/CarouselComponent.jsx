import carouselPost from "../../data/carousel-posts";
import CarouselContentComponent from "../unique/CarouselContentComponent";

export default function CarouselComponent({ }) {

    return (
        <div className="overflow-x-scroll" >
            <div className="flex w-640">
                {carouselPost.map((post) => {
                    return <CarouselContentComponent key={post.id} title={post.title} content={post.content} image={post.img} />
                })}
            </div>
        </div>
    );
}