import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SideBar = () => {
     return (
          <>
               <Sidebar>
                    <span className='p-5'>Me Social</span>
                    <Menu>
                         <SubMenu label="Charts">
                              <MenuItem> Pie charts </MenuItem>
                              <MenuItem> Line charts </MenuItem>
                         </SubMenu>
                         <MenuItem> Documentation </MenuItem>
                         <MenuItem> Calendar </MenuItem>
                    </Menu>
               </Sidebar>
          </>
     )
}

export default SideBar;