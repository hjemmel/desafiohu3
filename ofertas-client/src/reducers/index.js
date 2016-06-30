import { combineReducers } from 'redux';
import OffersReducer from './reducer_offers';
import OfferOptionsReducer from './reducer_offer_options';

const rootReducer = combineReducers({
  offers: OffersReducer,
  options: OfferOptionsReducer
});

export default rootReducer;