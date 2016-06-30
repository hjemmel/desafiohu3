import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import {connect} from 'react-redux';
import {fetchOffers} from '../actions/index';

class OffersIndex extends Component {

    componentWillMount() {
        this.props.fetchOffers();
    }

    renderHotels() {
        return this.props.offers.map((offer) => {
            return (
                <ListGroupItem key={offer.id} href={`offers/${offer.id}`} header={offer.title}>{offer.description}</ListGroupItem>
            );
        });
    }

    render() {

        return (
            <div>
                <header>
                    <h1>Ofertas Hotel Urbano</h1>
                    <h3>Confira abaixo as ultimas ofertas para Las Vegas</h3>
                </header>
                <ListGroup>
                    {this.renderHotels()}
                </ListGroup>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {offers: state.offers.all};
}

export default connect(mapStateToProps, {fetchOffers})(OffersIndex);