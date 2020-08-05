import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';
import Team from '../../common/Team';

import '../Specialties.css';

export default class MapaAstral extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        Mapa Astral
                    </h1><hr />
                    <p className="text-justify">
                        A Astrologia &eacute; uma ferramenta utilizada h&aacute; mil&ecirc;nios, quando nossos
                        ancestrais observavam as estrelas com o intuito de explicar e prever
                        situa&ccedil;&otilde;es e acontecimentos, e tamb&eacute;m para compreender a natureza humana
                        atrav&eacute;s dos astros no c&eacute;u.
                    </p>
                    <p className="text-justify">
                        Os astr&oacute;logos estudam h&aacute; mil&ecirc;nios os efeitos da atividade planet&aacute;ria e a sua
                        correspond&ecirc;ncia com o comportamento humano e acontecimentos. A
                        Astrologia &eacute; muito mais que o signo de nascimento que a grande maioria
                        conhece (signo solar), &eacute; uma t&eacute;cnica que possibilita um conhecimento
                        profundo da personalidade e da alma humana.
                    </p>
                    <p className="text-justify">
                        O mapa do c&eacute;u no momento do nascimento, conhecido como mapa natal ou
                        astral, &eacute; uma fotografia pessoal interpretada atrav&eacute;s do posicionamento dos
                        astros no c&eacute;u. Sua interpreta&ccedil;&atilde;o pode ajudar e orientar em todos os aspectos
                        da vida humana, proporcionando entendimento, direcionamento e
                        autoconhecimento.
                    </p>
                    <Team selectedSpecialty="Mapa Astral" />
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