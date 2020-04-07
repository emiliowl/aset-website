import React from 'react';

import simoneImg from './team-img/simone.jpeg';
import lunderImg from './team-img/lunder.jpeg';
import amandaImg from './team-img/amanda.jpeg';


export default class Team extends React.PureComponent {
    render() {
        return (
            <div id="especialidades" className="container">
                <hr />
                <h2 className="featurette-heading">Equipe</h2>
                <h3 className="lead">Conheça nosso time de profissionais que tem você em primeiro lugar</h3>
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                        <div className="card">
                            <img src={amandaImg} className="card-img-top" alt="quiropraxia" />
                            <div className="card-body">
                                <h5 className="card-title">&nbsp;</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={simoneImg} className="card-img-top" alt="cromoterapia" />
                            <div className="card-body">
                                <h5 className="card-title">&nbsp;</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={lunderImg} className="card-img-top" alt="mesa radiônica" />
                            <div className="card-body">
                                <h5 className="card-title">&nbsp;</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}
