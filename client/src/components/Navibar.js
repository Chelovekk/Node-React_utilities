import React, { useContext } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Button} from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext'
import { NavLink, useHistory} from 'react-router-dom'


export default function Navibar() {
    const history = useHistory()
    const auth = useContext(AuthContext)
    
    const logoutHandler = event =>{
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    if(auth.isAuthenticated){
        return(
    
            // <h1>AuthPage </h1>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
                <Navbar.Brand>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link ><NavLink to="/">Home</NavLink></Nav.Link>
                    <Nav.Link ><NavLink to="/cabinet">Cabinet</NavLink></Nav.Link>
                        <a  onClick={logoutHandler}><Nav.Link>logout</Nav.Link></a>
                    </Nav>
                    <Nav>
                      <Button onClick={logoutHandler} variant="primary" className="mr-2">Logout</Button>
                      <NavLink  to="/auth"><Button variant="primary" className="mr-2" >Cabinet</Button></NavLink>  
    
                    </Nav> 
    
                </Navbar.Collapse>
            </Navbar>
        )
    } else{
        return(
    
            // <h1>AuthPage </h1>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
                <Navbar.Brand>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link ><NavLink to="/">Home</NavLink></Nav.Link>
                    <Nav.Link ><NavLink to="/cabinet">Cabinet</NavLink></Nav.Link>
                        <a  onClick={logoutHandler}><Nav.Link>logout</Nav.Link></a>
                    </Nav>
                    <Nav>
                      <NavLink to="/auth"><Button variant="primary" className="mr-2">Log in</Button></NavLink>  
    
                    </Nav> 
    
                </Navbar.Collapse>
            </Navbar>
        )
    }

    
}