import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';

class Slider extends Component {
    state = {  }
    render() { 
        return ( 
            <Carousel>

              {
                this.props.slides && this.props.slides.map((ele,index)=>{
                 return (<Carousel.Item>
                  <img
                    className="slide-image"
                    src={ele.photo}
                    alt="Third slide"
                  />
              
                  <Carousel.Caption>
                     {ele.html && ele.html}
                  </Carousel.Caption>
                </Carousel.Item>)
                })
              }
            {/* <Carousel.Item>
              <img
                className="slide-image"
                src={slide2}
                alt="Third slide"
              />
          
              <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            </Carousel.Item> */}
          </Carousel>
         );
    }
}
 
export default Slider;