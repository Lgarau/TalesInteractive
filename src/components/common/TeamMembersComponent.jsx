
import teamMembers from "../../data/team-members";
import TeamList from "../unique/TeamList";
export default function TeamMembersComponent({ }) {

    return (
        <div className="overflow-x-scroll" >
            <div className="member-row gap-12 my-30 h-auto flex-nowrap text-center px-">

                {teamMembers.map((member) => {
                    return <TeamList key={member.id} n={member.id} name={member.name} surname={member.surname} role={member.role} image={member.img} />

                })}
            </div>
        </div>
    );
}