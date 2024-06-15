import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import axios from 'axios';
import { toast } from 'react-toastify';
import { postCreateAccount } from '../../../services/apiServices';


const ModalCreateAccount = (props) => {
    const {show, setShow} = props;
    const handleClose = () => {
        setShow(false)
        setUsername("");
        setPassword("");
        setRole("");
    };
    // const handleShow = () => setShow(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Customer");
    

    const handleSubmitCreate = async() =>{
        //validate
        if(!username){
            toast.error("Tài khoản không hợp lệ")
            return;
        }
        if(!password){
            toast.error("Mật khẩu không hợp lệ")
            return;
        }

        //call API
        // let data = {
        //     username: username ,
        //     password: password,
        //     role: role
        // }
        // console.log(data)

        let res = await postCreateAccount(username,password,role);
        console.log(res.data);
    }
    return (
        <>
        {/* <Button variant="primary" onClick={handleShow}>
            Thêm Tài Khoản
        </Button> */}
    
        <Modal className='modal-add-account' show={show} onHide={handleClose} size='xl'> 
            <Modal.Header closeButton>
            <Modal.Title>Thêm Tài Khoản</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Tên đăng nhập</label>
                    <input type="username" className="form-control" value={username} onChange={(event)=>setUsername(event.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Mật khẩu</label>
                    <input type="password" className="form-control" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Vai trò</label>
                    <select className="form-select" value={role} onChange={(event)=>setRole(event.target.value)}>
                    <option value="Admin">Admin</option>
                    <option value="Customer">Customer</option>
                    </select>
                </div>
            </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Huỷ
            </Button>
            <Button variant="primary" onClick={()=> handleSubmitCreate()}>
                Lưu
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}
export default ModalCreateAccount;