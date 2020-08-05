import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';

import Team from '../../common/Team';

import '../Specialties.css';

export default class TarotTerapeutico extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        Tarot Terap&ecirc;utico
                    </h1><hr />
                    <p className="text-justify">
                        A leitura de cartas &eacute; uma pr&aacute;tica milenar herdada por povos ancestrais, muito popular ainda
                        nos dias de hoje. O Tarot, uma das modalidades de leituras de cartas, possui 78 cartas
                        divididas em 22 arcanos maiores e 56 arcanos menores, que possuem em suas l&acirc;minas
                        mensagens arquet&iacute;picas que ilustram aquilo que o cliente precisa compreender no seu
                        momento atual de vida.
                    </p>
                    <p className="text-justify">
                        O Tarot Terap&ecirc;utico &eacute; uma poderosa ferramenta de autoconhecimento que possibilita
                        compreender os potenciais, desafios e as principais situa&ccedil;&otilde;es que est&atilde;o ocorrendo em
                        nossas vidas.
                    </p>
                    <p className="text-justify">
                        Muitas vezes tomamos nossas decis&otilde;es a partir de cren&ccedil;as e padr&otilde;es que, devido serem
                        inconscientes, n&atilde;o percebemos que estamos repetindo padr&otilde;es, presos a autossabotagem.
                    </p>
                    <p className="text-justify">
                        A leitura do tarot na modalidade terap&ecirc;utica promove expans&atilde;o da consci&ecirc;ncia, trazendo &agrave;
                        tona o porqu&ecirc; de alguns acontecimentos. Com os aspectos das quest&otilde;es trazidas
                        iluminados, o cliente pode escolher o caminho a seguir com muito mais clareza,
                        contribuindo para acontecerem transforma&ccedil;&otilde;es na vida pessoal!
                    </p>                    
                    <Team selectedSpecialty="Tarot Terapêutico" />
                </div>
                <div className="col-md-3 right-side-panel">
                    <Nav.Link href="/calendars/default/agenda/">
                        <Button size="lg"
                            className="aset-action">
                                Agende uma avaliação!
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