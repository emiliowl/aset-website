import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';

import imageBio from '../../common/Team/team-img/lunder.jpeg';

import '../index.css';

export default class Lunder extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        LUNDER J.R.S. VENTURA NASCIMENTO
                    </h1><hr />
                    <p className="text-justify">
                        Olá, me chamo Lunder Nascimento, sou fisioterapeuta formado pela Universidade do Grande ABC,
                        Pós-graduado em Fisiologia do Esporte, pela Faculdade de Medicina da Universidade de São Paulo
                        IOTHC-FCMUSP, Pós-Graduado em Acupuntura, pela Universidade FMU, aperfeiçoamento e
                        vivência em Beijing-China, pela federação mundial de Medicina Tradicional Chinesa – WFCMS,
                        aperfeiçoamento e participação do primeiro congresso mundial de Medicina Tradicional Chinesa
                        em Estoril-Portugal.
                    </p>
                    <p className="text-justify">
                        Atuo há 16 anos na região do Grande ABC, com as mais diversas técnicas de Medicina Tradicional Chinesa, Japonesa (Craniopuntura) e Quiropraxia.
                    </p>
                    <p className="text-justify">
                        Atuo também ministrando aulas nos cursos de Acupuntura (Formação e Curso Livre) e Técnicas Manipulativas (Quiropraxia)
                    </p>
                </div>
                <div className="col-md-3 right-side-panel">
                    <Nav.Link className="w-100 no-padding" href="/calendars/default/agenda/">
                        <Button size="lg"
                                className="aset-action w-100">
                                Agende uma consulta!
                        </Button>
                    </Nav.Link>
                    <div className="card top-margin">
                        <img src={imageBio} 
                            className="card-img-top" 
                            alt="lunder" 
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