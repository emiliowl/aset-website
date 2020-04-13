import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';
import Team from '../../common/Team';

import '../Specialties.css';

export default class Barras extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        Barras de Access &reg;
                    </h1><hr />
                    <p className="lead">
                        Como seria enxergar milhões de possibilidades?
                    </p>
                    <p className="lead">
                        E se você percebesse o quão infinito é? 
                    </p>
                    <p className="lead">
                        E se pudesse criar uma nova realidade, você escolheria?
                    </p>
                    <p className="text-justify">
                        Barras de Access &reg; é uma técnica revolucionária, capaz de criar novas sinapses cerebrais, fazendo uma reprogramação mental, desenvolvendo paz, alívio, alegria, harmonia, alinhamento energético, empoderamento e acesso às infinitas possibilidades.
                    </p>
                    <Team selectedSpecialty="Barras de Access" />
                </div>
                <div className="col-md-3 right-side-panel">
                    <Nav.Link href="/agenda">
                        <Button size="lg"
                            className="aset-action">
                                Agende uma avaliação!
                        </Button>
                    </Nav.Link>
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