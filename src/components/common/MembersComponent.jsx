
import TeamMembers from "../../data/team-members";
export default function MembersComponent({ }) {
    function SubLeaderMembers({ name, n, surname, role, image }) {

        return (
            <div className="my-10 w-90  justify-center">
                <img className="mx-auto max-w-70 p-5 octagon" src={image} alt="" />

                <div className="flex flex-col p-5 justify-between">
                    <h3 className="block  text-3xl font-semibold text-[#a0522d] mb-2">{name} {surname}</h3>
                    <p className="text-2xl my-3 text-white">{role}</p>
                    <div className="menber-social-wrapper pt-5">
                        <a href=""><i className="member-social fa-brands fa-square-facebook"></i></a>
                        <a href=""><i className="member-social fa-brands fa-square-instagram"></i></a>
                        <a href=""><i className="member-social fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        );
    }

    return (

        <div className="mx-auto justify-evenly flex member-row my-10 h-auto flex-wrap text-center">

            {TeamMembers.map((member) => {
                return <SubLeaderMembers key={member.id} n={member.id} name={member.name} surname={member.surname} role={member.role} image={member.img} />

            })}
        </div>

    );
}