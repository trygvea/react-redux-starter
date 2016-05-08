export const HELLO_INCREMENT = 'HELLO_INCREMENT'

export const FETCH_GEOLOCATION_START = 'FETCH_GEOLOCATION_START'
export const FETCH_GEOLOCATION_NOT_AVAILABLE = 'FETCH_GEOLOCATION_NOT_AVAILABLE'
export const FETCH_GEOLOCATION_SUCCESS = 'FETCH_GEOLOCATION_SUCCESS'
export const FETCH_GEOLOCATION_FAILURE = 'FETCH_GEOLOCATION_FAILURE'


export const helloIncrement= () =>
    ({ type: HELLO_INCREMENT })

export const fetchGeolocationStart = () =>
    ({ type: FETCH_GEOLOCATION_START })

export const fetchGeolocationSuccess = (location) =>
    ({ type: FETCH_GEOLOCATION_SUCCESS, location:location })

export const fetchGeolocationFailure = (error) =>
    ({ type: FETCH_GEOLOCATION_FAILURE, error: error })

export const fetchGeolocationNotAvailable = () =>
    ({ type: FETCH_GEOLOCATION_NOT_AVAILABLE })


export const fetchGeolocation = () => dispatch => {
    const {geolocation} = navigator
    if (geolocation) {
        dispatch(fetchGeolocationStart())
        geolocation.getCurrentPosition(
            location => dispatch(fetchGeolocationSuccess(location)),
            error => dispatch(fetchGeolocationFailure(error)),
            {maximumAge: 500000, enableHighAccuracy: true, timeout: 6000});
    } else {
        dispatch(fetchGeolocationNotAvailable())
    }
}
