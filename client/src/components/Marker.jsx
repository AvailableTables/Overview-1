import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={props.zoom} defaultCenter={props.location}>
      {props.isMarkerShown && (
        <Marker
          icon="http://media.otstatic.com/img/map-marker-blue-1e9959e1eab6a1311c5bc48b4086b596.png"
          position={props.location}
        />
      )}
    </GoogleMap>
  ))
);
export default MyMapComponent;
