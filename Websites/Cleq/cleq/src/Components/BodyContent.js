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
                <div className="blob0">
                    <img class="blob" src={EqualsBlob} />
                </div>
                <div className="blob1">
                    <img class="blob black-blob" src={BlackBlob} />
                </div>
                <div className="blob2">
                    <img class="blob" src={DeltaBlob} />
                </div>
                    <div className="body-content-center">
                        <h1>PLAY</h1>
                        <h1>WITH</h1>
                        <h1>YOUR</h1>
                        <h1>DATA</h1>
                        <button href="#">GET A DEMO <ArrowUpRight></ArrowUpRight></button>
                    </div>
                    <div className="blob3 blob4">
                        <img class="blob black-blob" src={BlackBlob} />
                        <img class="blob" src={IntegralBlob} />
                    </div>
                    <div className="blob5">
                        <img class="blob" src={SigmaBlob} />
                    </div>
                    <div className="blob6">
                        <img class="blob" src={InfinityBlob} />
                    </div>
                </div>
            </>
        )
    }
}