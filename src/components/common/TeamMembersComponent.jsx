
import teamMembers from "../../data/team-members";
import TeamList from "../unique/TeamList";
export default function TeamMembersComponent({ }) {

    return (
        <div className="overflow-x-scroll" >
            <div className="flex gap-12 w-1600 my-30 h-auto flex-nowrap text-center">

                {teamMembers.map((member) => {
                    return <TeamList key={member.id} name={member.name} surname={member.surname} role={member.role} image={member.img} />

                })}
            </div>
        </div>
    );
}