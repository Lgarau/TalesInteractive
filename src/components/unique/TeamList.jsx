

export default function TeamListComponent({ name, surname, role, image }) {

    return (
        <div className="p-8">
            <img className="w-100 rounded-full" src={image} alt="" />
            <h3 className="block my-4 text-4xl font-semibold text-[#a0522d] mb-2">{name} {surname}</h3>
            <p className="text-3xl my-3 text-gray-700">{role}</p>
        </div>
    );
}