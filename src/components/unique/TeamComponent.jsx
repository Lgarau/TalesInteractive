
import teamMembers from "../../data/team-members";
import TeamListComponent from "../common/TeamListComponent";
export default function TeamComponent({ }) {

    return (
        <div className="overflow-x-scroll p-0 m-0" >
            <div className="flex gap-12 w-1600 my-30 h-150 flex-nowrap text-center">

                {teamMembers.map((member) => {
                    return <TeamListComponent key={member.id} name={member.name} surname={member.surname} role={member.role} image={member.img} />

                })}
            </div>
        </div>
    );
}