import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';
import Team from '../../common/Team';

import '../Specialties.css';

export default class Meditacao extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        Medita&ccedil;&atilde;o
                    </h1><hr />
                    <p className="text-justify">
                        A medita&ccedil;&atilde;o pode ser definida como
                        uma pr&aacute;tica na qual o indiv&iacute;duo utiliza
                        t&eacute;cnicas meditativas de mantra(som),
                        Respira&ccedil;&atilde;o, Visualiza&ccedil;&atilde;o e ou estado puro de sil&ecirc;ncio interno profundo para limpar e
                        purificar, descansar a sua mente e pensamentos ,purificando e ressignificando a qualidade
                        das ondas eletromagn&eacute;ticas do seu sistema nervoso central, indo al&eacute;m da fonte dos
                        pensamentos visando alcan&ccedil;ar um estado de clareza mental e emocional. Sua origem &eacute;
                        muito antiga, iniciando nas tradi&ccedil;&otilde;es orientais, especialmente a Ioga, Budismo e
                        Hindu&iacute;smo, mas a t&eacute;cnica tamb&eacute;m se refere a pr&aacute;ticas adotadas por alguns caminhos
                        espirituais ou religi&otilde;es.
                    </p>
                    <p className="text-justify">
                        Textos orientais consideram a medita&ccedil;&atilde;o como instrumento que
                        leva em dire&ccedil;&atilde;o &agrave; liberta&ccedil;&atilde;o da pris&atilde;o da mente contempor&acirc;nea de estresses, cansa&ccedil;o e
                        sofrimento. O equil&iacute;brio entre o sil&ecirc;ncio e a atividade &eacute; a meta de todo ser humano,
                        buscador e yogi, no ocidente vivemos totalmente e s&oacute; na atividade disfuncional e no
                        oriente vivem-se mais no sil&ecirc;ncio e pr&aacute;ticas espirituais ritual&iacute;sticas.
                        Nas tradi&ccedil;&otilde;es espirituais v&eacute;dicas de medita&ccedil;&atilde;o, o professor realizado &eacute; aquele que
                        consegue ensinar o aprendiz em sil&ecirc;ncio, atrav&eacute;s da sua pr&oacute;pria consci&ecirc;ncia interior ou
                        pelo olhar silencioso. Ele n&atilde;o precisa explicar exteriormente como meditar ou ensinar uma
                        t&eacute;cnica espec&iacute;fica,apenas sente-se e medite.
                    </p>
                    <h5>Metas e Efeitos</h5>
                    <p className="text-justify">
                        <ol>
                            <li>
                                A pr&aacute;tica regular di&aacute;ria visa proporcionar um repouso profundo para ao sistema
                                nervoso central limpando,reestruturando as fissuras fisiol&oacute;gicas
                                (neuroplasticidade), fadiga, cansa&ccedil;o e estresses;
                            </li>
                            <li>Melhora a concentra&ccedil;&atilde;o,autodisciplina, consci&ecirc;ncia expandida;</li>
                            <li>Clareza mental e emocional;</li>
                            <li>Equil&iacute;brio da atividade mental e o sil&ecirc;ncio interno (autocontrole);</li>
                            <li>Decis&otilde;es Assertivas;</li>
                            <li>A&ccedil;&otilde;es Plenas;</li>
                            <li>Paz interior mental, emocional e espiritual.</li>
                        </ol>
                    </p>
                    <br />
                    <Team selectedSpecialty="Meditação" />
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