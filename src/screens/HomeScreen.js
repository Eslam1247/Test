
import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap'
import img from '../components/assets/home.png'

const HomeScreen = () => {
  return (
    <Container fluid className='ml-4 px-0'>
      <Row className='home-row'>
        <Col sm={12} xs={12} md={6} lg={6} xl={6}>
          <h1>
              End-To-End <br></br> Development
          </h1>
          <br/>
          <p className='home-text'>
            We are product developers, advisors and engineers solving <br/>
            business challenges via creating future-ready apps,<br/>
            websites and digital solutions.
          </p>
          
        </Col>
       
        <Col sm={12} xs={12} md={6} lg={5} xl={5} className='ml-3'>
          <Image fluid src={img}/>

        </Col>
      </Row>
    </Container>
  )
}

export default HomeScreen