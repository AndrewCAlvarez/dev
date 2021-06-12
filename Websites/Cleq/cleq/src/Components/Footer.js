import React from 'react';
import {ReactComponent as MashableLogo} from '../mashable-logo.svg';

export class Footer extends React.Component{

    render(){
        return(
            <div className="Footer">
                <div className="Footer-Content">
                    <h3>The world's top companies use Cleq to turn data into revenue</h3>   
                    <MashableLogo/>
                </div>
            </div>
        )
    }
}