import React from 'react';
import MashableLogo from '../mashable-logo.svg';
import IndeedLogo from '../indeed-logo.svg';
import OrangeLogo from '../orange-logo.svg';
import AmazonLogo from '../amazon-logo.svg';


export class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logoHeight : "5em",
            logoWidth : "5em",
        }
    }
    
    render(){
        return(
            <div className="Footer Footer-Content container-fluid">
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-9">
                        <p>The <p>world's top companies use Cleq</p> to turn data into revenue</p>   
                    </div>
                    <div className="col-sm"></div>
                </div>
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        <img src={MashableLogo} style={{ height: this.state.logoHeight, width: this.state.logoWidth }} alt="website logo"/>
                    </div>
                    <div className="col-sm">
                        <img src={IndeedLogo} style={{ height: this.state.logoHeight, width: this.state.logoWidth }} alt="website logo"/>
                    </div>
                    <div className="col-sm">
                        <img src={OrangeLogo} style={{ height: this.state.logoHeight, width: this.state.logoWidth }} alt="website logo"/>
                    </div>
                    <div className="col-sm">
                        <img src={AmazonLogo} style={{ height: this.state.logoHeight, width: this.state.logoWidth }} alt="website logo"/>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        )
    }
}