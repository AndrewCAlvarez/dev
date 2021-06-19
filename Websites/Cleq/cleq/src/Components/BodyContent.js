import React from 'react';
import Button from 'react-bootstrap/Button';
import {ArrowUpRight} from 'react-bootstrap-icons'
import Grid from '../grid.svg';
import SigmaBlob from '../sigma-blob.svg';
import DeltaBlob from '../delta-blob.svg';
import EqualsBlob from '../equals-blob.svg';
import IntegralBlob from '../integral-blob.svg';
import InfinityBlob from '../infinity-blob.svg';
import BlackBlob from '../black-blob.svg';


export class BodyContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gridHeight : "60vh",
            gridWidth : "100%",
            sigmaBlobDimensions: "width: 50px; height:50px;",
        }
    }

    render(){
        return(
            <>
                {/* Grid svg */}
                {/* <img id="body-content__grid" src={Grid} style={{ height: this.state.gridHeight, width: this.state.gridWidth }} /> */}
                <div className="body-content">
                <div>
                    <img class="blob" src={EqualsBlob} />
                    <img class="blob" src={BlackBlob} />
                    <img class="blob" src={DeltaBlob} />
                </div>
                <div className="body-content-center">
                    <h1>PLAY</h1>
                    <h1>WITH</h1>
                    <h1>YOUR</h1>
                    <h1>DATA</h1>
                    <button href="#">GET A DEMO <ArrowUpRight></ArrowUpRight></button>
                </div>
                <div>
                    <img class="blob" src={BlackBlob} />
                    <img class="blob" src={IntegralBlob} />
                    <img class="blob" src={SigmaBlob} />
                    <img class="blob" src={InfinityBlob} />
                </div>
                </div>
            </>
        )
    }
}