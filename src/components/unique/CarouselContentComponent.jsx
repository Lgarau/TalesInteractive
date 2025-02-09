export default function CarouselContent({ title, content, image }) {

    return (
        <div className="p-8 w-500 shadow-md text-center">
            <img src={image} className="carousel-img fa-solid fa-user-large h-100 rounded-sm mx-auto mb-4 " alt="carousel-post-img" />
            <h2 className="text-4xl font-bold text-center mb-6">{title}</h2>
            <p className="text-lg text-white-700">
                {content}
            </p>
        </div>
    );
}