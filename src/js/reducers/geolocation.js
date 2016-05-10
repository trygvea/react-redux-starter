import Immutable, { Map, List } from 'immutable';
import * as types from '../actions';

export default function(state = Map(), action = {}) {
    switch (action.type) {

        case types.FETCH_GEOLOCATION_START:
            return state.set('status', 'STARTING')
                        .set('lastError', null)

        case types.FETCH_GEOLOCATION_NOT_AVAILABLE:
            return state.set('status', 'N/A')

        case types.FETCH_GEOLOCATION_FAILURE:
            return state.set('status', 'FAILURE')
                        .set('lastError', action.error)

        case types.FETCH_GEOLOCATION_SUCCESS:
            return state.set('status', 'OK')
                        .set('lastError', null)
                        .update('locations', locations => locations ? locations : List())
                        .update('locations',
                            locations => locations.push(Immutable.fromJS({
                                    timestamp: action.location.timestamp,
                                    lat: action.location.coords.latitude,
                                    long: action.location.coords.longitude
                                }))
                        )

        default:
            return state;
    }
}
