import Image from 'next/image'
import Link from 'next/link'
import { 
  Container,
  Navbar, 
  Nav } from 'react-bootstrap'
import { Navigation } from './constants'


const NavbarApp = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={150} height={65} layout="intrinsic" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {Navigation.map(item => (
              <Link key={item.id} href={item.path}>{item.text}</Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarApp