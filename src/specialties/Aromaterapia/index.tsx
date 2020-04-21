import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';
import Team from '../../common/Team';

import '../Specialties.css';

export default class Aromaterapia extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        Aromaterapia
                    </h1><hr />
                    <p className="text-justify">
                        A Aromaterapia é uma terapia natural que existe desde o antigo Egito, comprovada pela ciência, que tem como objetivo principal tratar e curar doenças através do uso de óleos essenciais, que são feitos de plantas medicinais com suas propriedades terapêuticas através do princípio ativo de cada planta, sendo assim 100% puro.
                        As plantas passam por processos onde é possível extrair o óleo da essência de suas folhas, flores, cascas, caules, brotos, ramos ou raízes usando destilação a vapor ou a frio.
                    </p>
                    <p className="text-justify">
                        Estas propriedades terapêuticas ajudam a resgatar a sensação de bem-estar, agindo nas doenças do corpo físico e nos estados emocionais em desequilíbrio.
                    </p>
                    <p className="text-justify">
                        Esta maravilhosa técnica da Medicina Tradicional Chinesa, é excelente para tratar diversos tipos de desequilíbrios, sejam eles físicos ou psicoemocionais pois sua abordagem não foca na doença e sim nos desequilíbrios de Qi, Xue e seus elementos (Agua, Madeira, Fogo, Terra, Metal).
                    </p>
                    <p className="text-justify">
                        Como também por meio de loções, óleos de massagem, cremes e pomadas que são absorvidas através da pele, levando a substância terapêutica para o organismo ativando processos de regeneração, equilíbrio e cura.
                    </p>
                    <p className="text-justify">
                        Os óleos essenciais são concentrados e não devem ser utilizados em contato direto com a pele, por isso necessita de um profissional qualificado que saiba como utilizar as dosagens corretas para que não aconteça nenhum tipo de irritação de pele ou vias olfativas.
                    </p>
                    <Team selectedSpecialty="Aromaterapia" />
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