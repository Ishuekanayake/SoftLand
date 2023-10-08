import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from './Images/cr1.PNG';
import Img2 from './Images/cr2.PNG';
import Img3 from './Images/cr3.PNG';

export default function review() {
  return (
    <div className='container'>
        <Row className='ha1row mt-5 mb-5'>
            <div><center><h1 className='h1'>Review From <br/> Our Users</h1></center></div>
        </Row>

        <Row className='rv-row2'>
        <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-75"
          src={Img1}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-75"
          src={Img2}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src={Img3}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Row>
    </div>
  )
}
