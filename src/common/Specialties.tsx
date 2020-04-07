import React from 'react'

import img from '../img/500x500.svg';
import imgAcupt from './specialties-img/acupuntura.jpeg';
import imgFlora from './specialties-img/florais.jpeg';
import imgAroma from './specialties-img/aroma.jpeg';
import imgReiki from './specialties-img/reiki.jpeg';
import imgQuiro from './specialties-img/quiro.jpeg';
import imgBarras from './specialties-img/barras.jpeg';
import imgCromo from './specialties-img/cromo.jpeg';
import imgRadio from './specialties-img/radio.jpeg';

export default class Specialties extends React.PureComponent {
    render() {
        return (
            <div id="especialidades" className="container">
                <h2 className="featurette-heading">Especialidades</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                        <div className="card">
                            <img src={imgAcupt} className="card-img-top" alt="acupuntura" />
                            <div className="card-body">
                                <h5 className="card-title">Acupuntura</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={imgAroma} className="card-img-top" alt="aromaterapia" />
                            <div className="card-body">
                                <h5 className="card-title">Aromaterapia</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={imgBarras} className="card-img-top" alt="barras access" />
                            <div className="card-body">
                                <h5 className="card-title">Barras de Access</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3">
                    
                    <div className="col mb-4">
                        <div className="card">
                            <img src={imgCromo} className="card-img-top" alt="cromoterapia" />
                            <div className="card-body">
                                <h5 className="card-title">Cromoterapia</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={imgRadio} className="card-img-top" alt="mesa radiônica" />
                            <div className="card-body">
                                <h5 className="card-title">Mesa Radiônica</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={imgQuiro} className="card-img-top" alt="quiropraxia" />
                            <div className="card-body">
                                <h5 className="card-title">Quiropraxia</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                        <div className="card">
                            <img src={imgReiki} className="card-img-top" alt="reiki" />
                            <div className="card-body">
                                <h5 className="card-title">Reiki</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={imgFlora} className="card-img-top" alt="terapia floral" />
                            <div className="card-body">
                                <h5 className="card-title">Terapia Floral</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}