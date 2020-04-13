import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';
import Team from '../../common/Team';

import '../Specialties.css';

export default class Acupuntura extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        Acupuntura
                    </h1><hr />
                    <p className="text-justify">
                        É uma técnica terapêutica milenar, desenvolvida na China há mais de 5.000 anos, reconhecida pela Organização Mundial de Saúde (OMS) e pelo Ministério da Saúde do Brasil dentro da Política Nacional de Práticas Integrativas e Complementares – PNPIC no SUS e em todo território nacional.
                    </p>
                    <p className="text-justify">
                        De acordo com os princípios da medicina tradicional chinesa, que fundamentam a prática da acupuntura, consiste na aplicação de agulhas em pontos específicos do corpo, mais conhecidos meridianos de acupuntura, para se obter efeitos terapêuticos.
                        Podem ser utilizados neste processo além das agulhas, outros recursos como ventosas, moxabustão (calor proveniente da queima lã de Artemísia), eletroacupuntura, laser, auriculoterapia, massagens.
                    </p>
                    <p className="text-justify">
                        Esta maravilhosa técnica da Medicina Tradicional Chinesa, é excelente para tratar diversos tipos de desequilíbrios, sejam eles físicos ou psicoemocionais pois sua abordagem não foca na doença e sim nos desequilíbrios de Qi, Xue e seus elementos (Agua, Madeira, Fogo, Terra, Metal).
                    </p>
                    <p className="text-justify">
                        Possui efeitos sedativos e ansiolíticos, agindo na liberação de substâncias do sistema nervoso central, entre elas a endorfina, dopamina, encefalina e serotonina. Que nos ajudam a aliviar as tensões, cansaço, exaustão, estresse, dores, desacelerar e melhora na qualidade de vida. 
                    </p>
                    <p className="text-justify">
                        É muito importante dizer que a técnica de agulhamento se dá por meio de agulhas esterilizadas, descartáveis e de espessura menor que agulhas de injeção, o que torna o procedimento indolor ou muito pouco doloroso.
                    </p>
                    <p className="text-justify">
                        O tratamento tem duração de aproximadamente 60 minutos, onde é realizada a anamnese completa e realizado o tratamento.
                    </p>
                    <Team selectedSpecialty="Acupuntura" />
                </div>
                <div className="col-md-3 right-side-panel">
                    <Nav.Link href="/agenda">
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