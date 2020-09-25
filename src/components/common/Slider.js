import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import { slideInLeft,slideInRight,slideInDown,zoomIn,bounce} from 'react-animations';
import Radium, {StyleRoot} from 'radium';


const styles = {
  slideInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  },
  slideInRight:{
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInRight, 'slideInRight')
  },
  slideInDown:{
      animation:'x 1s',
      animationName: Radium.keyframes(slideInDown, 'slideInDown')
  },
  zoomIn:{
      animation:'x 1s',
      animationName: Radium.keyframes(zoomIn, 'zoomIn')
  },
  bounce:{
      animation:'x 1s',
      animationName: Radium.keyframes(bounce, 'bounce')
  },
  bounce_1:{
      animation:'x 1s',
      animationName: Radium.keyframes(bounce, 'bounce')
  }

}

class Slider extends Component {
    state = {  }
    render() { 
        return ( 
          <StyleRoot>
            <div style={styles.zoomIn}>
            <Carousel>
              {
                this.props.slides && this.props.slides.map((ele,index)=>{
                 return (<Carousel.Item key={index}>
                  <div className="slide-image-container">
                  <img
                    className="slide-image"
                    src={ele.photo}
                    alt="Third slide"
                    data-object-fit='cover'
                  />
                  </div>
                  <Carousel.Caption>
                     {ele.html && ele.html}
                  </Carousel.Caption>
                </Carousel.Item>)
                })
              }
          </Carousel>
          </div>
          </StyleRoot>
         );
    }
}
 
export default Slider;