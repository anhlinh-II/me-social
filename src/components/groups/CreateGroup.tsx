import { Avatar, Breadcrumbs, FormControl, InputLabel, Link, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography, ListItemIcon, ListItemText } from "@mui/material";
import { FaEarthAmericas, FaReact } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from "react";
import MultipleSelectChip from "./MultipleSelectChip";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CreateGroup = () => {
     const [mode, setMode] = useState('');
     const navigate = useNavigate();

     const [isEnoughInfo, setIsEnoughInfo] = useState<boolean>(true);

     const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          console.info('You clicked a breadcrumb.');
     };

     const handleChange = (event: SelectChangeEvent) => {
          setMode(event.target.value as string);
     };

     const breadcrumbs = [
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
     ];

     return (
          <div className="flex w-screen h-screen">
               {/* left */}
               <div className="fixed top-0 bottom-0 left-0 w-[23%] flex flex-col pl-4 border-r-2 border-gray-200 shadow-xl">
                    {/* icon and logo */}
                    <div className="flex flex-row gap-4 py-4 border-b-2 border-gray-200">
                         <span
                              onClick={() => navigate(`/groups`)}
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
                              <TextField className="w-[90%]" id="demo-helper-text-misaligned-no-helper" label="Group Name" />
                              <div className="my-4">
                                   <FormControl className="w-[90%] mt-4">
                                        <InputLabel id="demo-simple-select-label">Mode</InputLabel>
                                        <Select
                                             labelId="demo-simple-select-label"
                                             id="demo-simple-select"
                                             value={mode}
                                             label="Mode"
                                             onChange={handleChange}
                                             renderValue={(selected: string | number) => (
                                                  <div className="flex items-center gap-2 text-gray-600">
                                                       {selected === 10 && <span className="p-2 rounded-full bg-gray-300"><FaEarthAmericas /></span>}
                                                       {selected === 20 && <span className="p-2 rounded-full bg-gray-300"><FaLock /></span>}
                                                       <span>{selected === 10 ? 'Public' : 'Private'}</span>
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
                              <div className="-ml-2 pr-[4px]">
                                   <MultipleSelectChip />
                              </div>
                         </div>
                    </div>
                    <div className="flex absolute bottom-0 right-0 left-0 border-t border-gray-300 h-[10%] drop-shadow-2xl">
                         {isEnoughInfo ? <button className="m-auto bg-sky-500 px-32 py-2 rounded-lg text-white font-semibold">Create</button> : <button className="m-auto bg-gray-300 px-32 py-2 rounded-lg text-gray-500 cursor-not-allowed font-semibold">Create</button>}
                    </div>
               </div>
               {/* right */}
               <div className="ml-auto w-[77%]">right</div>
          </div>
     );
};

export default CreateGroup;
