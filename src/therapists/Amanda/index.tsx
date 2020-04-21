import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';

import imageBio from '../../common/Team/team-img/amanda.jpeg';

import '../index.css';

export default class Amanda extends React.PureComponent {
    
    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        AMANDA FIASQUI
                    </h1><hr />
                    <p className="text-justify">
                        Eu sou Amanda, tenho formação em Segurança do trabalho e Gestão da Qualidade. Minhas áreas de atuação, apesar de técnicas, sempre visaram o cuidado com o próximo. Algo que sempre tive comigo: a curiosidade e a disposição em colaborar com os demais. Com a minha curiosidade em conhecer o outro, sempre li muito sobre psicologia e comportamento humano até que entrei em um processo de autoconhecimento. 
                    </p>
                    <p className="text-justify">
                        Foi quando descobri habilidades que desconhecia até então. Fiz uso de diversas técnicas de terapias e entre elas, descobri que poderia ajudar outras pessoas e há cerca de um ano e meio me formei na primeira técnica de terapia holística: Barras de Access. 
                    </p>
                    <p className="text-justify">
                        Esta terapia transformou minha vida e forma de pensar, e abriu possibilidades para que eu estudasse outras formas de estar em contato e cuidar do próximo.
                    </p>
                    <p className="text-justify">
                        Tenho ainda um belo caminho a trilhar para cada vez mais estar apta a ajudar pessoas em seus processos de evolução e colaborar com a expansão de consciência do nosso planeta.
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
                            alt="amanda" 
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