import React from 'react';

export default class ThankYou extends React.PureComponent {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1 className="display-3 text-nowrap">Obrigado!</h1>
                <p className="lead">
                    <strong>Por favor, verifique seu email</strong> para mais instruções sobre seu agendamento.
                </p>
                <hr />
                <p>
                    Alguma dificuldade? <a href="/">Fale Conosco</a>
                </p>
                <p className="lead">
                    <a className="btn btn-primary btn-sm" 
                        href="/" 
                        role="button">
                            Voltar para a home
                    </a>
                </p>
            </div>
        );
    }   
}
