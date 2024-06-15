import {FcPlus} from 'react-icons/fc';
import { useState } from 'react';

import './ManageAccount.scss';
import ModalCreateTour from './ModalCreateTour';
import TableTour from './TableTour';


const ManageTour = () => {

    const [showModalCreateAccount, setShowmodalCreateAccount] = useState(false);
    return(
        <div className="manage-account-container">
            <div className="title">
                Quản lý Tour du lịch
            </div>
            <div className="account-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={()=>setShowmodalCreateAccount(true)}>
                        <FcPlus/>
                        Thêm tour du lịch
                    </button>
                </div>
                <div className="table-account-container">
                    <TableTour/>
                </div>
                <ModalCreateTour 
                show={showModalCreateAccount}
                setShow={setShowmodalCreateAccount}/>
            </div>

        </div>
    )
}
export default ManageTour;   