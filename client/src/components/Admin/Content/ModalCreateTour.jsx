import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import axios from 'axios';
import { toast } from 'react-toastify';
import { postCreateAccount } from '../../../services/apiServices';


const ModalCreateTour = (props) => {
    const {show, setShow} = props;
    const handleClose = () => {
        setShow(false)
        setTourName("");
        setTypeTour("");
        setPrice("");
        setDepartureDay("");
        setTime("");
        setVehicle("");
        setDescription("");

    };
    // const handleShow = () => setShow(true);
    const [tourname, setTourName] = useState("");
    const [typetour, setTypeTour] = useState("");
    const [price, setPrice] = useState("");
    const [departure_day, setDepartureDay] = useState("");
    const [time, setTime] = useState("");
    const [vehicle, setVehicle] = useState("");
    const [description, setDescription] = useState("");
    

    const handleSubmitCreate = async() =>{
        //validate
        if(!tourname){
            toast.error("Tên tour không hợp lệ")
            return;
        }
        if(!typetour){
            toast.error("Loại tour không hợp lệ")
            return;
        }
        if(!price){
            toast.error("Giá thành không hợp lệ")
            return;
        }
        if(!departure_day){
            toast.error("Ngày khởi hành không hợp lệ")
            return;
        }
        if(!time){
            toast.error("Thời gian không hợp lệ không hợp lệ")
            return;
        }
        if(!vehicle){
            toast.error("Loại phương tiện không hợp lệ")
            return;
        }

        let res = await postCreateAccount(tourname,typetour,price,departure_day,time,vehicle,description);
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
            <form className ="row g-3">
                <div className ="col-md-6">
                    <label className ="form-label">Tên Tour du lịch</label>
                    <input type="text" className ="form-control" value={tourname} onChange={(event)=>setTourName(event.target.value)} placeholder="Nhập tên tour"/>
                </div>
                <div className ="col-md-6">
                    <label className ="form-label">Loại Tour du lịch</label>
                    <input type="text" className ="form-control" value={typetour} onChange={(event)=>setTypeTour(event.target.value)} placeholder="Nhập loại tour"/>
                </div>
                <div className ="col-6">
                    <label className ="form-label">Giá thành</label>
                    <input type="text" className ="form-control" onChange={(event)=>setPrice(event.target.value)} placeholder="Nhập giá thành" />
                </div>
                <div className ="col-6">
                    <label className ="form-label">Ngày khởi hành </label>
                    <input type="date" className ="form-control" onChange={(event)=>setDepartureDay(event.target.value)}/>
                </div>
                <div className ="col-md-6">
                    <label className ="form-label">Thời gian</label>
                    <input type="number" className ="form-control" onChange={(event)=>setTime(event.target.value)} placeholder="Nhập thời gian (ngày)"/>
                </div>
                <div className ="col-md-6">
                    <label className ="form-label">Phương tiện</label>
                    <input type="text" className ="form-control" onChange={(event)=>setVehicle(event.target.value)} placeholder="Nhập phương tiện"/>
                </div>
                <div className ="col-md-12">
                    <label className ="form-label">Mô tả chuyến đi</label>
                    <input type="description" className ="form-control" placeholder="Nhập mô tả chuyến đi"/>
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
export default ModalCreateTour;