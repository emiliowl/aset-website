import React from 'react';

import Button from 'react-bootstrap/Button';

interface Props {
    selectDate: ((dtSelected: string) => void);
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

    componentDidMount() {
        fetch("http://localhost:5000/api/agendas/next-dates")
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
                            { slice.map(dt => 
                                <td key={dt}>
                                    <Button onClick={(evt: any) => {
                                        let pieces = dt.split('-');
                                        this.props.selectDate(`${pieces[2]}/${pieces[1]}/${pieces[0]}`);
                                    }}>{dt}</Button>
                                </td>) 
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
                <div className="table-responsive-xl">
                    <table className="table">
                    { this.renderDates() }
                    </table>
                </div>
            </div>
        );
    }
}
