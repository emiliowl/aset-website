import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';

import imageBio from '../../common/Team/team-img/camilla.png';

import '../index.css';

export default class Lunder extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                <h1 className="display-5">
                        CAMILLA MARQUES DE OLIVEIRA
                </h1><hr />
                <p className="text-justify">
                Meu nome é Camilla Marques de Oliveira e h&aacute; alguns anos trilho o caminho do cuidado atrav&eacute;s das terapias.
                Iniciei minha jornada durante minha forma&ccedil;&atilde;o como Psic&oacute;loga, e desde ent&atilde;o venho
                estudando e aperfei&ccedil;oando minhas t&eacute;cnicas de trabalho, buscando levar transforma&ccedil;&atilde;o e
                autoconhecimento aos clientes.
                </p>
                <p className="text-justify">
                Ap&oacute;s minha forma&ccedil;&atilde;o de Psic&oacute;loga pela UNICSUL , atuei na &aacute;rea cl&iacute;nica. Aos poucos fui
                me interessando e me aproximando de t&eacute;cnicas hol&iacute;sticas, iniciando pela Apometria. Aos
                poucos fui me encantando com cada transforma&ccedil;&atilde;o que eu ou clientes atendidos sentiam
                ap&oacute;s a aplica&ccedil;&atilde;o das t&eacute;cnicas.
                </p>
                <p className="text-justify">
                Quando descobri que um dos meus talentos era a leitura das cartas de Tarot, passei a fazer
                consultas e, desde ent&atilde;o, tenho me dedicado aos atendimentos na modalidade hol&iacute;stica.
                Aos poucos fui estudando mais &aacute;reas e expandindo meus conhecimentos. Hoje possuo
                forma&ccedil;&atilde;o em Astrologia e Constela&ccedil;&atilde;o Familiar. Na Psicologia me dediquei &agrave; &aacute;rea da
                Psican&aacute;lise, em uma p&oacute;s gradua&ccedil;&atilde;o em Psicologia Cl&iacute;nica Psicanal&iacute;tica pela PUC-SP.
                </p>
                <p className="text-justify">
                Atualmente realizo atendimentos em Tarot Terap&ecirc;utico, Astrologia e Constela&ccedil;&atilde;o Familiar,
                al&eacute;m de trabalhar como volunt&aacute;ria em um grupo de Apometria.
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
                            alt="camilla" 
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