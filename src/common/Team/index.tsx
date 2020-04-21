import React from 'react';

import Nav from 'react-bootstrap/Nav';

import getApiUrl from '../../infra/constants';

import simoneImg from './team-img/simone.jpeg';
import lunderImg from './team-img/lunder.jpeg';
import amandaImg from './team-img/amanda.jpeg';

interface Therapist {
    name: string,
    phone: string,
    email: string,
    slug: string,
    specialties: Array<string>
}

interface Props {
    selectedSpecialty?: string,
    viewProfile?: boolean | false
}
interface State {
    error: any,
    isLoaded: boolean,
    items: Array<Therapist>
}

export default class Team extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        }
    }

    getTherapistImage = (email: string):any => {
        const imgs: Record<string, any> = {
            'silimatavares@gmail.com': simoneImg,
            'lunder@gmail.com': lunderImg,
            'amanda@gmail.com': amandaImg
        };

        return imgs[email];
    }

    loadTeam = (specialty?: string) => {
        let targetUrl = "/api/therapists";

        if(specialty) targetUrl = `${targetUrl}/for-specialty/${specialty}`

        fetch(getApiUrl(targetUrl))
            .then(res => res.json())
            .then(
                (result: Array<Therapist>) => {
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
        this.loadTeam(this.props.selectedSpecialty);
    }

    render() {
        return (
            <div id="especialidades" className="container">
                <hr />
                <h2 className="featurette-heading">Equipe</h2>
                <h3 className="lead">Conheça nosso time de profissionais que tem você em primeiro lugar</h3>
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        this.state.items &&
                        this.state.items.length > 0 &&
                        this.state.items.map(t => (
                            <div className="col mb-4" key={t.email}>
                                { 
                                    this.props.viewProfile &&
                                    (<div className="card">
                                        <img src={this.getTherapistImage(t.email)} 
                                            className="card-img-top" 
                                            alt={t.name} 
                                        />
                                    </div>)
                                }
                                { 
                                    !this.props.viewProfile &&
                                    (<Nav.Link href={`/team/${t.slug}`}>
                                        <div className="card">
                                            <img src={this.getTherapistImage(t.email)} 
                                                className="card-img-top" 
                                                alt={t.name} 
                                            />
                                        </div>
                                    </Nav.Link>)
                                }
                                
                            </div>
                        ))
                    }
                </div>
            </div>  
        );
    }
}
