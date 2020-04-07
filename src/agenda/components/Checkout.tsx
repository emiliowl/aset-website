import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { AgendaModel } from '../Agenda'
import getApiUrl from '../../infra/constants';

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
    selectedAgenda: AgendaModel,
    selectedSpecialty: string,
    finishCheckout: ((agenda: AgendaModel) => void);
}
interface State {
    agenda: AgendaModel,
    error: any
}

export default class Checkout extends React.PureComponent<Props, State> {
    nameInput: React.RefObject<any>;
    phoneInput: React.RefObject<any>;
    emailInput: React.RefObject<any>;

    constructor(props: Props) {
        super(props);
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
            getApiUrl(`/api/agendas/${selectedAgenda.therapist.email}/${selectedAgenda.date.replace(/\//gi, '-')}/${selectedAgenda.time}`),
            {
                method:  "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(appointment)
            });

        fetch(request)
        .then(res => res.json())
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
                this.setState({
                    error
                });
            }
        )
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
                            ref={this.nameInput} />
                    </Form.Group>

                    <Form.Group controlId="frmGrpPhone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="text"
                            placeholder="(ddd)99999-9999" 
                            ref={this.phoneInput} />
                    </Form.Group>

                    <Form.Group controlId="frmGrpEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" 
                            placeholder="Digite seu e-mail..." 
                            ref={this.emailInput} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.submitForm}>
                        Agendar!
                    </Button>
                </Form>
                <hr />
            </div>
        </div>);
    }
}
