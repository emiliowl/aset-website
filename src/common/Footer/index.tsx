import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelopeOpen, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import getApiUrl from '../../infra/constants';
import logo from '../../img/aset-logo-bgalpha.png';
import './index.css';

interface Customer {
	name: string,
	phone: string,
    email: string
}

interface Message {
	subject: string,
	text: string
}

interface State {
	customer: Customer | null,
	message: Message | null,
	messageSent: Boolean,
	errors: Record<string, Array<string>>
}

export default class Footer extends React.PureComponent<any,State> {
	nameInput: React.RefObject<any>;
	phoneInput: React.RefObject<any>;
	emailInput: React.RefObject<any>;
	subjectInput: React.RefObject<any>;
	textInput: React.RefObject<any>;

	constructor(props: any) {
		super(props);
		this.state = {
			customer: null,
			message: null,
			messageSent: false,
			errors: {}
		};
		this.nameInput = React.createRef();
        this.phoneInput = React.createRef();
		this.emailInput = React.createRef();
		this.subjectInput = React.createRef();
		this.textInput = React.createRef();
	}

	renderContactForm = () => {
		return (<Form id="contact-form" onSubmit={this.submitForm}>
			<Form.Group controlId="frmGrpNome">
				<Form.Control type="text" 
					placeholder="Digite seu nome..." 
					isValid={this.state.customer !== null && !this.state.errors['name']}
					isInvalid={this.state.customer !== null && this.state.errors['name'] != null && this.state.errors['name'].length > 0}
					ref={this.nameInput} />
				{ 
					this.state.errors
					&& this.state.errors['name'] 
					&& this.state.errors['name'].map(err => (<Form.Control.Feedback type="invalid">
						{err}
					</Form.Control.Feedback>)) 
				}
			</Form.Group>
			<Form.Group controlId="frmGrpPhone">
				<Form.Control type="text"
					placeholder="Digite seu telefone com DDD..."
					maxLength={15}
					onChange={(evt: any) => this.justMask(evt)}
					isValid={this.state.customer !== null && !this.state.errors['phone']}
					isInvalid={this.state.customer !== null && this.state.errors['phone'] != null && this.state.errors['phone'].length > 0}
					ref={this.phoneInput} />
				{ 
					this.state.errors
					&& this.state.errors['phone'] 
					&& this.state.errors['phone'].map(err => (<Form.Control.Feedback type="invalid">
						{err}
					</Form.Control.Feedback>)) 
				}
			</Form.Group>
			<Form.Group controlId="frmGrpEmail">
				<Form.Control type="email" 
					placeholder="Digite seu e-mail..." 
					isValid={this.state.customer !== null && !this.state.errors['email']}
					isInvalid={this.state.customer !== null && this.state.errors['email'] != null && this.state.errors['email'].length > 0}
					ref={this.emailInput} />
				{ 
					this.state.errors
					&& this.state.errors['email'] 
					&& this.state.errors['email'].map(err => (<Form.Control.Feedback type="invalid">
						{err}
					</Form.Control.Feedback>)) 
				}
			</Form.Group>
			<Form.Group controlId="frmGrpNome">
				<Form.Control type="text" 
					placeholder="Digite o assunto..." 
					isValid={this.state.customer !== null && !this.state.errors['subject']}
					isInvalid={this.state.customer !== null && this.state.errors['subject'] != null && this.state.errors['subject'].length > 0}
					ref={this.subjectInput} />
				{ 
					this.state.errors
					&& this.state.errors['subject'] 
					&& this.state.errors['subject'].map(err => (<Form.Control.Feedback type="invalid">
						{err}
					</Form.Control.Feedback>)) 
				}
			</Form.Group>
			<Form.Group controlId="frmGrpNome">
				<Form.Control as="textarea" 
					placeholder="Digite sua mensagem..." 
					rows="3"
					isValid={this.state.customer !== null && !this.state.errors['text']}
					isInvalid={this.state.customer !== null && this.state.errors['text'] != null && this.state.errors['text'].length > 0}
					ref={this.textInput} />
				{ 
					this.state.errors
					&& this.state.errors['text'] 
					&& this.state.errors['text'].map(err => (<Form.Control.Feedback type="invalid">
						{err}
					</Form.Control.Feedback>)) 
				}
			</Form.Group>
			<div className="send-wrap">
				<Button variant="primary" id="submit" type="submit" onClick={this.submitForm}>
					Enviar!
				</Button>
			</div>
		</Form>);
	}

	submitForm = (evt :any) => {
        evt.preventDefault();
		evt.stopPropagation();
		this.setState({messageSent: false});
		let customer :Customer = {
			name: this.nameInput.current.value,
			phone: this.phoneInput.current.value,
			email: this.emailInput.current.value
		}

        let message :Message = {
            subject: this.subjectInput.current.value,
            text: this.textInput.current.value
        };

        const request = new Request(
            getApiUrl('/api/sendmail/contact'),
            {
                method:  "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({customer, message})
            });

        fetch(request)
        .then(res => {
            if(res.status === 400 || res.status === 500) {
                res.json().then(errors => {
                    this.setState({
						customer,
						message,
                        errors
                    });
                });
                throw new Error("Skipping other stuff, return has status code invalid!");
            }

            return res.text();
        })
        .then(
            (res) => {
				this.setState({
					messageSent: true,
					message: null,
					customer: null,
					errors: {}
				})
			},
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error);
            }
        )
	}
	
	justMask = (event: React.FormEvent<HTMLInputElement>) => {
        const userInputVal = event.currentTarget.value;
        let cleaned = ('' + userInputVal).replace(/\D/g, '');
        let masked = event.currentTarget.value;
        
        //Check if the input is of correct length
        let matchHomePhone = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
        let matchCelPhone = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

        if (matchHomePhone) {
            masked = '(' + matchHomePhone[1] + ') ' + matchHomePhone[2] + '-' + matchHomePhone[3]
        };

        if (matchCelPhone) {
            masked = '(' + matchCelPhone[1] + ') ' + matchCelPhone[2] + '-' + matchCelPhone[3]
        };

        console.log(event.currentTarget.value, masked);
        event.currentTarget.value = masked;
        return null;
    }

    render() {
        return (
            <div id="page-footer">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="widget footer-about flat_counter" data-waypoint-active="yes">
								<div><img className="footer-logo" src={logo} alt="logo_footer"/></div>
								<p className="content">Nossa missão é proporcionar a todos os clientes amigos um ambiente agradável e acolhedor, onde se possa encontrar equilíbrio, maior qualidade de vida e autoconhecimento.</p>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="widget contact-info">
								<h3 className="widget-title">Sede:</h3>
								<hr />
								<div className="textwidget">
									<div>
										Avenida João Ramalho, 430 - Vila Assunção - Santo André - SP
									</div>
									<div>
										<FontAwesomeIcon icon={faPhone} />&nbsp;(011) 3705-2738<br/>
										<FontAwesomeIcon icon={faPhone} />&nbsp;(011) 98794-8205<br/>
										<FontAwesomeIcon icon={faEnvelopeOpen} />&nbsp;aset.contato@gmail.com
										<Navbar className="no-padding" color="white" variant="dark" expand="lg">
											<Nav className="mr-auto">
												<Nav.Link className="no-padding contato" href="/agenda">
													<FontAwesomeIcon icon={faCalendar} />&nbsp;Agendamento Online
												</Nav.Link>
											</Nav>
										</Navbar>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="widget contact-info">
								<h3 className="widget-title">Redes Sociais:</h3>
								<hr />
								<div className="textwidget">
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
									<a className="social-media"
										href="https://www.youtube.com/channel/UCQI9GIlBFfqIJUga7siAVxA" 
										target="_blank"
										rel="noopener noreferrer">
										<FontAwesomeIcon className="social-media" size="4x" icon={faYoutube} />
									</a>
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
								{ !this.state.messageSent && this.renderContactForm() }
								{ this.state.messageSent && <span>Mensagem enviada com sucesso!</span> }
								
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