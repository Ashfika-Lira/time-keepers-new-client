import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import SingleBike from './SingleBike/SingleBike';
import Footer from '../../Footer/Footer';

const AllProducts = () => {
   const [bikes, setBIkes] = useState([]);
   useEffect(() => {
      fetch('https://mighty-retreat-45944.herokuapp.com/products')
         .then(res => res.json())
         .then(data => setBIkes(data))
   }, [])
   return (
      <div>
         <h2 className='review-style py-2 bg-info text-light'>All Watches</h2>
         <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
               <div className='row gx-4 row-cols-lg-3 row-cols-1 m-4'>
                  {
                     bikes.map(bike => <SingleBike key={bike._id} bike={bike}></SingleBike>)
                  }
               </div>
            </Grid>
            <Grid item xs={3} sx={{ display: { xs: 'none', md: 'block' } }}>
               <Carousel className='mt-5'>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557__480.jpg"
                        alt="First slide"
                     />
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="https://image.shutterstock.com/image-photo/luxury-watch-isolated-on-white-260nw-1233640588.jpg"
                        alt="Second slide"
                     />
                  </Carousel.Item>
               </Carousel>
               <Carousel className='mt-5'>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4LVwaqUtMFH3eIourzpcIGu50KXdLR_VrQjQdEcKO2o3hokJq2phWzIgoopQp&usqp=CAc"
                        alt="First slide"
                     />
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="Second slide"
                     />
                  </Carousel.Item>
               </Carousel>
            </Grid>
         </Grid>
         <Footer></Footer>
      </div>
   );
};

export default AllProducts;