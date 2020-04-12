import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import getApiUrl from '../../infra/constants';

import './DateSelector.css';

interface Props {
    selectedSpecialty: string,
    selectDate: ((dtSelected: string) => void),
    selectSpecialty: ((specialty: string) => void),
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
            items: []
        };
    }

    setSpecialty = (event: React.FormEvent<HTMLInputElement>) => {
        const selectedSpecialty = event.currentTarget.value;

        this.loadAgenda(selectedSpecialty);
        this.props.selectSpecialty(selectedSpecialty);
    }

    loadAgenda = (specialty?: string) => {
        let targetUrl = "/api/agendas/next-dates";

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
        const specialties = [
            "Acupuntura",
            "Aromaterapia",
            "Barras de Access",
            "Cromoterapia",
            "Mesa Radiônica",
            "Quiropraxia",
            "Reiki",
            "Terapia Floral",
        ];
        return (<div className="card-text">
            <small className="text-muted">Selecione uma especialidade:</small>
            <Form.Group controlId="SpecialtySelection">
                <Form.Control as="select" onChange={(evt) => this.setSpecialty(evt as any)} value={this.props.selectedSpecialty}>
                    <option key="" value=""> Não filtrar ... </option>
                    { specialties.map(spec => <option key={spec}> {spec} </option>) }
                </Form.Control>
            </Form.Group>
        </div>);
    }

    renderDates = () => {
        if(!this.state.items || this.state.items.length === 0)
            return null;

        let slices = [];
        let i, j = 0;
        let chunk = 3;
        for (i=0,j=this.state.items.length; i < j; i+=chunk) {
            slices.push(this.state.items.slice(i, i+chunk));
        }

        return (
            <tbody>
                { slices.map(slice => {
                    return (
                        <tr key={slices.length}>
                            { 
                                slice.map(dt => {
                                    const pieces = dt.split('-');
                                    const date = `${pieces[2]}/${pieces[1]}/${pieces[0]}`;

                                    return (<td key={date}>
                                        <Button onClick={(evt: any) => {
                                            this.props.selectDate(date);
                                        }}>{date}</Button>
                                    </td>);
                                })
                            }
                        </tr>
                    );
                }) }
            </tbody>
        );
    }

    render() {
        return (
            <div className="container">
                <h2><strong>Agenda</strong></h2>
                <p>Selecione uma data para verificar a disponibilidade de profissionais...</p>
                <hr />
                { this.renderSpecialties() }
                <div className="table-responsive-xl">
                    <table className="table">
                    { this.renderDates() }
                    </table>
                </div>
            </div>
        );
    }
}
