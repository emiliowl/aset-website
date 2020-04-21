import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';
import Team from '../../common/Team';

import '../Specialties.css';

export default class Chromo extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        Cromoterapia
                    </h1><hr />
                    <p className="lead">
                        É a cura através das cores.
                    </p>
                    <p className="text-justify">
                        O uso da cor e da luz com o propósito de equilíbrio da saúde integral é bastante antigo, foi utilizada pelas antigas civilizações, como a egípcia, a grega, a indiana, a chinesa e outras tantas que utilizaram as cores para tratamento ds saúde, equilíbrio ou alívio das doenças.
                    </p>
                    <p className="text-justify">
                        A terapia com a luz solar era uma prática médica comum na Grécia (helioterapia), e também nas Américas, mesmo hoje não é difícil encontrar a cromoterapia nos protocolos médicos tradicionais, principalmente, no tratamento da icterícia através da Fototerapia (UV).
                    </p>
                    <p className="text-justify">
                        Para compreender melhor as variedades de aplicações da Cromoterapia, precisamos examinar não só de que modo à luz influência o corpo físico, mas também de que maneira ela pode afetar os corpos espirituais e os sistemas de energia sutil que constituem o ser humano multidimensional. Uma das formas mais básicas de luz, a luz solar, é fundamental para a saúde e o bem-estar.                    
                    </p>
                    <p className="text-justify">
                        As lâmpadas coloridas, bastões e outros instrumentos cromoterápicos são utilizados nas sessões ou aplicações de cromoterapia nas mais diversas patologias. Além dos efeitos diretos da luz sobre as células do nosso corpo físico, diferentes frequências e cores de luz podem afetar tanto os nossos sistemas de energia sutil quanto os nossos corpos espirituais.
                    </p>
                    <p className="text-justify">
                    A Cromoterapia é reconhecida pela Organização Mundial da Saúde – OMS, por ser uma terapia complementar não invasiva e outorgada pelo Ministério da Saúde do Brasil dentro da Política Nacional de Práticas Integrativas e Complementares – PNPIC no SUS e em todo território nacional.
                    </p>
                    
                    <h4>As Sessões de Cromoterapia</h4>
                    <p className="text-justify">
                        No primeiro atendimento é realizada a avaliação, considerando a anamnese em uma visão holística, para assim dimensionar o tempo necessário de tratamento. A cada retorno é avaliada a evolução do caso e se há a necessidade de mais sessões.
                    </p>
                    <Team selectedSpecialty="Cromoterapia" />
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