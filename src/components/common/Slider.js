import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import slide2 from "./images/Slide2.jpeg"
import slide3 from "./images/Slide3.jpeg"
import slide4 from "./images/Slide4.jpeg"


class Slider extends Component {
    state = {  }
    render() { 
        return ( 
            <Carousel>
            <Carousel.Item>
              <img
                className="slide-image"
                src={slide2}
                alt="Third slide"
              />
          
              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slide-image"
                src={slide3}
                alt="Third slide"
              />
          
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slide-image"
                src={slide4}
                alt="Third slide"
              />
          
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
         );
    }
}
 
export default Slider;