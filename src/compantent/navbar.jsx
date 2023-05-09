import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import "./navbar.css"

const  img1= require("./img/logo-300x93 2.png")
function Navbar() {
    return (
        <>
      <header>
      <Nav className='navbar'>
       <Container>
           <Row>
            <Col  lg={9}>
                <div className='big'>
                <i class="fa-solid fa-location-dot"></i>
            <p className='moskva'>г Москва, г Щербинка, Симферопольское шоссе, дом 16 с3</p>
                </div>
                <div></div>
        </Col>
        <Col  lg={3}>
                <div className='big'>
                <i class="fa-regular fa-clock"></i>
            <p className='moskva'>Ежедневно с 9 до 20</p>
                </div>
        </Col>
       
           </Row>
        </Container>
       </Nav>
       <Container>
        <Row className='justify-content-between'>
            <Col  lg={3}>
                <img src={img1} className='img1' alt="" />
            </Col>
            <Col lg={8}>
           <div className='big'>
           <i class="fa-solid fa-envelope"></i>
            <p className='info'>info@gazproff.ru</p>
            <i class="fa-solid fa-phone"></i>
            <p className='phone'>8(499)70-000-70</p>
            <p className='zvanok'>Заказать звонок</p>
           </div>
            </Col>
        </Row>
       </Container>
       <Container>
       <Row>
        <Col lg={3}>
            <div className='key'>
            <i class="fa-solid fa-bars"></i>
            <p className='internet'>Интернет-магазин</p>
            </div>
        </Col>
        <Col lg={9}>
            <ul className='ux'>
             <li className='list-item'>О нас</li>
             <li className='list-item'>Отопление</li>
             <li className='list-item'>Водоснабжение</li>
             <li className='list-item'>Вентиляция и кондицеонирование</li>
             <li className='list-item'>Дымоход</li>
             <li className='list-item'>Заземление</li>
             <li className='list-item'>Молниезащита</li>
             <li className='list-item'>Наши услуги</li>
            </ul>
        </Col>
       </Row>
       </Container>
      </header>
        </>
    )
}

export default Navbar
