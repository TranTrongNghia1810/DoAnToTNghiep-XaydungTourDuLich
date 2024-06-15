import SideBar from "./Sidebar";
import './Admin.scss';
import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = (props) =>{
    return(
        <div className="admin-container">
            <div className="admin-sidebar">
            <SideBar />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    
                </div>
                <div className="admin-main">
                    <Outlet/>
                </div>
            </div>
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
export default Admin;