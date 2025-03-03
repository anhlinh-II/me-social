import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { IoHome, IoLogOut } from 'react-icons/io5';
import { PiVideoFill } from 'react-icons/pi';
import { IoIosAddCircle, IoMdSettings } from 'react-icons/io';
import { MdManageAccounts } from 'react-icons/md';
import { FaAngleDown, FaAngleRight, FaGithub } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import CreateReelModal from './modal/Reel.create.modal';
import avt from '../assets/me1.jpg';
import { callLogout } from '../services/AuthService';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { setLogoutAction } from '../redux/slice/accountSlice';
import { Avatar, message } from 'antd';
import { useUser } from '../utils/CustomHook';
import { BsCollectionPlayFill } from 'react-icons/bs';
import { FaBookmark } from 'react-icons/fa6';

interface IProps {
     isFullSiderBar: boolean;
     setIsFullSideBar: React.Dispatch<React.SetStateAction<boolean>>;
     active: string;
     setActive: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar = (props: IProps) => {

     const { active, setActive } = props

     const [showCreateReelModal, setShowCreateReelModal] = useState<boolean>(false);

     const dispatch = useAppDispatch();
     const user = useUser();

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
                              padding: '0 0px',
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
                    <div className='ps-10 py-6 satisfy-regular me-social decoration-sky-600'>Me Social</div>
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
                              icon={<IoHome className='text-2xl' />}
                              onClick={() => setActive("home")}
                         >
                              Trang chủ
                         </MenuItem>
                         <MenuItem
                              active={active === "reels" ? true : false}
                              onClick={() => setActive("reels")}
                              rootStyles={{ padding: "5px" }}
                              component={<Link to={'/reels'} />}
                              icon={<BsCollectionPlayFill className='text-xl' />}
                         >
                              Video
                         </MenuItem>
                         <MenuItem
                              active={active === "createReels" ? true : false}
                              onClick={() => openAddRewModal()}
                              rootStyles={{ padding: "5px" }}
                              icon={<IoIosAddCircle className='text-2xl' />}
                         >
                              Tạo Video
                         </MenuItem>
                         <MenuItem
                              active={active === "profile" ? true : false}
                              onClick={() => setActive("profile")}
                              rootStyles={{ padding: "5px" }}
                              component={<Link to={'/profile'} />}
                              icon={<Avatar src={user.avatarUrl ? user.avatarUrl : "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"} />}
                         >
                              Hồ sơ
                         </MenuItem>
                         <MenuItem
                              rootStyles={{ padding: "5px" }}
                              active={active === "admin" ? true : false}
                              onClick={() => setActive("admin")}
                              icon={<MdManageAccounts className='text-2xl' />}
                              component={<Link to={'/admin/dashboard'} />}
                         >
                              Trang Admin
                         </MenuItem>
                         <MenuItem
                              rootStyles={{ padding: "5px" }}
                              active={active === "favorite" ? true : false}
                              onClick={() => setActive("favorite")}
                              icon={<FaBookmark />}
                              component={<Link to={'/favorite'} />}
                         >
                              Ưa thích
                         </MenuItem>
                         <MenuItem
                              rootStyles={{ padding: "5px" }}
                              active={active === "logout" ? true : false}
                              onClick={async () => {
                                   const res = await callLogout();
                                   if (res) {
                                        dispatch(setLogoutAction())
                                        message.success("Log out successfully!")
                                        return <Navigate to={`/login`}/>
                                   }
                              }}
                              icon={<IoLogOut className='text-2xl' />}
                         >
                              Đăng xuất
                         </MenuItem>
                    </Menu>
                    <div className='px-8 mt-20'>
                         <Link
                              className='cursor-pointer flex justify-start align-center gap-x-4'
                              to={'https://github.com/anhlinh-II/me-social'} target="_blank"
                         >
                              <FaGithub className='text-2xl text-sky-800' />
                              <p className='underline underline-offset-4 decoration-sky-800 text-sky-800 font-medium'>Xem mã nguồn</p>
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