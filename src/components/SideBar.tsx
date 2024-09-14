import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses, menuClasses } from 'react-pro-sidebar';
import { IoHome, IoLogOut, IoPersonCircle } from 'react-icons/io5';
import { PiVideoFill } from 'react-icons/pi';
import { IoIosAddCircle, IoIosMore, IoMdSettings } from 'react-icons/io';
import { MdManageAccounts } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const SideBar = () => {
     return (
          <>
               <Sidebar
                    rootStyles={{
                         [`.${sidebarClasses.container}`]: {
                              backgroundColor: '#d4f2fd',
                              fontSize: '15px',
                              padding: '15px',
                              borderRadius: "10px",
                              overflow: "hidden",
                              height: "100vh",
                              position: "fixed",
                              top: '76px'
                         },
                    }}
               >
                    <div className='dancing-script-title p-5 decoration-sky-600'>Me Social</div>
                    <Menu menuItemStyles={{
                         button: ({ level, active, disabled }) => {
                              // only apply styles on first level elements of the tree
                              if (level === 0)
                                   return {
                                        color: disabled ? '#0369a1' : '#075985',
                                        backgroundColor: active ? '#d4f2fd' : undefined,
                                        fontWeight: "500",
                                        borderRadius: "10px",
                                   };
                         },

                    }}>
                         <MenuItem icon={<IoHome />} > Home </MenuItem>
                         <MenuItem icon={<PiVideoFill />}> Reels </MenuItem>
                         <MenuItem icon={<IoIosAddCircle />}> Create Reels </MenuItem>
                         <MenuItem icon={<IoPersonCircle />}> Profile </MenuItem>
                         <SubMenu icon={<IoIosMore />} label="More"
                              rootStyles={{
                                   backgroundColor: '#d4f2fd',
                                   color: '#075985',
                                   fontWeight: '500'
                              }}
                         >
                              <MenuItem
                                   icon={<MdManageAccounts />}> Admin Page </MenuItem>
                              <MenuItem icon={<IoMdSettings />}> Setting </MenuItem>
                              <MenuItem icon={<IoLogOut />}> Log out </MenuItem>
                         </SubMenu>
                         <div className='cursor-pointer flex justify-center align-center p-5 gap-x-4 fixed bottom-2 decoration-cyan-600'>
                              <FaGithub className='mt-1 text-base' />
                              <p className='underline underline-offset-4 decoration-sky-600 font-medium'>Visit Our Source</p>
                         </div>
                    </Menu>
               </Sidebar>
          </>
     )
}

export default SideBar;