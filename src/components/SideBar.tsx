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
     setActive: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar = (props: IProps) => {

     const { active, setActive } = props

     const [showCreateReelModal, setShowCreateReelModal] = useState<boolean>(false);

     const openAddRewModal = () => {
          setShowCreateReelModal(true);
     }

     return (
          <div style={{}}>
               <Sidebar
                    rootStyles={{
                         [`.${sidebarClasses.container}`]: {
                              backgroundColor: '#F3F4F6',
                              fontSize: '15px',
                              padding: '0 30px',
                              display: 'flex',
                              // position: "absolute",
                              // top: "0",
                              // left: "0",
                              // bottom: "0",
                              flexDirection: 'column',
                              justifyContent: "between",
                              alignItems: "start",
                              width: "335px",
                              height: "100vh",
                         },
                    }}
               >
                    <div className='px-4 py-6 satisfy-regular me-social decoration-sky-600'>Me Social</div>
                    <Menu
                         rootStyles={{
                         }}
                         menuItemStyles={{
                              button: ({ level, active, disabled }) => {
                                   // only apply styles on first level elements of the tree
                                   if (level === 0)
                                        return {
                                             width: "100%",
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
                                                  },
                                                  backgroundColor: 'rgb(230 230 230)'
                                             },
                                             paddingRight: '100px',
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
                    <div className='p-5 mt-20'>
                         <Link
                              className='cursor-pointer flex justify-start align-center gap-x-4'
                              to={'https://github.com/anhlinh-II/me-social'} target="_blank"
                         >
                              <FaGithub className='mt-1 text-base text-sky-800' />
                              <p className='underline underline-offset-4 decoration-sky-800 text-sky-800 font-medium'>Visit Our Source</p>
                         </Link>
                    </div>

                    <CreateReelModal
                         show={showCreateReelModal}
                         setShow={setShowCreateReelModal}
                    />
               </Sidebar>
          </div>
     )
}

export default SideBar;