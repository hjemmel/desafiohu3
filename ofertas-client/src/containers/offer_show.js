import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {fetchOffer, fetchOptions} from '../actions/index';
import PhotoGallery from '../components/photo_galery';
import Options from '../components/options';

class OfferShow extends Component {

    static contextTypes = {
        router: PropTypes.object
    };


    constructor(props) {
        super(props);
        this.filters = {from: '', days: ''};
    }


    componentWillMount() {
        this.props.fetchOffer(this.props.params.id);
        this.props.fetchOptions(this.props.params.id, '', '');
    }




    onFilterChange(value, filter) {

        console.log(this.filters);

        this.filters[filter] = value;

        this.props.fetchOptions(this.props.params.id, this.filters.from, this.filters.days);
    }

    render() {
        const {offer, options} = this.props;

        if (!offer) {
            return <div>Carregando...</div>;
        }

        return (
            <div className="row">

                <div className="col-md-12">
                    <header className="header-offer">
                        <h1>{offer.title}</h1>
                        <p><strong>{offer.location}</strong> <br/>
                            {offer.description}</p>
                    </header>
                    <section className="section-gallery">
                        <PhotoGallery photos={offer.photos}/>
                    </section>
                    <section>
                        <Options options={options}
                                 onFilterChange={(value, filter) => this.onFilterChange(value, filter)}/>
                    </section>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        offer: state.offers.offer,
        options: state.options
    };
}

export default connect(mapStateToProps, {fetchOffer, fetchOptions})(OfferShow);