import React from 'react';

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faFileMedical, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

import getApiUrl from '../../infra/constants';

import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import WhatsApp from '../../common/WhatsApp';

import DateSelector from '../components/DateSelector';
import Appointment from '../components/Appointment';
import Checkout from '../components/Checkout';
import ThankYou from '../components/ThankYou';

import './index.css';

interface Therapist {
    name: string,
    phone: string,
    email: string,
    specialties: Array<string>
}

interface Customer {
    name: string,
    phone: string,
    email: string
}

export interface AgendaModel {
    date: string,
    time: string,
    therapist: Therapist,
    customer: Customer | null
}

interface Calendar {
    therapies: Array<string>
}

interface Match{
    params: Record<string, any>
}

interface Props {
    match: Match
}
interface State {
    steps: Array<string>,
    selectedDate: string,
    selectedAgenda: AgendaModel | null,
    selectedSpecialty: string,
    therapies: Array<string>,
}

export default class Agenda extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            steps: [],
            selectedDate: '',
            selectedAgenda: null,
            selectedSpecialty: '',
            therapies: [],
        };
    }

    componentDidMount() {
        const { params } = this.props.match;
        this.loadCalendar(params['calendar_name']);
    }

    loadCalendar = (name: string) => {
        let targetUrl = `/api/calendars/${name}`;

        fetch(getApiUrl(targetUrl))
            .then(res => res.json())
            .then(
                (result: Calendar) => {
                    this.setState({
                        therapies: result.therapies
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        therapies: []
                    });
                }
            )
    }

    resetWorkflow = (step?: string) => {
        if (step) {
            if(step === 'dateSelection' && this.state.selectedDate !== '')
            this.setState({
                steps: ['dateSelection']
            });
        } else {
            this.setState({
                steps: [],
                selectedDate: ''
            });
        }
    }

    selectDate = (dt: string) => {
        this.setState({
            steps: ['dateSelection'],
            selectedDate: dt
        });
    }

    selectSpecialty = (specialty: string) => {
        this.setState({ selectedSpecialty: specialty });
    }

    selectAgenda = (agenda: AgendaModel) => {
        this.setState({
            steps: ['dateSelection', 'specialtySelected'],
            selectedAgenda: agenda
        });
    }

    finishCheckout = (agenda: AgendaModel) => {
        this.setState({
            steps: ['dateSelection', 'specialtySelected', 'checkout'],
            selectedAgenda: agenda
        });
    }

    isWorkflowActive = (step: string):boolean => {
        return this.state.steps.includes(step);
    }

    renderAgenda = () => {
        const { params } = this.props.match;
        const stepperClasses = 'flex-sm-fill text-sm-center nav-link';
        const agendaStepClasses = stepperClasses + ' active';
        const specialtyStepClasses = this.isWorkflowActive('dateSelection') ? stepperClasses + ' active' : stepperClasses;
        const confirmationStepClasses = this.isWorkflowActive('specialtySelected') ? stepperClasses + ' active' : stepperClasses;

        return (
            <div className="container-fluid min-height-500">
                <div className="row justify-content-center mt-0">
                    <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                        <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                            <div className="row">
                                <div className="col-md-12 mx-0">
                                    <nav className="nav nav-pills flex-column flex-sm-row padding-left-right">
                                        <Button className={agendaStepClasses} variant="light" onClick={() => this.resetWorkflow()}>
                                            <FontAwesomeIcon icon={faCalendar} />&nbsp;1. Agenda
                                        </Button>
                                        <Button className={specialtyStepClasses} variant="light" onClick={() => this.resetWorkflow('dateSelection')}>
                                            <FontAwesomeIcon icon={faFileMedical} />&nbsp;2. Especialidade
                                        </Button>
                                        <Button className={confirmationStepClasses} variant="light">
                                            <FontAwesomeIcon icon={faCalendarCheck} />&nbsp;3. Confirmação
                                        </Button>
                                    </nav>
                                    <hr />
                                    { 
                                        this.state.steps.length === 0
                                        && <DateSelector therapies={this.state.therapies} calendarName={params['calendar_name']} selectDate={this.selectDate} selectSpecialty={this.selectSpecialty} selectedSpecialty={this.state.selectedSpecialty} /> 
                                    }
                                    { 
                                        this.state.steps.length === 1
                                        && this.isWorkflowActive('dateSelection')
                                        && <Appointment therapies={this.state.therapies}
                                                        calendarName={params['calendar_name']}
                                                        selectedSpecialty={this.state.selectedSpecialty} 
                                                        selectedDate={this.state.selectedDate} 
                                                        selectSpecialty={this.selectSpecialty} 
                                                        selectAgenda={this.selectAgenda}
                                                        onReturn={() => this.resetWorkflow()} />
                                    }
                                    { 
                                        this.state.steps.length === 2
                                        && this.isWorkflowActive('specialtySelected')
                                        && this.state.selectedAgenda !== null
                                        && <Checkout calendarName={params['calendar_name']}
                                                     selectedAgenda={this.state.selectedAgenda} 
                                                     selectedSpecialty={this.state.selectedSpecialty} 
                                                     finishCheckout={this.finishCheckout} 
                                                     onReturn={() => this.resetWorkflow('dateSelection')} />
                                    }
                                    { 
                                        this.state.steps.length === 3
                                        && this.isWorkflowActive('checkout')
                                        && this.state.selectedAgenda !== null
                                        && <ThankYou />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (<React.Fragment>
            <Menu />
            { this.renderAgenda() }
            <Footer />
            <WhatsApp />
        </React.Fragment>);
    }
}
