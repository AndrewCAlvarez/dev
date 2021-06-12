import React from 'react';
import Button from 'react-bootstrap/Button';
import {ArrowUpRight} from 'react-bootstrap-icons'
import {ReactComponent as Grid} from '../grid.svg';

export class BodyContent extends React.Component{
    render(){
        return(
            <div className="BodyContent">
                <Grid/>
                <h1>PLAY WITH YOUR DATA</h1>
                <Button href="#">GET A DEMO <ArrowUpRight></ArrowUpRight></Button>
            </div>
        )
    }
}