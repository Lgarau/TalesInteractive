
import teamMembers from "../../data/team-members";
export default function TeamMembersComponent({ }) {
    function TeamMember({ name, n, surname, role, image }) {

        return (
            <div className="mx-auto w-90 p-8 justify-center">
                <img className="mx-auto max-w-70 p-5 octagon" src={image} alt="" />

                <div className=" p-5 justify-center">
                    <h3 className="block my-4 text-4xl font-semibold text-[#a0522d] mb-2">{name} {surname}</h3>
                    <p className="text-3xl my-3 text-gray-700">{role}</p>
                </div>
            </div>
        );
    }

    return (

        <div className="flex member-row gap-12 my-30 h-auto flex-wrap text-center">

            {teamMembers.map((member) => {
                return <TeamMember key={member.id} n={member.id} name={member.name} surname={member.surname} role={member.role} image={member.img} />

            })}
        </div>

    );
}