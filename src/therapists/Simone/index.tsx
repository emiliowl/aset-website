import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';

import imageBio from '../../common/team-img/simone.jpeg';

import '../index.css';

export default class Simone extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        SIMONE L. TAVARES
                    </h1><hr />
                    <p className="text-justify">
                        Meu nome é Simone, sou fundadora da Aset Terapias Holísticas e uma eterna buscadora do autoconhecimento e apaixonada pelo cuidado.
                    </p>
                    <p className="text-justify">
                    Minha primeira formação foi na área de exatas (Analise de sistemas), porém a busca pelo autoconhecimento e a paixão pelo cuidado me despertou o interesse em técnicas naturais para a promoção da saúde e bem-estar, assim, iniciei minha jornada por este universo fascinante!
                    </p>
                    <p className="text-justify">
                        Comecei meus estudos na escola de alquimia com a formação em terapia floral, sistema Joel Aleixo (2011), e paralelamente a pós-graduação em Terapias Holísticas Vibracionais (2012). 
                        Formação no curso Agentes Promotores de Saúde pela FEAL – Uniespírito com o Dr. Sergio Felipe – Médico Neurocientista, pesquisador da Pineal.
                    </p>
                    <p className="text-justify">
                        Formação em Acupuntura pelo Ebramec / Instituto Shentao, com especialização em Beijing-China, pela federação mundial de Medicina Tradicional Chinesa – WFCMS (2018).
                        Graduanda do Curso de Enfermagem pela USCS, conclusão em 2020.
                    </p>
                    <p className="text-justify">
                        E hoje com 10 anos de experiência em atendimentos, atuo com as mais diversas técnicas integrativas e complementares como Reiki, Aromaterapia, Cromoterapia, Mesas Radiônicas Quanticas.
                    </p>
                </div>
                <div className="col-md-3 right-side-panel">
                    <Nav.Link  className="w-100 no-padding" href="/agenda">
                        <Button size="lg"
                                className="aset-action w-100">
                                Agende uma consulta!
                        </Button>
                    </Nav.Link>
                    <div className="card top-margin">
                        <img src={imageBio} 
                            className="card-img-top" 
                            alt="simone" 
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