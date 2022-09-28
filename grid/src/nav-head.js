import { Navbar, Container, Nav } from "react-bootstrap";
import './style.css';



 export default function Navh(){

    return(
        <>
        <Navbar>
                <Nav.Link
                className="brand"
                >About Program
                </Nav.Link>
        </Navbar>
        </>
    );
 }