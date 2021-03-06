import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

function GoogleMaps(){
    return(
    <GoogleMap
        defaultZomm={10}
        defaultCenter={{lat: 45.421532, lng: -75.697189}}
    >
    </GoogleMap>
    )
}

const WrappedMap =  withScriptjs(withGoogleMap(GoogleMaps));

 export default WrappedMap;