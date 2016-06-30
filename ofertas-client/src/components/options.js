import React, {Component} from 'react';

export default class Options extends Component {

    priceFormatted(price) {
        return price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    }

    renderOptions(options) {
        return options.map((option) => {
            return (
                <li key={option.id}>
                    <div className="option-box-item">
                        <div className="col-md-5 option-section">
                            <h4>{option.title}</h4>
                            <p>{option.description}</p>
                        </div>
                        <div className="col-md-2 option-section">
                            <h4>Saída:</h4>
                            { option.from.map(function (local, index) {
                                return (
                                    <p key={ index }>
                                        { local }
                                    </p>
                                );
                            })}
                        </div>
                        <div className="col-md-2 text-center option-section option-numbers">
                            <span><strong>{option.daily}</strong> <small className="glyphicon glyphicon-asterisk"></small></span><br/>
                            <small>Diárias</small>
                            <hr className="divider"/>
                            <span><strong>1</strong> <small className="glyphicon glyphicon-user"></small></span><br/>
                            <small>Pessoa</small>
                        </div>
                        <div className="col-md-3 option-section text-center">
                            <p className="orange-title">$ Tarifa não reembolsável</p>
                            <p>Por Apenas: <br/>
                                <span className="currency-type">R$ </span>
                                <span className="price">{this.priceFormatted(option.price)}</span><br/>
                                + taxas em até 10x
                            </p>
                            <button className="btn btn-orange">QUERO IR</button>
                        </div>
                    </div>
                </li>
            );
        });
    }

    render() {

        const {options} = this.props;

        if (!options) {
            return <div>Carregando...</div>
        }

        return (
            <div>
                <div className="option-header-box">
                    <span className="filter-title text-uppercase">Escolha sua melhor Opção</span>
                    <div className="filters pull-right">
                        <form className="form-inline">
                            <div className="form-group">
                                <label className="text-uppercase">Saídas</label>
                                <select className="form-control" onChange={(event) => this.props.onFilterChange(event.target.value, 'from')}>
                                    <option value="">Escolha</option>
                                    <option value="Belém">Belém</option>
                                    <option value="Boa Vista">Boa Vista</option>
                                    <option value="Brasilia">Brasilia</option>
                                    <option value="Campo Grande">Campo Grande</option>
                                    <option value="Cuiabá">Cuiabá</option>
                                    <option value="Manaus">Manaus</option>
                                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                                    <option value="Salvador">Salvador</option>
                                    <option value="São Paulo">São Paulo</option>
                                    <option value="Ilhéus">Ilhéus</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="text-uppercase">N de Diárias</label>
                                <select className="form-control" onChange={(event) => this.props.onFilterChange(event.target.value, 'days')}>
                                    <option value="">Escolha</option>
                                    <option value="5">5</option>
                                    <option value="8">8</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>

                <ul className="list-unstyled option-list">
                    {this.renderOptions(options)}
                </ul>
            </div>
        );
    }
}