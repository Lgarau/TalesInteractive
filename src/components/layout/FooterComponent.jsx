import talInt from "../../assets/bianco-largo.png";
export default function FooterComponent() {
    return (
        <footer className="flex p-10 place-content-around item-center bg-black text-white text-center">
            <img className=" max-w-50" src={talInt} alt="" />
            <h1 className="inline-block  text-white">  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ad eligendi dolorum, ratione corrupti sapiente!  </h1>
        </footer>
    );
}