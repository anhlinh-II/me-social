import { Avatar, Breadcrumbs, FormControl, InputLabel, Link, MenuItem, Select, SelectChangeEvent, TextField, Typography, ListItemIcon, ListItemText } from "@mui/material";
import { FaEarthAmericas, FaLocationDot, FaReact, FaRegFaceKissBeam, FaUserTag } from "react-icons/fa6";
import { IoMdClose, IoMdPhotos } from "react-icons/io";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import creategroup from '../../assets/creategroup.png';
import { LuDot } from "react-icons/lu";
import { HiOutlineUserCircle } from "react-icons/hi";
import debounce from 'lodash/debounce';
import { createGroup } from "../../services/Entities/GroupService";
import { GroupPrivacy } from "../../services/Types/Group";

const CreateGroup = () => {
     const [mode, setMode] = useState<string | number>('');
     const navigate = useNavigate();
     const [groupName, setGroupName] = useState<string>("");
     const [groupBio, setGroupBio] = useState<string>("");
     const [groupLocation, setGroupLocation] = useState<string>("")

     const [isEnoughInfo, setIsEnoughInfo] = useState<boolean | 0>(false);
     
     const handleCreateGroup = async () => {
          if (!isEnoughInfo) return;

          const groupData = {
               adminId: 3,
               name: groupName,
               description: groupBio,
               location: groupLocation,
               privacy: mode === 10 ? GroupPrivacy.PUBLIC : GroupPrivacy.PRIVATE,
          };

          try {
               const response = await createGroup(groupData);
               console.log(response);
               alert(`Tạo nhóm thành công`);
               navigate(`/groups/${response.result?.id}`);
          } catch (error) {
               console.error("Failed to create group", error);
               alert("There was an error creating the group.");
          }
     };

     useEffect(() => {
          const hasEnoughInfo: boolean | 0 = (mode && groupBio && groupName && groupLocation) as (boolean | 0);

          if (isEnoughInfo !== hasEnoughInfo) {
               setIsEnoughInfo(hasEnoughInfo);
          }
     }, [mode, groupBio, groupName, groupLocation, isEnoughInfo])

     const handleChangeGroupName = useCallback(
          debounce((newValue) => {
               setGroupName(newValue);
          }, 200), // adjust the delay as needed
          []
     );

     const handleChangeBio = useCallback(
          debounce((newValue) => {
               setGroupBio(newValue);
          }, 200),
          []
     )

     const handleChangeLocation = useCallback(
          debounce((newValue) => {
               setGroupLocation(newValue);
          }, 200),
          []
     )

     const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
         console.log(event);
     };

     const handleChangeModeGroup = (event: SelectChangeEvent<string | number>) => {
          setMode(event.target.value as string);
     };

     const breadcrumbs = useMemo(() => [
          <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
               Home
          </Link>,
          <Link
               underline="hover"
               key="2"
               color="inherit"
               href="/groups"
               onClick={handleClick}
          >
               Groups
          </Link>,
          <Typography key="3" sx={{ color: 'text.primary' }}>
               Create Group
          </Typography>,
     ], []);


     return (
          <div className="flex w-full">
               {/* left */}
               <div className="fixed top-0 bottom-0 left-0 w-[23%] flex flex-col pl-4 border-r-2 border-gray-200 shadow-xl">
                    {/* icon and logo */}
                    <div className="flex flex-row gap-4 py-4 border-b-2 border-gray-200">
                         <span
                              onClick={() => navigate(-1)}
                              className="p-2 bg-gray-400 text-white rounded-full cursor-pointer"
                         ><IoMdClose /></span>
                         <span className="text-3xl text-sky-600 cursor-pointer"
                              onClick={() => navigate(`/`)}
                         ><FaReact /></span>
                    </div>
                    {/* enter group info */}
                    <div>
                         <div className="py-2">
                              <Breadcrumbs
                                   separator={<NavigateNextIcon fontSize="small" />}
                                   aria-label="breadcrumb"
                              >
                                   {breadcrumbs}
                              </Breadcrumbs>
                         </div>
                         <div className="text-2xl font-bold mb-4">Create Group</div>
                         {/* avatar */}
                         <div className="flex gap-3 items-center mb-8">
                              <Avatar
                                   src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/348932296_132677126443691_7610668787772437288_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&cb=99be929b-6bbdfb60&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=84pP-b5_dwEQ7kNvgHnQDBt&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AgjX1d9pJOEZ_gZWxVvDKg3&oh=00_AYDbE273OCApqPYTObtEHif9En576laUOFF_TXmMzY9LDQ&oe=66FB7048"
                                   alt="avatar"
                              />
                              <div className="flex flex-col justify-center">
                                   <span className="font-semibold text-sm">Đồ Thị Sóng Cơ</span>
                                   <span className="text-xs font-semibold text-gray-500">Admin</span>
                              </div>
                         </div>
                         {/* form */}
                         <div>
                              <div className="mb-4"><TextField onChange={(e) => handleChangeGroupName(e.target.value)} className="w-[90%]" id="demo-helper-text-misaligned-no-helper" label="Group name" /></div>
                              <div className="mb-4"><TextField onChange={(e) => handleChangeBio(e.target.value)} className="w-[90%]" id="demo-helper-text-misaligned-no-helper" label="Group bio" /></div>
                              <div className=""><TextField onChange={(e) => handleChangeLocation(e.target.value)} className="w-[90%]" id="demo-helper-text-misaligned-no-helper" label="Group location" /></div>
                              <div className="my-4">
                                   <FormControl className="w-[90%] mt-4">
                                        <InputLabel id="demo-simple-select-label">Mode</InputLabel>
                                        <Select
                                             labelId="demo-simple-select-label"
                                             id="demo-simple-select"
                                             value={mode}
                                             label="Mode"
                                             onChange={handleChangeModeGroup}
                                             renderValue={(selected: string | number) => (
                                                  <div className="flex items-center gap-2 text-gray-600">
                                                       {selected === 10 && <span className="p-2 rounded-full bg-gray-300"><FaEarthAmericas /></span>}
                                                       {selected === 20 && <span className="p-2 rounded-full bg-gray-300"><FaLock /></span>}
                                                       <span>{selected === 10 ? GroupPrivacy.PUBLIC : GroupPrivacy.PRIVATE}</span>
                                                  </div>
                                             )}
                                        >
                                             <MenuItem value={10}>
                                                  <ListItemIcon>
                                                       <span className="p-2 rounded-full bg-gray-300 mr-2"><FaEarthAmericas /></span>
                                                  </ListItemIcon>
                                                  <ListItemText primary="Public" />
                                             </MenuItem>
                                             <MenuItem value={20}>
                                                  <ListItemIcon>
                                                       <span className="p-2 rounded-full bg-gray-300 mr-2">
                                                            <FaLock />
                                                       </span>
                                                  </ListItemIcon>
                                                  <ListItemText primary="Private" />
                                             </MenuItem>
                                        </Select>
                                   </FormControl>
                              </div>
                         </div>
                    </div>
                    <div className="flex absolute bottom-0 right-0 left-0 border-t border-gray-300 h-[10%] drop-shadow-2xl">
                         <button
                         className={`m-auto px-32 py-2 rounded-lg font-semibold ${isEnoughInfo ? 'bg-sky-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                         onClick={handleCreateGroup}
                         disabled={!isEnoughInfo}
                         >
                         Create
                         </button>
                    </div>
               </div>
               {/* right */}
               <div className="ml-auto w-[77%] bg-gray-100 flex fixed top-0 right-0 bottom-0">
                    <div className="border rounded-xl shadow-xl bg-white m-auto h-4/5 w-4/5 px-4 pt-6">
                         <span className="text-lg font-semibold">Preview</span>
                         <div className="mt-4 border h-[90%] overflow-scroll overflow-x-hidden rounded-xl">
                              <img
                                   src={creategroup}
                                   alt="creategroup"
                                   className="rounded-xl"
                              />
                              <div className="px-4 pt-4 flex flex-col">
                                   <div className="text-3xl mb-3 text-gray-400 font-bold">{groupName === "" ? "Group name" : groupName}</div>
                                   <span className="flex items-center border-b-1 border-b border-gray-300 pb-4 text-gray-500 font-semibold">
                                        <span className="text-sm">
                                             {
                                                  mode === 10 ? <span className="flex items-center gap-1"><FaEarthAmericas /><span> Public group</span></span>
                                                       : <span className="flex items-center gap-1"><FaLock /><span> Private group</span></span>
                                             }
                                        </span>
                                        <LuDot />
                                        <span className="text-gray-700">1 member</span>
                                   </span>
                                   <div className="flex cursor-not-allowed font-semibold text-gray-500">
                                        <span className="px-4 py-3">About</span>
                                        <span className="px-4 py-3">Posts</span>
                                        <span className="px-4 py-3">Members</span>
                                   </div>
                              </div>
                              <div className="bg-gray-200 p-4 flex gap-6 shadow-md">
                                   <div className="flex-[60%] font-xs bg-gray-50 rounded-lg px-2 py-3 h-fit pb-4">
                                        <div className="flex items-center gap-2">
                                             <span className="text-4xl text-gray-300"><HiOutlineUserCircle /></span>
                                             <input className="bg-gray-200 w-[100%]  cursor-context-menu indent-1 px-2 py-1.5 rounded-full" type="text" placeholder="What's on your mind, bro?" />
                                        </div>
                                        <div className="mt-4 flex justify-center gap-12 text-gray-500 text-md cursor-not-allowed">
                                             <div className="flex items-center justify-center gap-1"><IoMdPhotos /> <span>Photo/Videos</span></div>
                                             <div className="flex items-center justify-center gap-1"><FaUserTag /> <span>Tag People</span></div>
                                             <div className="flex items-center justify-center gap-1"><FaRegFaceKissBeam /> <span>Feeling/Activity</span></div>
                                        </div>
                                   </div>
                                   <div className="flex-[40%] h-fit bg-gray-50 rounded-lg px-4 pt-4 pb-6 text-gray-500">
                                        <div className="text-gray-500 font-semibold mb-2">About</div>
                                        {groupBio ? <div className="mb-2">{groupBio}</div> : ""}
                                        {
                                             mode === 10 &&
                                             <span className="flex items-start gap-2">
                                                  <span className="relative top-1.5"><FaEarthAmericas /></span>
                                                  <span className="flex flex-col">
                                                       <span className="font-semibold">Public group</span>
                                                       <span>Anyone can see who's in the group and what they post</span>
                                                  </span>
                                             </span>

                                        }
                                        {
                                             mode === 20 &&
                                             <span className="flex items-start gap-2">
                                                  <span className="relative top-1.5"><FaLock /></span>
                                                  <span className="flex flex-col">
                                                       <span className="font-semibold text-gray-700">Private group</span>
                                                       <span>Only members can see who's in the group and what they post</span>
                                                  </span>
                                             </span>
                                        }
                                        {
                                             groupLocation &&
                                             <div className="flex items-start gap-2 mt-2">
                                                  <span className="relative top-1.5"><FaLocationDot /></span>
                                                  <span className="">
                                                       {groupLocation}
                                                  </span>
                                             </div>
                                        }
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CreateGroup;
