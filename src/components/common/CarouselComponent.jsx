import carouselPost from "../../data/carousel-posts";
import CarouselContentComponent from "../unique/CarouselContent";

export default function CarouselComponent({ }) {

    return (
        <div className="overflow-x-scroll" >
            <div className="flex w-610">
                {carouselPost.map((post) => {
                    return <CarouselContentComponent key={post.id} title={post.title} content={post.content} image={post.img} />
                })}
            </div>
        </div>
    );
}