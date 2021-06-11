import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


export class Navigation extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">CLEQ</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Platform</Nav.Link>
                    <Nav.Link href="#features">Solutions</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#developers">Developers</Nav.Link>
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Button variant="outline-dark">Get a demo</Button>{' '}
                </Nav>
            </Navbar>
          </>
        );
    }
}