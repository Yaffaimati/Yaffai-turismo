
import Navbar from 'react-bootstrap/Navbar';
import {Container,Nav} from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from "react-router-dom";

 const NavBar = ({inHeader, laClase}) => {
  
  return (
  
    <nav className={laClase}>
   <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Turismo</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink to="/categoria/excursiones">{inHeader ? "Excursiones":"Montaña"}</NavLink>
      <NavLink to="/categoria/rios">{inHeader ? "playas":"Rios"}</NavLink>
      <NavLink to="/categoria/hospedajes">{ laClase ? "restauranes":"Gastronomia"}</NavLink>
    </Nav>
    </Container>
    <CartWidget/>
  </Navbar>
  
  </nav>
    

  )
}

export default NavBar