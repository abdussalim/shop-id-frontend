import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.css"
import handleEdit from "../../../configs/redux/actions/editModalProductAction";

function EditModalProduct({id, name, stock, price, description, categories_id, transactions_id, brand, condition}){
    
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState({
        id,
        name,
        stock,
        price,
        description,
        categories_id,
        transactions_id,
        brand,
        condition
    });

    const [saveThumbnail, setSaveThumbnail] = useState(null);

    const handleUpload = (e)=>{
        setSaveThumbnail(e.target.files[0]);
    };
    console.log(data);

    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        console.log(data);
    };
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(handleEdit(id,data,saveThumbnail,setShow));
        setTimeout(window.location.reload.bind(window.location), 4000);
    }
        
    return(
        <>
            <button
                className="btn btn-success text-light"
                style={{ marginRight: "10px" }}
                onClick={handleShow}
            >
            <span><i class="bi bi-pencil-square"></i></span>
            </button>
            <Modal className="modal modal-header-background" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title ><b>EDIT ITEM</b></Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
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




export default EditModalProduct;
