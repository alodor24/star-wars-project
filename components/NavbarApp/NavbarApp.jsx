import Image from 'next/image'
import { 
  Container,
  Navbar, 
  Nav } from 'react-bootstrap'


const NavbarApp = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/images/logo.png" alt="logo" width={150} height={65} layout="intrinsic" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/character">Characters</Nav.Link>
            <Nav.Link href="/planet">Planets</Nav.Link>
            <Nav.Link href="/film">Films</Nav.Link>
            <Nav.Link href="/specie">Species</Nav.Link>
            <Nav.Link href="/vehicle">Vehicles</Nav.Link>
            <Nav.Link href="/starship">Starships</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarApp