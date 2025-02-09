import homeinfo from "../../data/home-info";
import HomeInfoComponent from "../unique/HomeInfoComponent";

export default function HomeContentComponent() {


    return (
        <div className="flex justify-center gap-20 text-center pt-30 column-3" >
            {homeinfo.map((info) => {
                return <HomeInfoComponent key={info.id} title={info.title} content={info.content} icon={info.icon} />
            })}
        </div>


    );
}