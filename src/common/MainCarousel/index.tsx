import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';

import logoCovid from './carousel-img/aset-0.jpeg';
import logoCovidMobile from './carousel-img/aset-0.mobile.jpeg';
// import logoMesa from './carousel-img/aset-1.jpeg';
// import logoMesaMobile from './carousel-img/aset-1.mobile.jpeg';
import logoAmbu from './carousel-img/aset-2.jpeg';
import logoAmbuMobile from './carousel-img/aset-2.mobile.jpeg';
import logoHQIC from './carousel-img/aset-3.jpeg';
import logoHQICMobile from './carousel-img/aset-3.mobile.jpeg';
// import logoReiki from './carousel-img/aset-4.jpeg';
// import logoReikiMobile from './carousel-img/aset-4.mobile.jpeg';
import logoAroma from './carousel-img/aset-5.png';
import logoAromaMobile from './carousel-img/aset-5.mobile.jpeg';
import logoConst from './carousel-img/constelacao.png';

export default class MainCarousel extends React.PureComponent {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-none d-md-block w-100"
                        src={logoCovid}
                        alt="Aviso COVID-19" />
                    <img className="d-block d-md-none w-100"
                        src={logoCovidMobile}
                        alt="Aviso COVID-19" />
                </Carousel.Item>
                <Carousel.Item>
                    <Nav.Link className="no-padding no-color" href="/ambulatorio">
                        <img className="d-none d-md-block w-100"
                            src={logoAmbu}
                            alt="Ambulatorio" />
                        <img className="d-block d-md-none w-100"
                            src={logoAmbuMobile}
                            alt="Ambulatorio" />
                    </Nav.Link>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-none d-md-block w-100"
                        src={logoHQIC}
                        alt="HQIC" />
                    <img className="d-block d-md-none w-100"
                        src={logoHQICMobile}
                        alt="HQIC" />
                </Carousel.Item>
                <Carousel.Item>
                    <a href="http://asetterapias.com.br/jornada_aromatica_w01/" 
                       className="no-padding no-color" 
                       rel="noopener noreferrer"
                       target="_blank" >
                        <img className="d-none d-md-block w-100"
                            src={logoAroma}
                            alt="aroma" />
                        <img className="d-block d-md-none w-100"
                            src={logoAromaMobile}
                            alt="aroma" />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="/calendars/default/agenda/" 
                       className="no-padding no-color">
                        <img className="d-none d-md-block w-100"
                            src={logoConst}
                            alt="constelacao-familiar" />
                        <img className="d-block d-md-none w-100"
                            src={logoConst}
                            alt="constelacao-familiar" />
                    </a>
                </Carousel.Item>
            </Carousel>
        );
    }
}
