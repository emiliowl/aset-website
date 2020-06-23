import React from 'react'

import Nav from 'react-bootstrap/Nav';

import imgAmbul from './img/ambulatorio.jpeg';
import imgSocia from './img/aset-social.jpeg';

export default class Projects extends React.PureComponent {
    render() {
        return (
            <div id="projects" className="container">
                <hr />
                <h2 className="featurette-heading">Projetos</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                        <Nav.Link className="no-padding no-color" href="/ambulatorio">
                            <div className="card">
                                <img src={imgAmbul} className="card-img-top" alt="ambulatorio" />
                                <div className="card-body">
                                    <h5 className="card-title">Ambulatório</h5>
                                </div>
                            </div>
                        </Nav.Link>
                    </div>
                    <div className="col mb-4">
                        <Nav.Link className="no-padding no-color" href="/asetsocial">
                            <div className="card">
                                <img src={imgSocia} className="card-img-top" alt="aset social" />
                                <div className="card-body">
                                    <h5 className="card-title">ASET Social</h5>
                                </div>
                            </div>
                        </Nav.Link>
                    </div>
                </div>
            </div>
        );
    }
}