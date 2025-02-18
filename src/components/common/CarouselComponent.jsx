import carouselPost from "../../data/carousel-posts";

export default function CarouselComponent({ }) {
    function CarouselContent({ title, content, image }) {

        return (
            <div className="p-8 w-500 shadow-md text-center">
                <img src={image} className="carousel-img fa-solid fa-user-large h-auto rounded-md mx-auto mb-4 " alt="carousel-post-img" />
                <p className="text-3xl font-bold text-center my-6">{title}</p>
                <p className="text-lg text-white-700">
                    {content}
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-x-scroll my-20" >
            <div className="flex w-610">
                {carouselPost.map((post) => {
                    return <CarouselContent key={post.id} title={post.title} content={post.content} image={post.img} />
                })}
            </div>
        </div>
    );
}