import React from 'react';

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faFileMedical, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

import DateSelector from './components/DateSelector';
import Appointment from './components/Appointment';
import Checkout from './components/Checkout';
import ThankYou from './components/ThankYou';

import './Agenda.css';

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

interface Props {}
interface State {
    steps: Array<string>,
    selectedDate: string,
    selectedAgenda: AgendaModel | null,
    selectedSpecialty: string
}

export default class Agenda extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            steps: [],
            selectedDate: '',
            selectedAgenda: null,
            selectedSpecialty: ''
        };
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

    render() {
        const stepperClasses = 'flex-sm-fill text-sm-center nav-link';
        const agendaStepClasses = stepperClasses + ' active';
        const specialtyStepClasses = this.isWorkflowActive('dateSelection') ? stepperClasses + ' active' : stepperClasses;
        const confirmationStepClasses = this.isWorkflowActive('specialtySelected') ? stepperClasses + ' active' : stepperClasses;

        return (
            <div className="container-fluid">
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
                                        && <DateSelector selectDate={this.selectDate} selectSpecialty={this.selectSpecialty} selectedSpecialty={this.state.selectedSpecialty} /> 
                                    }
                                    { 
                                        this.state.steps.length === 1
                                        && this.isWorkflowActive('dateSelection')
                                        && <Appointment selectedSpecialty={this.state.selectedSpecialty} selectedDate={this.state.selectedDate} selectSpecialty={this.selectSpecialty} selectAgenda={this.selectAgenda} />
                                    }
                                    { 
                                        this.state.steps.length === 2
                                        && this.isWorkflowActive('specialtySelected')
                                        && this.state.selectedAgenda !== null
                                        && <Checkout selectedAgenda={this.state.selectedAgenda} selectedSpecialty={this.state.selectedSpecialty} finishCheckout={this.finishCheckout} />
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
}
