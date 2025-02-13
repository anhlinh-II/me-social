import { AiOutlineClose } from "react-icons/ai";

interface ISelectedMemberProps {
     handleRemoveMember: () => void;
     member: any;
}

const SelectedMember = ({handleRemoveMember}: ISelectedMemberProps) => {
     return (
          <div className="flex items-center bg-slate-300 rounded-full">
               <img className="w-7 h-7 rounded-full" src="https://i.pinimg.com/236x/4a/a5/8d/4aa58d460590403215e888873b9f908c.jpg" alt="" />
               <p className="px-2">username</p>
               <AiOutlineClose onClick={handleRemoveMember} className="pr-1 cursor-pointer" />
          </div>
     )
};

export default SelectedMember;
