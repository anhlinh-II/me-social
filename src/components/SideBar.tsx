import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { IoHome, IoLogOut, IoPersonCircle } from 'react-icons/io5';
import { PiVideoFill } from 'react-icons/pi';
import { IoIosAddCircle, IoMdSettings } from 'react-icons/io';
import { MdManageAccounts } from 'react-icons/md';
import { FaAngleDown, FaAngleRight, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CreateReelModal from './modal/Reel.create.modal';

interface IProps {
     isFullSiderBar: boolean;
     setIsFullSideBar: React.Dispatch<React.SetStateAction<boolean>>;
     active: string;
     setActive:  React.Dispatch<React.SetStateAction<string>>;
}

const SideBar = (props: IProps) => {

     const { active, setActive } = props

     const [showCreateReelModal, setShowCreateReelModal] = useState<boolean>(false);

     const openAddRewModal = () => {
          setShowCreateReelModal(true);
     }

     return (
          <div style={{ height: '100%' }}>
               <Sidebar
                    rootStyles={{
                         [`.${sidebarClasses.container}`]: {
                              backgroundColor: 'white',
                              fontSize: '15px',
                              padding: '0 10px 0 10px',
                              overflow: "hidden",
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: "space-between",
                              borderRight: "1px solid rgba(0,0,0,0.2)",
                              borderLeft: "1px solid rgba(0,0,0,0.2)"

                         },
                    }}
               >
                    <div>
                         <div className='px-4 py-6 satisfy-regular me-social decoration-sky-600'>Me Social</div>
                         <Menu
                              menuItemStyles={{
                                   button: ({ level, active, disabled }) => {
                                        // only apply styles on first level elements of the tree
                                        if (level === 0)
                                             return {
                                                  width: "180%",
                                                  color: disabled ? 'rgba(0,0,0,0.3)' : '#075985',
                                                  backgroundColor: active ? 'rgb(186 230 253)' : undefined,
                                                  fontWeight: "500",
                                                  fontSize: "16px",
                                                  borderRadius: "10px",
                                                  "&:hover": {
                                                       color: "rgb(7 89 133)",
                                                       transition: "all .08s linear",
                                                       "&:focus": {
                                                            backgroundColor: 'rgb(186 230 253)'
                                                       }
                                                  },
                                                  cursor: disabled ? "none" : undefined
                                             };
                                   },

                              }}
                              renderExpandIcon={({ open }) => <span>{open ? <FaAngleDown /> : <FaAngleRight />}</span>}
                         >
                              <MenuItem
                                   rootStyles={{ padding: "5px" }}
                                   active={active === "home" ? true : false}
                                   component={<Link to={'/'} />}
                                   icon={<IoHome />}
                                   onClick={() => setActive("home")}
                              >
                                   Home
                              </MenuItem>
                              <MenuItem
                                   active={active === "reels" ? true : false}
                                   onClick={() => setActive("reels")}
                                   rootStyles={{ padding: "5px" }}
                                   component={<Link to={'/reels'} />}
                                   icon={<PiVideoFill />}
                              >
                                   Reels
                              </MenuItem>
                              <MenuItem
                                   active={active === "createReels" ? true : false}
                                   onClick={() => openAddRewModal()}
                                   rootStyles={{ padding: "5px" }}
                                   icon={<IoIosAddCircle />}
                              >
                                   Create Reels
                              </MenuItem>
                              <MenuItem
                                   active={active === "profile" ? true : false}
                                   onClick={() => setActive("profile")}
                                   rootStyles={{ padding: "5px" }}
                                   component={<Link to={'/profile'} />}
                                   icon={<IoPersonCircle />}
                              >
                                   Profile
                              </MenuItem>
                              <MenuItem
                                   rootStyles={{ padding: "5px" }}
                                   active={active === "setting" ? true : false}
                                   onClick={() => setActive("setting")}
                                   icon={<IoMdSettings />}
                              >
                                   Setting
                              </MenuItem>
                              <MenuItem
                                   rootStyles={{ padding: "5px" }}
                                   active={active === "admin" ? true : false}
                                   onClick={() => setActive("admin")}
                                   icon={<MdManageAccounts />}
                                   component={<Link to={'/admin/dashboard'} />}
                                   >
                                   Admin Page
                              </MenuItem>
                              <MenuItem
                                   rootStyles={{ padding: "5px" }}
                                   active={active === "logout" ? true : false}
                                   onClick={() => setActive("logout")}
                                   component={<Link to={'/login'} />}
                                   icon={<IoLogOut />}
                              >
                                   Log out
                              </MenuItem>

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
               <CreateReelModal
                    show={showCreateReelModal}
                    setShow={setShowCreateReelModal}
               />
          </div>
     )
}

export default SideBar;