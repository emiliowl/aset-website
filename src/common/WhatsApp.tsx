import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import './WhatsApp.css';

export default class WhatsApp extends React.PureComponent {
    render() {
        return (
            <span>
                <a href="https://api.whatsapp.com/send?phone=+5511987948205&text=Oi,%20gostaria%20de%20falar%20sobre%20terapias" 
                    className="float-wpp" 
                    rel="noopener noreferrer"
                    target="_blank" >
                    <FontAwesomeIcon className="wpp-float" icon={faWhatsapp} />
                </a>
            </span>
        );
    }
}