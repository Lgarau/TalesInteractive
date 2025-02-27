
import subTeamMembers from "../../data/sub-leader-members";
export default function SubLeadersComponent({ }) {
    function SubLeaderMembers({ name, n, surname, role, image }) {

        return (
            <div className="mx-auto w-100 p-8 justify-center">
                <img className="mx-auto max-w-70 p-5 octagon" src={image} alt="" />

                <div className=" p-5 justify-center">
                    <h3 className="block my-4 text-4xl font-semibold text-[#a0522d] mb-2">{name} {surname}</h3>
                    <p className="text-3xl my-3 text-white">{role}</p>
                    <a href=""><i class="member-social fa-brands fa-facebook"></i></a>
                    <a href=""><i class="member-social fa-brands fa-square-instagram"></i></a>
                    <a href=""><i class="member-social fa-brands fa-square-x-twitter"></i></a>
                </div>
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