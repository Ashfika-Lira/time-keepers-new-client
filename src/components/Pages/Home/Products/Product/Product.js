import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCart from '../../../../../hooks/useCart';

const Product = ({ bike }) => {
   const { img, bikeName } = bike;

   const { setCart } = useCart();
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);

   const handlePurches = () => {
      setShow(true);
   };

   const handleAddCart = id => {
      setCart(id)
   };
   return (
      <div class="col">
         <div class="card h-100">
            <img className='img-fluid p-4 border rounded' src={img} alt="" />
            <div class="card-body">
               <h5 class="card-title">{bikeName}</h5>
               <p class="card-text"> A watch is a portable timepiece intended to be carried or worn by a person. ... During most of its history the watch was a mechanical device, driven by clockwork, powered by winding a mainspring, and keeping time with an oscillating balance wheel. These are called mechanical watches. </p>

            </div>
            <div class="card-footer">
               <Button onClick={handlePurches} className='bg-info' variant='contained' >Purches</Button>
            </div>
         </div>
         <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
               <Modal.Title className='text-success'>{bikeName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do You want to Add This In Your Cart!</Modal.Body>
            <Modal.Footer>
               <Button className='bg-info' variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={() => handleAddCart(bike._id)}>
                  <Link className='btn btn-success' to='/purches'>Purches Now</Link>
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};

export default Product;