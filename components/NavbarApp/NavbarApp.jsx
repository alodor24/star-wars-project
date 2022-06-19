import Image from 'next/image'
import Link from 'next/link'
import { 
  Container,
  Navbar, 
  Nav } from 'react-bootstrap'


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
            <Link href="/character">Characters</Link>
            <Link href="/planet">Planets</Link>
            <Link href="/film">Films</Link>
            <Link href="/specie">Species</Link>
            <Link href="/vehicle">Vehicles</Link>
            <Link href="/starship">Starships</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarApp