import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';
import Team from '../../common/Team';

import '../Specialties.css';

export default class Constelacao extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        Constela&ccedil;&atilde;o Familiar
                    </h1><hr />
                    <p className="text-justify">
                        Constela&ccedil;&atilde;o familiar &eacute; um m&eacute;todo terap&ecirc;utico desenvolvido pelo Alem&atilde;o Bert
                        Hellinger. A t&eacute;cnica consiste em fazer o amor que existe em voc&ecirc; e no seu sistema
                        familiar fluir novamente. Muitas vezes, por algum desequil&iacute;brio ou emaranhado, as
                        ordens do amor s&atilde;o afetadas, e o fluxo saud&aacute;vel de energia &eacute; bloqueado, a partir de
                        ent&atilde;o nossa vida come&ccedil;a a ter problemas seja na &aacute;rea familiar, afetiva ou
                        profissional.
                    </p>
                    <p className="text-justify">
                        A t&eacute;cnica consiste em olhar para esse desequil&iacute;brio e organiz&aacute;-lo, e para isso,
                        olhamos para voc&ecirc; e para o que antecedeu sua hist&oacute;ria. &Eacute; importante salientar que
                        somos frutos de nossos ancestrais, e para nossa vida evoluir em qualquer &aacute;rea,
                        precisamos honrar e integrar nossa fam&iacute;lia, por isso o nome Constela&ccedil;&atilde;o Familiar.
                    </p>
                    <p className="text-justify">
                        A constela&ccedil;&atilde;o &eacute; um processo curativo para a alma, cujo o olhar para os
                        emaranhamentos inconscientes trazem para o cliente uma solu&ccedil;&atilde;o nova e
                        libertadora para sua exist&ecirc;ncia.
                    </p>
                    <Team selectedSpecialty="Constelação Familiar" />
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