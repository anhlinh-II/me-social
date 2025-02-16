import { AiOutlineClose } from "react-icons/ai";
import { UserDTO } from "../../../types/User";

interface ISelectedMemberProps {
     handleRemoveMember: () => void;
     member: UserDTO;
}

const SelectedMember = ({handleRemoveMember, member}: ISelectedMemberProps) => {
     return (
          <div className="flex items-center bg-slate-300 rounded-full">
               <img className="w-7 h-7 rounded-full" src={member.avatarUrl} alt="" />
               <p className="px-2">{member.username}</p>
               <AiOutlineClose onClick={handleRemoveMember} className="pr-1 cursor-pointer" />
          </div>
     )
};

export default SelectedMember;
