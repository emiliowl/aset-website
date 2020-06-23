import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';
import Team from '../../common/Team';

import '../../specialties/Specialties.css';

export default class AsetSocial extends React.PureComponent {

    teamMembers = ['silimatavares@gmail.com', 'lunder@lunder.com.br'];

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        Aset Social
                    </h1><hr />
                    <p className="text-justify">
                        O atendimento social é destinado as pessoas que possuem necessidade de atendimento terapêutico individual de adulto, infantil ou de adolescente e que não tenham condições financeiras para acessar um profissional de forma particular. 
                    </p>
                    <p className="text-justify">
                        O nosso atendimento social terá o valor abaixo da tabela de atendimentos normais, e serão dispobinilizados somente às quartas-feiras de 9hs às 16hs.
                    </p>
                    <p className="text-justify">
                        Obs: Devido a procura poderá haver fila de espera.
                    </p>
                    <Team teamMembers={this.teamMembers} />
                </div>
                <div className="col-md-3 right-side-panel">
                    <Nav.Link href="/calendars/default/agenda/">
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