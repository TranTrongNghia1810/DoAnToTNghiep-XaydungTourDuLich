import ModalCreateAccount from './ModalCreateAccount';
import {FcPlus} from 'react-icons/fc';
import { useState } from 'react';

import './ManageAccount.scss';
import TableAccount from './TableAccount';


const ManageAccount = () => {

    const [showModalCreateAccount, setShowmodalCreateAccount] = useState(false);
    return(
        <div className="manage-account-container">
            <div className="title">
                Quản lý tài khoản
            </div>
            <div className="account-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={()=>setShowmodalCreateAccount(true)}>
                        <FcPlus/>
                        Thêm tài khoản
                    </button>
                </div>
                <div className="table-account-container">
                    <TableAccount/>
                </div>
                <ModalCreateAccount 
                show={showModalCreateAccount}
                setShow={setShowmodalCreateAccount}/>
            </div>

        </div>
    )
}
export default ManageAccount;   