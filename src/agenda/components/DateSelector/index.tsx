import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import getApiUrl from '../../../infra/constants';

import './index.css';

interface Props {
    calendarName: string,
    selectedSpecialty: string,
    selectDate: ((dtSelected: string) => void),
    selectSpecialty: ((specialty: string) => void),
    therapies: Array<string>,
}
interface State {
    error: any,
    isLoaded: boolean,
    items: Array<string>
}

export default class DateSelector extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    setSpecialty = (event: React.FormEvent<HTMLInputElement>) => {
        const selectedSpecialty = event.currentTarget.value;
        this.loadAgenda(selectedSpecialty);
        this.props.selectSpecialty(selectedSpecialty);
    }

    loadAgenda = (specialty?: string) => {
        let targetUrl = `/api/calendars/${this.props.calendarName}/agendas/next-dates`;

        if(specialty) targetUrl = `${targetUrl}/${specialty}`

        fetch(getApiUrl(targetUrl))
            .then(res => res.json())
            .then(
                (result: Array<string>) => {
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

    renderSpecialties = () => {
        const { therapies } = this.props;
        return (<div className="card-text">
            <small className="text-muted">Selecione uma especialidade:</small>
            <Form.Group controlId="SpecialtySelection">
                <Form.Control as="select" onChange={(evt) => this.setSpecialty(evt as any)} value={this.props.selectedSpecialty}>
                    <option key="" value=""> Não filtrar ... </option>
                    { therapies.map(spec => <option key={spec}> {spec} </option>) }
                </Form.Control>
            </Form.Group>
        </div>);
    }

    renderDates = () => {
        if(!this.state.isLoaded)
            return <span>Carregando...</span>;
        if(this.state.isLoaded && (!this.state.items || this.state.items.length === 0))
            return <span>Infelizmente não temos horários disponíveis, entre em contato para saber mais.</span>;

        // const items = []
        // for(let i = 0; i < this.state.items.length; i = i+3) {
        //     items.push(this.state.items.slice(i, i+3));
        // }

        return (
            <div>
                { 
                    [1].map(itemList => {
                        return (
                            <div className="row">
                                {
                                    this.state.items.map(item => {
                                        const dtPieces = item.split('-');
                                        const dt = `${dtPieces[2]}/${dtPieces[1]}/${dtPieces[0]}`;
                                        return (
                                            <div className="col-xs-4 spaced-1 w-25" key={dt}>
                                                <div>
                                                    <Button onClick={(evt: any) => {this.props.selectDate(dt);}}>
                                                        { dt }
                                                    </Button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <br />
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <h2><strong>Agenda</strong></h2>
                <p>Selecione uma data para verificar a disponibilidade de profissionais...</p>
                <hr />
                { this.renderSpecialties() }
                { this.renderDates() }
            </div>
        );
    }
}
