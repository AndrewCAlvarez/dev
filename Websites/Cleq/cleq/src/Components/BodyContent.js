import React from 'react';
import Button from 'react-bootstrap/Button';
import {ArrowUpRight} from 'react-bootstrap-icons'
import Grid from '../grid.svg';

export class BodyContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gridHeight : "60vh",
            gridWidth : "100%",
        }
    }

    render(){
        return(
            <>
                {/* Grid svg */}
                {/* <img id="body-content__grid" src={Grid} style={{ height: this.state.gridHeight, width: this.state.gridWidth }} /> */}
                <div className="body-content">
                <div></div>
                <div className="body-content-center">
                    <h1>PLAY</h1>
                    <h1>WITH</h1>
                    <h1>YOUR</h1>
                    <h1>DATA</h1>
                    <button href="#">GET A DEMO <ArrowUpRight></ArrowUpRight></button>
                </div>
                <div></div>
                </div>
            </>
        )
    }
}