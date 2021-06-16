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
            <div className="body-content">
                <div className="row container-fluid">
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        <div className="row" id="body-content__content">
                            <h1>PLAY</h1>
                            <h1>WITH</h1>
                            <h1>YOUR</h1>
                            <h1>DATA</h1>
                        </div>
                        
                    </div>
                    <div className="col-sm"></div>
                    {/* Grid svg */}
                    {/* <img id="body-content__grid" src={Grid} style={{ height: this.state.gridHeight, width: this.state.gridWidth }} /> */}
                </div>
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        <Button href="#">GET A DEMO <ArrowUpRight></ArrowUpRight></Button>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        )
    }
}