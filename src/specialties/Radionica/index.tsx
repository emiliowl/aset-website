import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';

import '../Specialties.css';

export default class Radionica extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        Mesa Radi&ocirc;nica Qu&acirc;ntica RP
                    </h1><hr />
                    <p className="text-justify">
                        A Mesa Radi&ocirc;nica Qu&acirc;ntica RP é uma ferramenta terapêutica de co-criação, por meio da conexão, sintonização e emissão de frequências.
                    </p>
                    <p className="text-justify">
                        Na mesa trabalha-se, entre muitas outras coisas, a saúde, a família, o trabalho, os relacionamentos, a prosperidade e o crescimento espiritual. É um instrumento que trabalha os nossos bloqueios sejam eles, conscientes ou inconscientes, provenientes desta vida, de vidas passadas, de vidas paralelas ou de hereditariedade, averiguando e analisando todas as energias visíveis e invisíveis, transmutando-as.
                        Atua em todos os corpos e planos, limpando e harmonizando assim energeticamente pessoas e ambientes. Sempre para um bem maior e para tudo que é divino!
                    </p>
                    <p className="text-justify">
                        Quando falamos em mesa, muitas pessoas pensam que chegaremos com uma maca, que ficarão diante de uma mesa de verdade ou deitarão sobre ela.  Mas, apesar do nome, a Mesa Radi&ocirc;nica Qu&acirc;ntica RP é um desenho impresso, uma espécie de tabuleiro com ferramentas terapêuticas que são ativadas para emitir um tratamento.
                    </p>
                    <p className="text-justify">
                        Além das ferramentas de tratamento já ancorados à Mesa Radiônica Qu&acirc;ntica RP, é possível também se beneficiar de outras técnicas de domínio do terapeuta como por exemplo a frequência do Reki, Cromoterapia, Geometrias Sagradas e muitas outras frequências e técnicas.
                    </p>
                    <p className="text-justify">
                        Após o tratamento com a mesa, também poderão ser indicados outros procedimentos como por exemplo banhos, utilização de cristais pessoais, orações, prescrição de florais, decretos, que visam sempre potencializar os efeitos do tratamento ao máximo.
                    </p>
                    <p className="text-justify">
                        Permite o atendimento à distância, com a mesma eficácia.
                    </p>
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