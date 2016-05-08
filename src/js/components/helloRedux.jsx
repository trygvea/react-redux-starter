import React from 'react';
import HelloHeader from './helloHeader'
import HelloCounter from './helloCounter'
import GeolocationList from './geolocationList'

export default props =>
    <div className="hello">
        <HelloHeader/>
        <HelloCounter/>
        <GeolocationList />
    </div>

