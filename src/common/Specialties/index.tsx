import React from 'react'

import Nav from 'react-bootstrap/Nav';

import imgAcupt from './specialties-img/acupuntura.jpeg';
import imgFlora from './specialties-img/florais.jpeg';
import imgAroma from './specialties-img/aroma.jpeg';
import imgReiki from './specialties-img/reiki.jpeg';
import imgQuiro from './specialties-img/quiro.jpeg';
import imgBarras from './specialties-img/barras.jpeg';
import imgCromo from './specialties-img/cromo.jpeg';
import imgRadio from './specialties-img/radio.jpeg';
import imgAstro from './specialties-img/astrologia.png';
import imgConst from './specialties-img/constelacao.png';
import imgMedit from './specialties-img/meditacao.png';
import imgTarot from './specialties-img/tarot-terap.png';

export default class Specialties extends React.PureComponent {
    render() {
        return (
            <div id="especialidades" className="container">
                <h2 className="featurette-heading">Especialidades</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                        <Nav.Link className="no-padding no-color" href="/acupuntura">
                            <div className="card">
                                <img src={imgAcupt} className="card-img-top" alt="acupuntura" />
                                <div className="card-body">
                                    <h5 className="card-title">Acupuntura</h5>
                                </div>
                            </div>
                        </Nav.Link>
                    </div>
                    <div className="col mb-4">
                        <Nav.Link className="no-padding no-color" href="/aromaterapia">
                            <div className="card">
                                <img src={imgAroma} className="card-img-top" alt="aromaterapia" />
                                <div className="card-body">
                                    <h5 className="card-title">Aromaterapia</h5>
                                </div>
                            </div>
                        </Nav.Link>
                    </div>
                    <div className="col mb-4">
                        <Nav.Link className="no-padding no-color" href="/barras">
                            <div className="card">
                                <img src={imgBarras} className="card-img-top" alt="barras access" />
                                <div className="card-body">
                                    <h5 className="card-title">Barras de Access</h5>
                                </div>
                            </div>
                        </Nav.Link>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">        
                        <Nav.Link className="no-padding no-color" href="/constelacao-familiar">
                            <div className="card">
                                <img src={imgConst} className="card-img-top" alt="constelação familiar" />
                                <div className="card-body">
                                    <h5 className="card-title">Constela&ccedil;&atilde;o familiar</h5>
                                </div>
                            </div>
                        </Nav.Link>
                    </div>
                    <div className="col mb-4">        
                        <Nav.Link className="no-padding no-color" href="/cromoterapia">
                            <div className="card">
                                <img src={imgCromo} className="card-img-top" alt="cromoterapia" />
                                <div className="card-body">
                                    <h5 className="card-title">Cromoterapia</h5>
                                </div>
                            </div>
                        </Nav.Link>
                    </div>
                    <div className="col mb-4">
                        <Nav.Link className="no-padding no-color" href="/mapa-astral">
                            <div className="card">
                                <img src={imgAstro} className="card-img-top" alt="mapa astral" />
                                <div className="card-body">
                                    <h5 className="card-title">Mapa Astral</h5>
                                </div>
                            </div>
                        </Nav.Link>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                        <Nav.Link className="no-padding no-color" href="/meditacao">
                            <div className="card">
                                <img src={imgMedit} className="card-img-top" alt="meditação" />
                                <div className="card-body">
                                    <h5 className="card-title">Medita&ccedil;&atilde;o</h5>
                                </div>
                            </div>
                        </Nav.Link>
                    </div>
                    <div className="col mb-4">
                        <Nav.Link className="no-padding no-color" href="/mesa-radionica">
                            <div className="card">
                                <img src={imgRadio} className="card-img-top" alt="mesa radiônica" />
                                <div className="card-body">
                                    <h5 className="card-title">Mesa Radiônica</h5>
                                </div>
                            </div>
                        </Nav.Link>
                    </div>
                    <div className="col mb-4">
                        <Nav.Link className="no-padding no-color" href="/quiro">
                            <div className="card">
                                <img src={imgQuiro} className="card-img-top" alt="quiropraxia" />
                                <div className="card-body">
                                    <h5 className="card-title">Quiropraxia</h5>
                                </div>
                            </div>
                        </Nav.Link>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                        <Nav.Link className="no-padding no-color" href="/reiki">
                            <div className="card">
                                <img src={imgReiki} className="card-img-top" alt="reiki" />
                                <div className="card-body">
                                    <h5 className="card-title">Reiki</h5>
                                </div>
                            </div>
                        </Nav.Link>
                    </div>
                    <div className="col mb-4">
                        <Nav.Link className="no-padding no-color" href="/tarot-terapeutico">
                            <div className="card">
                                <img src={imgTarot} className="card-img-top" alt="terapia floral" />
                                <div className="card-body">
                                    <h5 className="card-title">Tarot Terap&ecirc;utico</h5>
                                </div>
                            </div>
                        </Nav.Link>
                    </div>
                    <div className="col mb-4">
                        <Nav.Link className="no-padding no-color" href="/floral">
                            <div className="card">
                                <img src={imgFlora} className="card-img-top" alt="terapia floral" />
                                <div className="card-body">
                                    <h5 className="card-title">Terapia Floral</h5>
                                </div>
                            </div>
                        </Nav.Link>
                    </div>
                </div>
            </div>
        );
    }
}