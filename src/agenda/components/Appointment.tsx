import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import getApiUrl from '../../infra/constants';
import simoneImg from '../../common/team-img/simone.jpeg';
import lunderImg from '../../common/team-img/lunder.jpeg';
import amandaImg from '../../common/team-img/amanda.jpeg';

import { AgendaModel } from '../Agenda';

import './Appointment.css';

interface Therapist {
    name: string,
    phone: string,
    email: string,
    specialties: Array<string>
}

interface AgendaGroup {
    agendas: Array<AgendaModel>,
    therapist: Therapist
}

interface Props {
    selectedDate: string,
    selectAgenda: ((agenda: AgendaModel) => void);
    selectSpecialty: ((specialty: string) => void);
}
interface State {
    error: any,
    isLoaded: boolean,
    items: Array<AgendaModel>,
    specialty: string
}

export default class Appointment extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            specialty: ''
        };
    }

    setSpecialty = (event: React.FormEvent<HTMLInputElement>) => {
        this.props.selectSpecialty(event.currentTarget.value);
    }

    getTherapistImage = (email: string):any => {
        const imgs: Record<string, any> = {
            'silimatavares@gmail.com': simoneImg,
            'lunder@gmail.com': lunderImg,
            'amanda@gmail.com': amandaImg
        };

        return imgs[email];
    }

    componentDidMount() {
        fetch(getApiUrl(`/api/agendas/for-date/${this.props.selectedDate.replace(/\//gi, '-')}`))
        .then(res => res.json())
        .then(
            (result: Array<AgendaModel>) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    therapistsGroup = ():Array<AgendaGroup> => {
        let group: Record<string, AgendaGroup> = {};
        this.state.items.forEach(agenda => {
            if(!group[agenda.therapist.email]) {
                let agendaGroup: AgendaGroup = {
                    agendas: [agenda],
                    therapist: agenda.therapist
                };
                group[agenda.therapist.email] = agendaGroup;
            } else {
                let agendaGroup = group[agenda.therapist.email];
                agendaGroup.agendas.push(agenda);
            }
        });
        
        return Object.values(group);
    }

    renderAvailability = (agendaGroup: AgendaGroup) => {
        return (<div className="card-text">
            { 
                agendaGroup.agendas.map(agenda => 
                    <Button key={agenda.time}
                        className="spaced-1" 
                        size="sm" 
                        variant="outline-primary"
                        onClick={() => this.props.selectAgenda(agenda)}>
                        {agenda.time}
                    </Button>
                )
            }
        </div>);
    }

    renderTherapistSpecialties = (specialties: Array<string>) => {
        return (<div className="card-text">
            <small className="text-muted">Selecione uma especialidade:</small>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select" onChange={(evt) => this.setSpecialty(evt as any)}>
                    <option key="nao selecionado"> Selecione... </option>
                    { specialties.map(spec => <option key={spec}> {spec} </option>) }
                </Form.Control>
            </Form.Group>
        </div>);
    }

    renderSpecialties = () => {
        if(!this.state.items || this.state.items.length === 0) return null;
        return (
            this.therapistsGroup().map(el => 
                <div className="card mb-3" key={el.therapist.email}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={this.getTherapistImage(el.therapist.email)} className="card-img" alt="cool" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{el.therapist.name}</h5>
                                { this.renderTherapistSpecialties(el.therapist.specialties)}
                                { this.renderAvailability(el) }
                            </div>
                        </div>
                    </div>
                </div>
            )
        );
    }

    render() {
        return (
            <div className="container">
                <h2><strong>Especialidade</strong></h2>
                <p>Selecione o profissional, horário e especialidade</p>
                <hr />
                { this.renderSpecialties() }
            </div>
        );
    }
}
