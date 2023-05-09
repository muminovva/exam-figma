import React from 'react'
import "./navbar.css"
import { Button, Col, Container, Row } from 'react-bootstrap'
const  img2 = require("./img/promishlennoe-otoplenie 1.png")
const  img3 = require("./img/radiatory 1.png")
const  img4 = require("./img/radiatory 6.png")
const  img5 = require("./img/radiatory 4.png")
const  img6 = require("./img/radiatory 5.png")
const  img7 = require("./img/Rectangle 150.png")

function Section1() {
    return (
        <>
        <Container>
          <Row>
            <Col lg={6}>
               <div className='me'>
               <h1 className='proekt'>Проектирование <br /> и монтаж инженерных систем</h1>
                <p className='chasti'> <span>---</span> частные дома</p>
                <p className='chasti'> <span>---</span>квартиры</p>
                <p className='chasti'><span>---</span>промышленные объекты</p>
                <Button className='btn'>Связаться с нами</Button>
               </div>
            </Col>
            <Col lg={5}>
                <img src={img2} alt="" />
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
                <h1 className='uslogi'> <span>Услуги</span> компании</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
                <div className='card'>
                    <img src={img2} alt="" />
                   <p className='montaj'>Монтаж системы отопления</p>
                </div>
            </Col>
            <Col lg={3}>
                <div className='card'>
                <img src={img3} alt="" />
                   <p className='montaj'>Монтаж системы отопления</p>
                </div>
            </Col>
            <Col lg={5}>
                <div className='card'>
                <img src={img4} className='img4' alt="" />
                   <p className='montaj'>Монтаж дымоходов и промышленных газоходов</p>
                </div>
            </Col>
            
          </Row>
          <Row>
            <Col lg={5}>
                <div className='card'>
                <img src={img5} className='img4' alt="" />
                   <p className='montaj'>Монтаж систем заземления и молниезащиты</p>
                </div>
            </Col>
            <Col lg={3}>
                <div className='card'>
                <img src={img6} alt="" />
                   <p className='montaj'>Монтаж систем вентиляции</p>
                </div>
            </Col>
            <Col lg={3}>
                <div className='card'>
                <img src={img7} alt="" />
                   <p className='montaj'>Акты проверки дымохода ВДПО</p>
                </div>
            </Col>
            
          </Row>
        </Container>
        </>
    )
}

export default Section1
