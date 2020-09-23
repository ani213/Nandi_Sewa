import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';

class Slider extends Component {
    state = {  }
    render() { 
        return ( 
            <Carousel>

              {
                this.props.slides && this.props.slides.map((ele,index)=>{
                 return (<Carousel.Item key={index}>
                  <img
                    className="slide-image"
                    src={ele.photo}
                    alt="Third slide"
                    data-object-fit='cover'
                  />
                  <Carousel.Caption>
                     {ele.html && ele.html}
                  </Carousel.Caption>
                </Carousel.Item>)
                })
              }
          </Carousel>
         );
    }
}
 
export default Slider;