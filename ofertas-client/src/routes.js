import React from 'react'
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import OffersIndex from './containers/offers_index'
import OfferShow from './containers/offer_show'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={OffersIndex} />
        <Route path="offers/:id" component={OfferShow}/>
    </Route>
);