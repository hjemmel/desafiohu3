import axios from 'axios'

export const FETCH_OFFERS   = 'FETCH_OFFERS';
export const FETCH_OFFER    = 'FETCH_OFFER';
export const FETCH_OPTIONS  = 'FETCH_OPTIONS';

const ROOT_URL = 'http://localhost:5000/';

export function fetchOffers() {
    const request = axios.get(`${ROOT_URL}hotels`);

    return {
        type: FETCH_OFFERS,
        payload: request
    }
}

export function fetchOffer(id) {
    const request = axios.get(`${ROOT_URL}hotels/${id}`);

    return {
        type: FETCH_OFFER,
        payload: request
    }
}

export function fetchOptions(id, from, days) {
    const request = axios.get(`${ROOT_URL}hotels/${id}/offers?from=${from}&days=${days}`);

    return {
        type: FETCH_OPTIONS,
        payload: request
    }
}