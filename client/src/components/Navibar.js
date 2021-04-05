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

    return(
    
        // <h1>AuthPage </h1>
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand>Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link ><NavLink to="/">Home</NavLink></Nav.Link>
                <Nav.Link ><NavLink to="/create">Create</NavLink></Nav.Link>
                    <a  onClick={logoutHandler}><Nav.Link>logout</Nav.Link></a>
                </Nav>
                <Nav>
                  <NavLink to="/auth"><Button variant="primary" className="mr-2">Log in</Button></NavLink>  
                    <Button variant="primary">Sign in</Button>
                </Nav> 
            </Navbar.Collapse>
        </Navbar>
    )
}