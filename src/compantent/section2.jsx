import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./navbar"
const  img11= require("./img/Group (5).png")
const  img12= require("./img/noun_delivery_2294063 1.png")
const  img13= require("./img/Vector (14).png")
const  img14= require("./img/Vector (15).png")
const  img15= require("./img/noun_guarantee_2072482 1.png")
const  img16= require("./img/Vector (16).png")
const  img17= require("./img/noun_Document_2929551 (1) 1.png")
const  img18= require("./img/Group (6).png")
const  img19= require("./img/Group (17).png")
const  img20= require("./img/Group (7).png")
const  img21= require("./img/noun_Car_2164405 1.png")

function Section2() {
    return (
        <>
        <Container>
          <Row>
            <Col lg={6}>
                <h1 className='nawi'>Наши <span>преимущества</span></h1>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col lg={2}>
                <img src={img11} className='img11' alt="" />
                <p className='besplatniy'>Бесплатная консультация специалиста</p>
            </Col>
            <Col lg={2}>
                <img src={img12} className='img11' alt="" />
                <p className='besplatniy'>Выезд на объект в удобное для вас время</p>
            </Col>
            <Col lg={3}>
                <img src={img13} className='img12' alt="" />
                <p className='besplatniy'>Экспертная помощь в выборе идеального для Вас решения</p>
            </Col>
            <Col lg={2}>
                <img src={img14} className='img11' alt="" />
                <p className='besplatniy'>Гибкая система скидок</p>
            </Col>
            <Col lg={2}>
                <img src={img15} className='img11' alt="" />
                <p className='besplatniy'>Гарантийные обязательства от 12 мес.</p>
            </Col> 
            <Col lg={2}>
                <img src={img16} className='img11' alt="" />
                <p className='besplatniy'>Бесплатная консультация специалиста</p>
            </Col>
            <Col lg={2}>
                <img src={img17} className='img11' alt="" />
                <p className='besplatniy'>Бесплатная консультация специалиста</p>
            </Col>
            <Col lg={2}>
                <img src={img18} className='img11' alt="" />
                <p className='besplatniy'>Бесплатная консультация специалиста</p>
            </Col>
            <Col lg={2}>
                <img src={img19} className='img11' alt="" />
                <p className='besplatniy'>Бесплатная консультация специалиста</p>
            </Col>
            <Col lg={2}>
                <img src={img20} className='img11' alt="" />
                <p className='besplatniy'>Бесплатная консультация специалиста</p>
            </Col>
            <Col lg={2}>
                <img src={img21} className='img11' alt="" />
                <p className='besplatniy'>Бесплатная консультация специалиста</p>
            </Col>
            
          </Row>
        </Container>
        </>
    )
}

export default Section2
