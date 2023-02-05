import { React, useMemo, useState } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";


const containerStyle = {
  width: '60%',
  height: '100vh',
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDBnr2sMNGCNmpZ0dUI9LAWq6nwZU3-eAM",
  });

  const center = useMemo(() => ({ lat: 49.28274800642964, lng: -123.12115897601815 }), []);

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };


  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };
//   const markerCoors = {
//     lat: ,
//     lng: ,
//   };
const [target, setTarget] = useState(null);
const markerClicked = (key) => {
    setTarget(key);
  }


  if (!isLoaded) return <div>Loading...</div>;

  return (
      <GoogleMap
        zoom={13}
        options={options}
        center={center}
        mapContainerClassName="map-container"
        mapContainerStyle={containerStyle}
        onChildClick={markerClicked}
        
        >
        <MarkerF
        onLoad={onLoad}
        position={center}
        />
      </GoogleMap>
  );
};

export default Map;