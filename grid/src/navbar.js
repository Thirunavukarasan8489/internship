import { Navbar, Container, Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function Navbar1(){
    <>
    <Navbar expand="lg" style={{backgroundImage: `linear-gradient(to right, rgba(225, 0, 255, 1), rgba(0, 224, 225, 1))`,}}>
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                        className="navbar-brand"
                        activeClassName="navbar-brand--active"
                        href="#/"
                        >
                            {" "}
                            Form{" "}
                        </Nav.Link>
                        <Nav.Link
                        className="navbar-brand"
                        activeClassName="navbar-brand--active"
                        href="#/"
                        >
                            {" "}
                            layout{" "}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar.Toggle>
        </Container>
    </Navbar>
    </>
}