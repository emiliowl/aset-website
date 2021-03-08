import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logoCovid from './carousel-img/aset-0.jpeg';
import logoCovidMobile from './carousel-img/aset-0.mobile.jpeg';
import logoAromaMobile from './carousel-img/aset-5.mobile.jpeg';
import logoAroma from './carousel-img/aset-5.png';

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
            </Carousel>
        );
    }
}
