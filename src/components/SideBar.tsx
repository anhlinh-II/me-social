import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { IoHome, IoLogOut, IoPersonCircle } from 'react-icons/io5';
import { PiVideoFill } from 'react-icons/pi';
import { IoIosAddCircle, IoIosMore, IoMdSettings } from 'react-icons/io';
import { MdManageAccounts } from 'react-icons/md';
import { FaAngleDown, FaAngleRight, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBar = () => {

     const openAddRewModal = () => {
          alert('I am an addReelModal');
     }

     return (
          <div style={{ height: '100%' }}>
               <Sidebar
                    rootStyles={{
                         [`.${sidebarClasses.container}`]: {
                              backgroundColor: '#d4f2fd',
                              fontSize: '15px',
                              padding: '15px',
                              overflow: "hidden",
                              position: "fixed",
                              top: '76px',
                              display: 'flex',
                              flexDirection: 'column',
                         },
                    }}
               >
                    <div className='dancing-script-title p-5 decoration-sky-600'>Me Social</div>
                    <Menu menuItemStyles={{
                         button: ({ level, active, disabled }) => {
                              // only apply styles on first level elements of the tree
                              if (level === 0)
                                   return {
                                        color: disabled ? 'rgba(0,0,0,0.1)' : '#075985',
                                        backgroundColor: active ? '#111827' : undefined,
                                        fontWeight: "500",
                                        borderRadius: "10px",
                                   };
                         },

                    }}
                         renderExpandIcon={({ open }) => <span>{open ? <FaAngleDown /> : <FaAngleRight />}</span>}
                    >
                         <MenuItem component={<Link to={'/'} />} icon={<IoHome />} > Home </MenuItem>
                         <MenuItem component={<Link to={'/reels'} />} icon={<PiVideoFill />}> Reels </MenuItem>
                         <MenuItem onClick={() => openAddRewModal()} icon={<IoIosAddCircle />}> Create Reels </MenuItem>
                         <MenuItem component={<Link to={'/profile'} />} icon={<IoPersonCircle />}> Profile </MenuItem>
                         <SubMenu icon={<IoIosMore />} label="More"
                              rootStyles={{
                                   backgroundColor: '#d4f2fd',
                                   color: '#075985',
                                   fontWeight: '500'
                              }}
                         >
                              <MenuItem
                                   disabled
                                   icon={<MdManageAccounts />}> Admin Page </MenuItem>
                              <MenuItem active icon={<IoMdSettings />}> Setting </MenuItem>
                              <MenuItem component={<Link to={'/login'} />} icon={<IoLogOut />}> Log out </MenuItem>
                         </SubMenu>

                    </Menu>
                    <Link to={'https://github.com/anhlinh-II/me-social'} target="_blank">
                         <div className='cursor-pointer flex justify-center fixed bottom-2 align-center p-5 gap-x-4 decoration-cyan-600'>
                              <FaGithub className='mt-1 text-base' />
                              <p className='underline underline-offset-4 decoration-sky-600 font-medium'>Visit Our Source</p>
                         </div>
                    </Link>

               </Sidebar>
          </div>
     )
}

export default SideBar;