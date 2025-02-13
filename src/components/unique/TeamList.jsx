

export default function TeamListComponent({ name, n, surname, role, image }) {
    let picture = <img className="w-100 p-5 rounded-full" src={image} alt="" />
    let description =
        <div className="flex flex-col p-5 justify-center">
            <h3 className="block my-4 text-4xl font-semibold text-[#a0522d] mb-2">{name} {surname}</h3>
            <p className="text-3xl my-3 text-gray-700">{role}</p>
        </div>

    let template
    if (n % 2 == 0) {
        template =
            <div className="flex p-8 justify-center">
                {description}
                {picture}
            </div>
    } else {
        template =
            <div className="flex p-8 justify-center" >
                {picture}
                {description}
            </div>
    }
    return (
        template
    );
}