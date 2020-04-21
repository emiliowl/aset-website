import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';
import Team from '../../common/Team';

import '../../specialties/Specialties.css';

export default class Ambulatorio extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        Ambulatório Aset
                    </h1><hr />
                    <p className="text-justify">
                        As Práticas Integrativas e Complementares (PICS) são tratamentos que utilizam recursos terapêuticos baseados em conhecimentos tradicionais, voltados para prevenir diversas doenças e em alguns casos, também podem ser usadas como tratamentos paliativos em doenças crônicas.
                    </p>
                    <p className="text-justify">
                        Evidências científicas têm mostrado os benefícios do tratamento integrado entre medicina convencional e práticas integrativas e complementares.
                    </p>
                    <p className="text-justify">
                        O ambulatório ASET é mais uma iniciativa para tornar estas técnicas de fácil acesso para toda a população.
                    </p>
                    <ul>
                        <li>Nosso ambulatório ocorre uma vez por mês com atendimentos de 30min a um valor simbólico cada atendimento.</li>
                        <li>Os atendimentos são com hora marcada, e as vagas são limitadas!</li>
                        <li>Fique de olho nas próximas datas e garanta sua vaga!</li>
                    </ul>
                    <Team />
                </div>
                <div className="col-md-3 right-side-panel">
                    <Nav.Link href="/calendars/ambulatorio/agenda/">
                        <Button size="lg"
                            className="aset-action">
                                Agende seu horário!
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