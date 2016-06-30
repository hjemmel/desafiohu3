import {FETCH_OFFERS, FETCH_OFFER} from '../actions/index';

const INITIAL_STATE = {all: [], offer: null};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_OFFERS:
            return {...state, all: action.payload.data};
        case FETCH_OFFER:
            return {...state, offer: action.payload.data};
        default:
            return state;
    }
}