import * as types from '../actions';

export default function(state = {}, action = {}) {
    switch (action.type) {

        case types.FETCH_GEOLOCATION_START:
            return {
                ...state,
                status: 'STARTING',
                lastError: null
            }

        case types.FETCH_GEOLOCATION_NOT_AVAILABLE:
            return {
                ...state,
                status: 'N/A'
            }

        case types.FETCH_GEOLOCATION_FAILURE:
            return {
                ...state,
                status: 'STARTING',
                lastError: action.error
            }

        case types.FETCH_GEOLOCATION_SUCCESS:
            const newLocation = {
                timestamp: action.location.timestamp,
                lat: action.location.coords.latitude,
                long: action.location.coords.longitude}
            return {
                status: 'OK',
                lastError: null,
                locations: [...state.locations || [], newLocation]
            }

        default:
            return state;
    }
}
