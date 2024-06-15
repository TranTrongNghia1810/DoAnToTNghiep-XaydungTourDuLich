import {FaGem, FaRegFolder,FaRegUser} from 'react-icons/fa';
import {
    Menu,
    MenuItem,
    SubMenu,
    Sidebar
} from "react-pro-sidebar";
import { Link } from 'react-router-dom';

import ImgBG from '../../images/background.jpg'
import './Admin.scss';

const SideBar = (props) =>{
    const {collapsed,toggled,handleToggleSidebar} = props;
    return(
        <Sidebar className='pro-sidebar'
        image={ImgBG}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
        >
            <Sidebar className='sidebar-header'>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        forntWeight: 'bold',
                        letterSpacing:'1px',
                        overflow:'hidden',
                        textOverflow:'ellipsis',
                        whiteSpace:'nowrap',
                        textAlign:'center',
                        fontSize:'25px',
                    }}
                >
                    Tour & Travel
                </div>
            </Sidebar>

            <Sidebar>
                <Menu iconShape='circle'>
                    <MenuItem href='/admins/manage-tours'
                        icon={<FaRegFolder/>}
                    >
                        Tour du lịch
                    </MenuItem>
                    <MenuItem href='/admins/manage-accounts'
                        icon={<FaRegUser/>}
                    >
                        Tài Khoản

                    </MenuItem>
                    <MenuItem href='/admins'
                        icon={<FaGem/>}
                    >
                        Giảm giá
                    </MenuItem>
                    {/* <SubMenu
                        icon={<FaGem/>}
                        title="Tính năng"
                    >
                        <MenuItem>1</MenuItem>
                        <MenuItem>Quản lý khuyến mãi</MenuItem>
                        <MenuItem>3</MenuItem>
                    </SubMenu> */}
                    
                </Menu>
            </Sidebar>
        </Sidebar>
    )
}

export default SideBar;