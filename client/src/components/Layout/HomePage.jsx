import React,{ Component } from "react";
import Header from "./Header";
import Carousel from 'react-bootstrap/Carousel';
// import { Header } from "semantic-ui-react";

import slider1 from '../../images/du-lich-bien.jpg';
import slider2 from '../../images/du-lich-tham-quan.jpg';
import slider3 from '../../images/du-lich-tham-hiem.jpg';
import './Carousel.scss'
// import {
//     AppAside,
//     AppFooter,
//     AppHeader
// } from '@coreui/react'
const HomePage = (props) =>{
    return(
        <div>
        <Header/>
        <Carousel data-bs-theme="light">
          <Carousel.Item>
            <img className="d-block w-100"
              src={slider1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>Du lịch biển</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Du lịch thăm quan</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Du lịch thám hiểm</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        
      </div>
    )
}
export default HomePage;