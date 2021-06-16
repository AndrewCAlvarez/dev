import React from 'react';
import Button from 'react-bootstrap/Button';


export class Navigation extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <div className="nav nav-grid nav-row">
                <div className="nav-item-0">
                    <a className="nav-brand" href="#home">CLEQ</a>
                </div>
                <div className="nav-item-1">
                    <a href="#home">Platform</a>
                    <a href="#features">Solutions</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#developers">Developers</a>
                </div>
                <div className="nav-item-2">
                        <a href="#login">Login</a>
                        <button variant="outline-dark">Get a demo</button>{' '}
                </div>
            </div>
          </>
        );
    }
}