import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import facebook from '../assets/facebook.png'
import instagram from '../assets/insta.png'
import linkedin from '../assets/in.png'
import twitter from '../assets/twitter.png'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'
import Logo from '../assets/Software_Hub-01.svg'
import './Header.css'
const Header = () => {
  return (
    <>
    <header>
        <br></br>
        <Navbar className='header-items' expand='lg'>
            
             <Container className='ml header-container'>
                <Nav.Link>
                    <a href="/"><img src={twitter} className='px-3' alt='twitter' /></a>
                    <a href="/"><img src={facebook} className='px-3' alt='fb'/></a>
                    <a href="/"><img src={linkedin} className='px-3'  alt='in'/></a>
                    <a href="/"><img src={instagram} className='px-3' alt='insta' /></a>
                </Nav.Link>

                 <Nav.Link className='header-right'>
                    
                    <label  className='header-text'><img src={phone} className='px-2' alt='' /> 012 --- --- ----</label>
                    
                    <label  className='header-text'><img src={mail} className='px-2' alt='' />SoftwareServicesHub@gmail.com</label>
                </Nav.Link>

              </Container>
        </Navbar>
    </header>
  
    <div className='logo'>
      <img src={Logo} />
    </div>
    <div className='text-md-right'>
        <Navbar className='menu' fluid >
            <Nav.Item> <a href='/home'> Home </a></Nav.Item>
            <Nav.Item> <a href='/services'> Services </a></Nav.Item>
            <Nav.Item> <a href='/team'> Team </a></Nav.Item>
            <Nav.Item> <a href='/blog'> Blog </a></Nav.Item>
            <Nav.Item> <a href='/contact-us'> Contact Us </a></Nav.Item>
        </Navbar>
    </div>
    
    <br></br><br></br><br></br> <br></br>
    </>
  )
}

export default Header