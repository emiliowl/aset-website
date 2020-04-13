import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';

import imageBio from '../../common/team-img/amanda.jpeg';

import '../index.css';

export default class Amanda extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        AMANDA FIASQUI
                    </h1><hr />
                    <p className="text-justify">
                        Olá, me chamo Amanda Fiasqui
                    </p>
                </div>
                <div className="col-md-3 right-side-panel">
                    <Nav.Link className="w-100 no-padding" href="/agenda">
                        <Button size="lg"
                                className="aset-action w-100">
                                Agende uma consulta!
                        </Button>
                    </Nav.Link>
                    <div className="card top-margin">
                        <img src={imageBio} 
                            className="card-img-top" 
                            alt="amanda" 
                        />
                    </div>
                </div>
            </div>
        </div>);
    }

    render() {
        return (<React.Fragment>
            <Menu />
            { this.renderBody() }
            <Footer />
            <WhatsApp />
        </React.Fragment>);
    }
}