import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';
import Team from '../../common/Team';

import '../Specialties.css';

export default class Quiro extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        Quiropraxia
                    </h1><hr />
                    <p className="text-justify">
                        Segundo a organização Mundial de Saúde (OMS), a Quiropraxia lida com o diagnostico, tratamento e a prevenção das desordens do sistema neuro-músculo-esquelético e dos efeitos destas desordens na saúde em geral.
                    </p>
                    <p className="text-justify">
                        A quiropraxia preocupa-se com a relação Estrutura/Função. Ela traz mais do que a melhora de uma dor, ela traz uma melhora na qualidade de vida. 
                    </p>
                    <p className="text-justify">
                        Podemos realizar o tratamento individual ou em conjunto com outras técnicas, como acupuntura, fisioterapia, massagens, entre outros... diminuindo o tempo de recuperação e trazendo um alívio o mais rápido possível. Tudo depende de uma criteriosa avaliação e a opção da melhor técnica possível para cada caso.
                    </p>
                    <Team selectedSpecialty="Quiropraxia" />
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