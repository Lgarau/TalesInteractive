
import teamMembers from "../../data/team-members";
import TeamListComponent from "../common/TeamListComponent";
export default function TeamComponent({ }) {

    return (
        <div className=" flex gap-12 my-30 h-150 overflow-x-scroll flex-nowrap">
            {teamMembers.map((member) => {
                return <TeamListComponent key={member.id} name={member.name} surname={member.surname} role={member.role} image={member.img} />

            })}
        </div>
    );
}