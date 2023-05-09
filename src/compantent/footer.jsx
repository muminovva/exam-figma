import React from 'react'
import "./navbar"
import { Button, Col, Container, Row } from 'react-bootstrap'
const  img9 = require("./img/logo-300x93 1.png")
const  img10 = require("./img/maps.png")

function Footer() {
    return (
        <>
       <footer>
        <div className='image'>
            <img src={img10} alt="" />
        </div>
       <Container >
           <Row>
            <Col lg={1}>
                <img src={img9} className='img9' alt="" />
            </Col>
             <Col lg={3}>
                <ul className='ul'>
                <li className='list-iteam'>О КОМПАНИИ</li>
                <li className='list'>О нас</li>
                <li className='list'>Наши преимущества</li>
                <li className='list'>Лицензии и свидетельства</li>
                <li className='list'>Наши клиенты</li>
                <li className='list'>Отзывы</li>
                <li className='list'>Статьи по темам</li>
                <li className='list'>Интернет-магазин</li>
                
                </ul>
             </Col>
             <Col lg={3}>
                <ul className='ul'>
                <li className='list-iteam'>УСЛУГИ</li>
                <li className='list'>Отопление</li>
                <li className='list'>Водоснабжение</li>
                <li className='list'>Вентиляция и кондицеонирование</li>
                <li className='list'>Дымоход</li>
                <li className='list'>Заземление</li>
                <li className='list'>Молниезащита</li>
                <li className='list'>Наши услуги</li>
                
                </ul>
             </Col>
             <Col lg={3}>
                <ul className='ul'>
                <li className='list-iteam'>КОНТАКТЫ</li>
                <li className='list'>г Москва, г Щербинка, <br /> Симферопольское шоссе, <br /> дом 16 с3</li>
                <li className='list'>8(499)70-000-70</li>
                <li className='list'>8(910)481-70-00</li>
                <li className='list'>info@gazproff.ru</li>
                <li className='list'>Ежедневно с 9:00 до 18:00</li>
                <li className='list'>Политика конфиденциальности</li>
                </ul>
             </Col>
             <Col lg={2}>
             <li className='list-iteam'>КОНТАКТЫ</li>
             <i class="fa-brands fa-vk fa-2x"></i>
             <i class="fa-brands fa-facebook fa-2x"></i>
             <i class="fa-brands fa-odnoklassniki fa-2x"></i>
             <i class="fa-brands fa-youtube fa-2x"></i>
             <Button className='btn2'>Обратный звонок</Button>
             </Col>
           </Row>
        </Container>
       </footer>
        </>
    )
}

export default Footer
