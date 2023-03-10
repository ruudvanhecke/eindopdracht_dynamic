import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function CustomNavbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">MovieStar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/movies">Movies</Nav.Link>
                        <Nav.Link href="/directors">Directors</Nav.Link>
                        <Nav.Link href="/favorites">My Favorites</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomNavbar;