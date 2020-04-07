import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import logoCovid from './carousel-img/aset-0.jpeg';
import logoCovidMobile from './carousel-img/aset-0.mobile.jpeg';
import logoMesa from './carousel-img/aset-1.jpeg';
import logoMesaMobile from './carousel-img/aset-1.mobile.jpeg';
import logoAmbu from './carousel-img/aset-2.jpeg';
import logoAmbuMobile from './carousel-img/aset-2.mobile.jpeg';
import logoHQIC from './carousel-img/aset-3.jpeg';
import logoHQICMobile from './carousel-img/aset-3.mobile.jpeg';

export default class MainCarousel extends React.PureComponent {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-none d-md-block w-100"
                        src={logoCovid}
                        alt="Third slide" />
                    <img className="d-block d-md-none w-100"
                        src={logoCovidMobile}
                        alt="Third slide mobile" />
                </Carousel.Item>
                <Carousel.Item>
                    <a href="http://asetterapias.com.br/mesa_radionica_coletiva/" target="_blank" rel="noopener noreferrer">
                    <img className="d-none d-md-block w-100"
                        src={logoMesa}
                        alt="Third slide" />
                    <img className="d-block d-md-none w-100"
                        src={logoMesaMobile}
                        alt="Third slide mobile" />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-none d-md-block w-100"
                        src={logoAmbu}
                        alt="Third slide" />
                    <img className="d-block d-md-none w-100"
                        src={logoAmbuMobile}
                        alt="Third slide mobile" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-none d-md-block w-100"
                        src={logoHQIC}
                        alt="Third slide" />
                    <img className="d-block d-md-none w-100"
                        src={logoHQICMobile}
                        alt="Third slide mobile" />
                </Carousel.Item>
            </Carousel>
        );
    }
}
