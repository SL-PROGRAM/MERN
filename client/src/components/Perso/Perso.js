import React from 'react';
import { Button } from "react-bootstrap";
import API from '../../utils/API';

export class Perso extends React.Component {
    constructor(props){
        super(props);
        this.disconnect.bind(this);
    }


    disconnect = event => {
        API.logout();
        window.location = "/";
    }



    render() {
        return(
            <div className="perso">
                <h1>Perso</h1>

                <div>Lorem ipsum </div>

                <Button
                    onClick={this.disconnect}
                    block
                    bsSize="large"
                    type="submit"
                >
                    Se déconnecter
                </Button>
            </div>
        )
    }
}