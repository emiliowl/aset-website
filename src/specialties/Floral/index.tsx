import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';

import '../Specialties.css';

export default class Floral extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        Terapia Floral
                    </h1><hr />
                    <p className="text-justify">
                        Florais são essências vibracionais a base de flores, que atuam no equilíbrio energético dos corpos sutis (memória energética), nos auxiliando a nos conectar com nossa essência divida, nosso verdadeiro eu, e assim, trazer para a consciência padrões comportamentais, padrões de pensamento, distúrbios emocionais, que nos distanciam de nossa verdadeira essência, de nossa missão de vida, e que precisam ser transformados.
                    </p>
                    <p className="text-justify">
                        A terapia floral atua em nosso campo energético vibracional, afim de reestabelecer o equilíbrio emocional, comportamental e energético, e por consequência, promove o equilíbrio do corpo físico.
                    </p>
                    <p className="text-justify">
                        Por ser um tratamento natural, pode ser realizado em conjunto com tratamentos homeopáticos e alopáticos, e normalmente não possui restrições.
                    </p>
                    <p className="text-justify">
                    Só nos tornamos livres com autoconhecimento profundo e, para isso, os florais nos ajudam de uma forma muito peculiar.
                    </p>
                    <p className="text-justify">
                    A Cromoterapia é reconhecida pela Organização Mundial da Saúde – OMS, por ser uma terapia complementar não invasiva e outorgada pelo Ministério da Saúde do Brasil dentro da Política Nacional de Práticas Integrativas e Complementares – PNPIC no SUS e em todo território nacional.
                    </p>
                    
                    <h4>O Tratamento Floral</h4>
                    <p className="text-justify">
                        O tratamento floral não tem prazo pré-estabelecido, pois pode variar de pessoa para pessoa, dependendo do tempo e criticidade do desequilíbrio.
                    </p>
                    <p className="text-justify">
                        Em geral, a toma do floral deve ser efetuada em torno de 28 dias, quando então, o cliente deve retornar em consulta para a manutenção do tratamento.
                    </p>
                    <p className="text-justify">
                        O atendimento dura em torno de 60 minutos, onde é realizada a avaliação, considerando a anamnese em uma visão holística, e com base nas principais queixas e desconfortos relatados pelo cliente será realizada a indicação dos florais. A consulta inclui uma essência floral sutil.
                    </p>
                    <p className="text-justify">
                        Nós respeitamos o ser humano e o todo, portanto, todas as crenças, religiões e opiniões serão respeitadas. Assim como o sigilo sobre as questões levantadas em atendimento.
                    </p>
                    <p className="text-justify">
                        Cabe ressaltar ainda que a administração do floral não dispensa o acompanhamento médico, assim como a administração dos remédios prescritos pelo médico, seja alopata ou homeopata.
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