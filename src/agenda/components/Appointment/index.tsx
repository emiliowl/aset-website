import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import _ from 'lodash';

import getApiUrl from '../../../infra/constants';
import simoneImg from '../../../common/Team/team-img/simone.jpeg';
import lunderImg from '../../../common/Team/team-img/lunder.jpeg';
import amandaImg from '../../../common/Team/team-img/amanda.jpeg';
import camilaImg from '../../../common/Team/team-img/camilla.png';
import tatyanImg from '../../../common/Team/team-img/tatyana.png';

import { AgendaModel } from '../../Agenda';

import './index.css';

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
    calendarName: string,
    selectedDate: string,
    selectAgenda: ((agenda: AgendaModel) => void),
    selectedSpecialty: string,
    selectSpecialty: ((specialty: string) => void),
    onReturn: (() => void),
    therapies: Array<string>,
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
            'lunder@lunder.com.br': lunderImg,
            'amandafiasqui@gmail.com': amandaImg,
            'camilla.oliveira@gmail.com': camilaImg,
            'tatiana.menezes@gmail.com': tatyanImg
        };

        return imgs[email];
    }

    loadAgenda(specialty?: string) {
        let agendaUrl = `/api/calendars/${this.props.calendarName}/agendas/for-date/${this.props.selectedDate.replace(/\//gi, '-')}`
        
        if(specialty) {
            agendaUrl = `/api/calendars/${this.props.calendarName}/agendas/for-date/${this.props.selectedDate.replace(/\//gi, '-')}/${specialty}`
        }

        fetch(getApiUrl(agendaUrl))
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

    componentDidMount() {
        this.loadAgenda(this.props.selectedSpecialty);
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
            <div className="row">
                { 
                    _.orderBy(agendaGroup.agendas, a => a.time)
                        .map(agenda => 
                            <Button key={agenda.time}
                                className="col-xs-4 spaced-1 w-25" 
                                size="sm" 
                                variant="outline-primary"
                                onClick={() => this.props.selectAgenda(agenda)}>
                                {agenda.time}
                            </Button>
                        )
                }
            </div>
        </div>);
    }

    renderTherapistSpecialties = (specialties: Array<string>) => {
        const { therapies } = this.props;
        return (<div className="card-text">
            <small className="text-muted">Selecione uma especialidade:</small>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select" onChange={(evt) => this.setSpecialty(evt as any)} value={this.props.selectedSpecialty}>
                    <option key="nao selecionado"> Selecione... </option>
                    { 
                        specialties.filter(s => therapies.includes(s))
                            .map(spec => <option key={spec}> {spec} </option>) 
                    }
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
                <hr />
                <div className="box">
                    <Button variant="outline-secondary" size="sm" onClick={() => this.props.onReturn()}>Voltar</Button>
                </div>
            </div>
        );
    }
}
