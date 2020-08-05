import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';

import imageBio from '../../common/Team/team-img/tatyana.png';

import '../index.css';

export default class Lunder extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        TATYANA MENEZES
                    </h1><hr />
                    <p className="text-justify">
                    Meu nome &eacute; Tatyana Menezes sou Instrutora/Professora de Medita&ccedil;&atilde;o v&eacute;dica Jyoti, Terapeuta Hol&iacute;stica e p&oacute;s-graduanda em Psicologia Transpessoal e facilitadora de t&eacute;cnicas vibracionais naturais.
                    Sou Master Coach e Practitioner PNL, Ci&ecirc;ncias Humanas e Comunicadora. Sou et&eacute;rna aprendiz e o meu caminho tem um cora&ccedil;&atilde;o, apaixonada por medita&ccedil;&atilde;o, por cristais/gemas, pelo mar e por cachoeiras.
                    </p>
                    <p className="text-justify">
                    Minha Forma&ccedil;&atilde;o Hol&iacute;stica começou ao longo de 15 anos atr&aacute;s, atrav&eacute;s da minha pr&oacute;pria busca por autoconhecimento com muita experi&ecirc;ncia e viv&ecir;ncia em
                    diversas t&eacute;cnicas integrativas Naturais como: Medita&ccedil;&atilde;o, Reiki Tradicional e Magnificado Master Nível IV, Cromoterapia, Radiestesia e Radi&ocirc;nica,Apometria Cl&acute;ssica, 
                    Qu&acirc;ntica e Xam&acirc;nica, Magnifield e Light healing,Cura Pr&acirc;nica, Toque Energ&eacute;tico, Alinhamento de Chakras e Aura, Cristaloterapia(Cristais), 
                    Cura Qu&acirc;ntica Estelar, Orix&aacute; Reiki Estelar, Cartas Terap&ecirc;uticas.
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
                            alt="tatyana" 
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