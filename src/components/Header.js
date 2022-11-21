import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo2.svg'

const Header = () => {
  return (
    <header className='main-header'>
      <Navbar collapseOnSelect expand='lg'>
        <Container>
          <Navbar.Brand>
            <Image src={logo} alt='logo' width='150' height='40' />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            className='toggle'
          />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='justify-content-end '
          >
            <Nav>
              <Link href='https://wa.link/nugajg'>
                <a target='_blank'>
                  <span className='live-updates'>Live updates</span>
                </a>
              </Link>
              <Link href='/'>
                <a> Home </a>
              </Link>
              <Link href='/'>
                <a> How it works </a>
              </Link>
              <Link href='/'>
                <a> Help </a>
              </Link>
              <Link href='/signin'>
                <a> Login </a>
              </Link>
            </Nav>
            <Nav>
              <Link href='/signup'>
                <a className='btnStyle'>Sign up</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
