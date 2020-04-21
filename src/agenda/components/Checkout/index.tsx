import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { AgendaModel } from '../../Agenda'
import getApiUrl from '../../../infra/constants';

interface Customer {
    name: string,
    phone: string,
    email: string
}

interface Appointment {
    customer: Customer,
    specialty: string
}

interface Props {
    calendarName: string,
    selectedAgenda: AgendaModel,
    selectedSpecialty: string,
    finishCheckout: ((agenda: AgendaModel) => void),
    onReturn: (() => void);
}
interface State {
    agenda: AgendaModel | null,
    customer: Customer | null,
    errors: Record<string, Array<string>>
}

export default class Checkout extends React.PureComponent<Props, State> {
    nameInput: React.RefObject<any>;
    phoneInput: React.RefObject<any>;
    emailInput: React.RefObject<any>;

    constructor(props: Props) {
        super(props);
        this.state = { agenda: null, customer: null, errors: {} }
        this.nameInput = React.createRef();
        this.phoneInput = React.createRef();
        this.emailInput = React.createRef();
    }

    submitForm = (evt :any) => {
        evt.preventDefault();
        evt.stopPropagation();
        const { selectedAgenda } = this.props;
        let appointment :Appointment = {
            specialty: this.props.selectedSpecialty,
            customer: {
                name: this.nameInput.current.value,
                phone: this.phoneInput.current.value,
                email: this.emailInput.current.value
            }
        };

        const request = new Request(
            getApiUrl(`/api/calendars/${this.props.calendarName}/agendas/${selectedAgenda.therapist.email}/${selectedAgenda.date.replace(/\//gi, '-')}/${selectedAgenda.time}`),
            {
                method:  "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(appointment)
            });

        fetch(request)
        .then(res => {
            if(res.status === 400 || res.status === 500) {
                res.json().then(errors => {
                    this.setState({
                        customer: appointment.customer,
                        errors
                    });
                });
                throw new Error("Skipping other stuff, return has status code invalid!");
            }

            return res.json();
        })
        .then(
            (result: AgendaModel) => {
                this.setState({
                    agenda: result
                }, () => this.props.finishCheckout(result));
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
        const { selectedAgenda } = this.props;

        return (<div className="container">
            <div className="table-responsive-lg">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Hora</th>
                            <th>Terapeuta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedAgenda.date}</td>
                            <td>{selectedAgenda.time}</td>
                            <td>{selectedAgenda.therapist.name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container">
                <Form onSubmit={this.submitForm}>
                    <Form.Group controlId="frmGrpNome">
                        <Form.Label>Nome Completo</Form.Label>
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
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="text"
                            placeholder="(99) 99999-9999"
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
                        <Form.Label>Email</Form.Label>
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
                    <Button variant="primary" type="submit" onClick={this.submitForm}>
                        Agendar!
                    </Button>
                </Form>
                <hr />
            </div>
            <div className="box">
                <Button variant="outline-secondary" size="sm" onClick={() => this.props.onReturn()}>Voltar</Button>
            </div>
        </div>);
    }
}
