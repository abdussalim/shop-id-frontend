import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.css"
import { useDispatch } from "react-redux";
import handleCreate from "../../../configs/redux/actions/createModalProductAction";

function CreateModalProduct(){

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState({
        name:"",
        stock:"",
        price:"",
        description:"",
        categories_id:"",
        transactions_id:"",
        brand:"",
        condition:""
    })

    const [saveThumbnail, setSaveThumbnail] = useState(null)

    const handleUpload = (e)=>{
        const uploadFile = e.target.files[0];
        setSaveThumbnail(uploadFile);
    }
    
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value,
        });
        console.log(data);
    };
    
    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(handleCreate(data, saveThumbnail, setShow));
        setTimeout(window.location.reload.bind(window.location), 4000);
    }

    return(
        <>
        <button className="btn btn-success w-25" onClick={handleShow}>
        <b><i class="bi bi-plus-lg">&nbsp;PRODUCT&nbsp;</i> <i class="bi bi-box-seam"></i></b>
        </button>
        <Modal className="modal text-white" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><b>ADD ITEM</b></Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSumbit}>
                <Modal.Body>
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="name"
                        name="name"
                        value={data.name}
                        autocomplete="off"
                        onChange={handleChange}
                    />
                    <input 
                        className="form-control mt-3"
                        type="text"
                        placeholder="stock"
                        name="stock"
                        value={data.stock}
                        autocomplete="off"
                        onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="price"
                        name="price"
                        value={data.price}
                        autocomplete="off"
                        onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="description"
                        name="description"
                        value={data.description}
                        autocomplete="off"
                        onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="hidden"
                        placeholder="categories id"
                        name="categories_id"
                        value={data.categories_id}
                        autocomplete="off"
                        onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="hidden"
                        placeholder="transactions id"
                        name="transactions_id"
                        value={data.transactions_id}
                        autocomplete="off"
                        onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="brand"
                        name="brand"
                        value={data.brand}
                        autocomplete="off"
                        onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="condition"
                        name="condition"
                        value={data.condition}
                        autocomplete="off"
                        onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="file"
                        placeholder="thumbnail"
                        name="thumbnail"
                        autocomplete="off"
                        onChange={handleUpload}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" className="btn btn-success button-border-radius">
                        Create
                    </Button>
                    <Button className="btn btn-danger button-border-radius" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
        </>
    );
}

export default CreateModalProduct;