import { Sidebar, Menu, MenuItem, sidebarClasses, SubMenu } from 'react-pro-sidebar';
import { MdOndemandVideo, MdOutlineGroups2, MdSpaceDashboard } from 'react-icons/md';
import { FaAngleDown, FaAngleRight, FaGithub, FaRegUserCircle } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { LiaElementor } from 'react-icons/lia';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { PiShootingStarLight } from 'react-icons/pi';



const LayoutAdmin = () => {

     const [active, setActive] = useState<string>("dashboard");
     const [open, setOpen] = useState<'general' | 'features' | undefined>("general");

     const handleOpenSubMenu = (key: 'general' | 'features') => {
          if (open === key) {
               setOpen(undefined);
          } else {
               setOpen(key);
          }
     };

     return (
          <div className='flex' style={{ height: '100%' }}>
               <Sidebar
                    rootStyles={{
                         [`.${sidebarClasses.container}`]: {
                              width: "21%",
                              backgroundColor: 'white',
                              fontSize: '15px',
                              padding: '0 10% 0 10px',
                              overflow: "hidden",
                              position: "fixed",
                              left: "0",
                              top: "0",
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: "space-between",
                              borderRight: "1px solid rgba(0,0,0,0.2)",
                              borderLeft: "1px solid rgba(0,0,0,0.2)"
                         },
                    }}
               >
                    <div>
                         <Link to={'/'}><div className='px-4 py-6 satisfy-regular me-social decoration-sky-600'>Me Social</div></Link>
                         <Menu
                              menuItemStyles={{
                                   button: ({ level, active, disabled }) => {
                                        // only apply styles on first level elements of the tree
                                        if (level === 0)
                                             return {
                                                  color: disabled ? 'rgba(0,0,0,0.3)' : '#075985',
                                                  backgroundColor: active ? 'rgb(186 230 253)' : undefined,
                                                  fontWeight: "500",
                                                  fontSize: "16px",
                                                  borderRadius: "10px",
                                                  "&:hover": {
                                                       color: "rgb(7 89 133)",
                                                       transition: "all .08s linear",
                                                       "&:focus": {
                                                            backgroundColor: 'rgb(125 211 252)'
                                                       }
                                                  },
                                                  cursor: disabled ? "none" : undefined
                                             };
                                   },

                              }}
                              renderExpandIcon={({ open }) => <span>{open ? <FaAngleDown /> : <FaAngleRight />}</span>}
                         >
                              <SubMenu
                                   rootStyles={{
                                        width: "170%",
                                        borderRadius: "10px",
                                   }}
                                   onClick={() => handleOpenSubMenu('general')} open={open === 'general'} label="General"
                                   icon={<MdOndemandVideo />}
                              >
                                   <MenuItem
                                        rootStyles={{
                                             borderRadius: "10px",
                                             backgroundColor: active === "dashboard" ? "rgb(186 230 253)" : undefined,
                                        }}
                                        active={active === "dashboard" ? true : false}
                                        component={<Link to={'/admin/dashboard'} />}
                                        icon={<MdSpaceDashboard />}
                                        onClick={() => setActive("dashboard")}
                                   >
                                        Dashboard
                                   </MenuItem>
                              </SubMenu>
                              <SubMenu
                                   rootStyles={{
                                        width: "170%",
                                        borderRadius: "10px",
                                   }}
                                   onClick={() => handleOpenSubMenu('features')} open={open === 'features'} label="Features"
                                   icon={<LiaElementor />}
                              >
                                   <MenuItem
                                        rootStyles={{
                                             borderRadius: "10px",
                                             backgroundColor: active === "users" ? "rgb(186 230 253)" : undefined,
                                        }}
                                        icon={<FaRegUserCircle />}
                                        active={active === "users" ? true : false}
                                        onClick={() => setActive("users")}
                                        component={<Link to={'/admin/users'} />}
                                   >
                                        Users
                                   </MenuItem>
                                   <MenuItem
                                        rootStyles={{
                                             borderRadius: "10px",
                                             backgroundColor: active === "posts" ? "rgb(186 230 253)" : undefined
                                        }}
                                        active={active === "posts" ? true : false}
                                        onClick={() => setActive("posts")}
                                        component={<Link to={'/admin/posts'} />}
                                        icon={<HiOutlineNewspaper />}
                                   >
                                        Posts
                                   </MenuItem>
                                   <MenuItem
                                        rootStyles={{
                                             borderRadius: "10px",
                                             backgroundColor: active === "groups" ? "rgb(186 230 253)" : undefined,
                                             "&:hover" : {
                                                  "&:focus" : {
                                                       backgroundColor: "rgb(186 230 253)"
                                                  }
                                             }
                                        }}
                                        active={active === "groups" ? true : false}
                                        onClick={() => setActive("groups")}
                                        icon={<MdOutlineGroups2 />}
                                        component={<Link to={'/admin/groups'} />}
                                   >
                                        Groups
                                   </MenuItem>
                                   <MenuItem
                                        rootStyles={{
                                             borderRadius: "10px",
                                             backgroundColor: active === "reels" ? "rgb(186 230 253)" : undefined
                                        }}
                                        active={active === "reels" ? true : false}
                                        onClick={() => setActive("reels")}
                                        icon={<MdOndemandVideo />}
                                   >
                                        Reels
                                   </MenuItem>
                                   <MenuItem
                                        rootStyles={{
                                             borderRadius: "10px",
                                             backgroundColor: active === "stories" ? "rgb(186 230 253)" : undefined
                                        }}
                                        active={active === "stories" ? true : false}
                                        onClick={() => setActive("stories")}
                                        icon={<PiShootingStarLight />}
                                   >
                                        Stories
                                   </MenuItem>
                              </SubMenu>
                         </Menu>
                    </div>
                    <Link
                         to={'https://github.com/anhlinh-II/me-social'} target="_blank">
                         <div className='cursor-pointer flex justify-center fixed bottom-2 align-center p-5 gap-x-4 decoration-cyan-600'>
                              <FaGithub className='mt-1 text-base' />
                              <p className='underline underline-offset-4 decoration-sky-600 font-medium'>Visit Our Source</p>
                         </div>
                    </Link>

               </Sidebar>
               <div className='ml-auto w-[79%]'>
                    <Outlet />
               </div>
          </div>
     )
}

export default LayoutAdmin;