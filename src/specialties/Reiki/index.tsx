import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';

import '../Specialties.css';

export default class Reiki extends React.PureComponent {

    renderBody = () => {
        return(<div className="container lg-padding">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-5">
                        Reiki
                    </h1><hr />
                    <p className="text-justify">
                        Reiki é uma terapia energética de cura baseada na canalização da energia universal (rei) por meio da imposição de mãos com o objetivo de restabelecer o equilíbrio energético vital de quem a recebe e, assim, restaurar o estado de equilíbrio natural (seja ele emocional, físico ou espiritual). Reconhecido pela Organização Mundial de Saúde (OMS) e pelo Ministério da Saúde do Brasil dentro da Política Nacional de Práticas Integrativas e Complementares – PNPIC no SUS e em todo território nacional.
                    </p>
                    <p className="text-justify">
                        O Reiki é uma terapia holística natural que preconiza que, através da imposição de mãos do terapeuta Reiki, irradiam-se as vibrações de harmonia da energia vital do Universo (Rei) para restabelecer o equilíbrio da energia vital (Ki) de quem o recebe, podendo refletir assim nas zonas doentes do corpo.
                    </p>
                    <p className="text-justify">
                        O Sistema de Reiki tradicional (Mikao Usui) ensina que a energia Reiki é uma energia inteligente, que "sabe o que fazer", ou seja, a energia sente a necessidade do paciente e segue para o local necessário. Por outro lado, o ser humano possui o livre arbítrio, e caso o paciente não esteja aberto ao tratamento (predisposto a enfrentar as causas de suas emoções, vivências, pensamentos, sentimentos e ações) a energia não terá efeito duradouro no organismo, podendo até mesmo ser bloqueada pelo paciente. Nesse caso, o desequilíbrio energético persistirá, assim como a causa-raiz do problema.
                    </p>
                    <p className="text-justify">
                        O tratamento tem duração de aproximadamente 60 minutos, onde é realizada a anamnese e efetuado o tratamento por meio da imposição das mãos nos principais chakras e onde mais o terapeuta Reiki intuir.
                    </p>                    
                    <h4>Os princípios do Reiki</h4>
                    <p className="text-justify">
                        <ul>
                            <li>Só por hoje não se preocupe</li>
                            <li>Só por hoje não se aborreça</li>
                            <li>Honre pais e mestres</li>
                            <li>Trabalhe honestamente</li>
                            <li>Seja gentil com todos os seres</li>
                        </ul>
                        Para Usui Sensei, estes ensinamentos deveriam ser tratados como mantras e por isso sempre recitados para que se possa alcançar paz e iluminação.
                    </p>
                   
                    <h4>Benefícios do Reiki</h4>
                    <ul>
                        <li>Dissolve e elemina bloqueios promovendo o equilibrio mental, emocional, físico e espiritual.</li>
                        <li>Acalma, reduz o stress e provoca no organismo uma sensação de profundo relaxamento, conforto e Paz.</li>
                        <li>Adquirimos mais imunidade para combatermos as doenças.</li>
                        <li>Com a redução do stress, conseguimos lidar melhor com as tensões do dia-a-dia</li>
                        <li>Alivia a dor</li>
                    </ul>
                    
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