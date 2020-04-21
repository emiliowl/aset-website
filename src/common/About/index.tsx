import React from 'react';
import aboutImg from './about-img/about.jpeg';

export default class About extends React.PureComponent {
    render() {
        return (
            <div className="container">
                <hr />
                <div className="row featurette">
                    <div className="col-md-8 d-none d-sm-block">
                        <h2 className="featurette-heading">Sobre a Aset Terapias</h2>
                        <p className="text-justify">
                            A ASET é fruto de um sonho e que após alguns anos, tornou-se real. 
                            Nossa proposta é ser um local para levar a você os melhores atendimentos terapêuticos, vivências, cursos de aperfeiçoamento e acima de tudo um lugar onde haja muita luz, amor e respeito.
                        </p>
                        <p className="text-justify">
                            Nossa missão é poder proporcionar a todos que nos procuram o melhor entendimento e acolhimento necessário para as questões psicoemocionais que possam prejudicar a evolução de cada ser como espírito e individuo único que somos. 
                        </p>
                        <p className="text-justify">
                            Assim nasceu a ASET, um espaço terapêutico que reúne o que há de melhor em assistência, cuidados e infraestrutura, em um ambiente acolhedor e saudável para receber a todos os clientes, assim como profissionais que busquem o mesmo propósito.
                        </p>
                        <p className="text-justify">
                            Espero que você aprecie a sua visita ao nosso site e que em breve venha nos conhecer pessoalmente.
                        </p>
                        <p>Um abraço fraterno,</p>
                        <p>Simone L. Tavares</p>
                    </div>
                    <div className="col-md-4 d-none d-sm-block">
                        <img className="featurette-image img-fluid mx-auto" 
                            src={aboutImg} 
                            alt="300x300" />
                    </div>
                </div>
                <div>
                    <div className="d-block d-sm-none card mb-3" style={{"maxWidth": "540px"}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img className="card-img" 
                                src={aboutImg} 
                                alt="300x300" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Sobre a Aset Terapias</h5>
                                    <p className="card-text text-justify">
                                        A ASET é fruto de um sonho e que após alguns anos, tornou-se real. 
                                    </p>
                                    <p className="card-text text-justify">
                                        Nossa proposta é ser um local para levar a você os melhores atendimentos terapêuticos, vivências, cursos de aperfeiçoamento e acima de tudo um lugar onde haja muita luz, amor e respeito.</p>
                                    <p className="text-justify">
                                        Esperamos que você aprecie a sua visita ao nosso site e que em breve venha nos conhecer pessoalmente.
                                    </p>
                                    <p>Um abraço fraterno,</p>
                                    <p>Simone L. Tavares</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}
