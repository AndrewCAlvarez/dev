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
            <div className="Footer">
                <div className="Footer-Content">
                    <h3>The world's top companies use Cleq to turn data into revenue</h3>   
                    <img src={MashableLogo} style={{ height: this.state.logoHeight, width: this.state.logoWidth }} alt="website logo"/>
                    <img src={IndeedLogo} style={{ height: this.state.logoHeight, width: this.state.logoWidth }} alt="website logo"/>
                    <img src={OrangeLogo} style={{ height: this.state.logoHeight, width: this.state.logoWidth }} alt="website logo"/>
                    <img src={AmazonLogo} style={{ height: this.state.logoHeight, width: this.state.logoWidth }} alt="website logo"/>
                </div>
            </div>
        )
    }
}