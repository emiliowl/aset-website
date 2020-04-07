import React from 'react';
import logo from '../img/aset-logo-bgalpha.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelopeOpen, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

export default class Footer extends React.PureComponent {
    render() {
        return (
            <div id="page-footer">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="widget footer-about flat_counter" data-waypoint-active="yes">
								<p><img className="footer-logo" src={logo} alt="logo_footer"/></p>
								<p className="content">Nossa missão é proporcionar a todos os clientes amigos um ambiente agradável e acolhedor, onde se possa encontrar equilíbrio, maior qualidade de vida e autoconhecimento.</p>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="widget contact-info">
								<h3 className="widget-title">Sede:</h3>
								<hr />
								<div className="textwidget">
									<p>
										Avenida João Ramalho, 430 - Vila Assunção - Santo André - SP
									</p>
									<p>
										<FontAwesomeIcon icon={faPhone} />&nbsp;(011) 3705-2738<br/>
										<FontAwesomeIcon icon={faPhone} />&nbsp;(011) 98794-8205<br/>
										<FontAwesomeIcon icon={faEnvelopeOpen} />&nbsp;e-mail aset
									</p>
									<p>
										<FontAwesomeIcon icon={faCalendar} />&nbsp;Agendamento Online<br/>
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="widget contact-info">
								<h3 className="widget-title">Redes Sociais:</h3>
								<hr />
								<div className="textwidget">
									<p>
										<a className="social-media" 
											href="https://www.facebook.com/asetterapiasholisticas/" 
											target="_blank" 
											rel="noopener noreferrer">
											<FontAwesomeIcon size="4x" icon={faFacebook} />
										</a>
										<a className="social-media"
											href="https://www.instagram.com/asetterapias/" 
											target="_blank" 
											rel="noopener noreferrer">
											<FontAwesomeIcon className="social-media" size="4x" icon={faInstagram} />
										</a>
										<a className="social-media"
											href="https://twitter.com/ASET_Terapias" 
											target="_blank"
											rel="noopener noreferrer">
											<FontAwesomeIcon className="social-media" size="4x" icon={faTwitter} />
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-8"></div>
						<div className="col-sm-4">
							<div className="widget contact-form">
								<h3 className="widget-title">Mensagem:</h3>
								<hr />
								<form id="contact-form" method="post" action="./contact/contact-process.php">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Nome..." />
									</div>
									<div className="form-group">
										<input type="email" className="form-control" placeholder="E-mail..." />
									</div>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Assunto..." />
									</div>
									<div className="form-group">
										<textarea className="form-control" placeholder="Mensagem..."></textarea>
									</div>
									<div className="send-wrap">
										<button type="submit" id="submit" className="button" name="submit">Enviar</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<br /><br />
					<div className="row">
						<div className="col-xs-12 disclaimer">
							AS TERAPIAS HOLÍSTICAS E INTEGRATIVAS SÃO COMPLEMENTARES À MEDICINA ALOPÁTICA E NÃO DEVEM SUBSTITUIR NENHUMA CONSULTA E/OU TRATAMENTO MÉDICO.
						</div>
					</div>
				</div>
			</div>
        );
    }
}