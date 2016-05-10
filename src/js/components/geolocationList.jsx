import React from 'react';
import {connect} from 'react-redux';

const GeolocationList = ({locations}) =>
    <div>
        <ul>
            {locations.map ((loc, listIndex) =>
                <li key={listIndex}>Lat: {loc.get('lat')}, Long:{loc.get('long')}</li>
            )}
        </ul>
    </div>

const mapStateToProps = (state, ownProps) => ({
    locations: state.getIn(['geolocation','locations']) || []
})

export default connect(mapStateToProps)(GeolocationList)
