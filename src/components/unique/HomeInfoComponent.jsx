export default function HomeInfoComponent({ icon, title, content }) {


    return (

        <div className="w-100 text-center" >
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