import { React, useMemo, useState } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";


const containerStyle = {
  width: '60%',
  height: '100vh',
};

const CreateSchedule = ({place}) => {
  console.log(place)
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDBnr2sMNGCNmpZ0dUI9LAWq6nwZU3-eAM",
  });

  const center = useMemo(() => ({ lat: place.city_lat, lng: place.city_lng }), []);

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
        zoom={place.zoom}
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

export default CreateSchedule;