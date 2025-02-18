
import subTeamMembers from "../../data/sub-leader-members";
export default function SubLeadersComponent({ }) {
    function SubLeaderMembers({ name, n, surname, role, image }) {

        return (
            <div className="mx-auto w-90 p-8 justify-center">
                <img className="mx-auto max-w-60 p-5 rounded-full" src={image} alt="" />

                <div className=" p-5 justify-center">
                    <h3 className="block my-4 text-4xl font-semibold text-[#a0522d] mb-2">{name} {surname}</h3>
                    <p className="text-3xl my-3 text-gray-700">{role}</p>
                </div>
                <p>facebook-instagram-twitter</p>
            </div>
        );
    }

    return (

        <div className="flex member-row gap-12 my-30 h-auto flex-wrap text-center">

            {subTeamMembers.map((member) => {
                return <SubLeaderMembers key={member.id} n={member.id} name={member.name} surname={member.surname} role={member.role} image={member.img} />

            })}
        </div>

    );
}