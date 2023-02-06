import { React, useMemo, useState } from "react";
import { GoogleMap, Marker, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";
import { API_URL } from "../config/apiurl";
import { useParams } from "react-router-dom";
import useAsync from "../customHook/useAsync";

const containerStyle = {
  width: '60%',
  height: '100vh',
};

async function markerFetch(places){
  const response = await axios.get(`${API_URL}/marker/${places}`);
  return response.data
}


const CreateSchedule = ({place}) => {
  const center = useMemo(() => ({ lat: place.city_lat, lng: place.city_lng }), []);
  const [target, setTarget] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDBnr2sMNGCNmpZ0dUI9LAWq6nwZU3-eAM",
  });

  const {places} = useParams()
  const state = useAsync(()=>markerFetch(places),[]);
  const {loading,error,data} = state;
  if (loading) return <div>로딩중</div>
  if (error) return <div>에러발생</div>
  if (!data) return null
  const [MarkerPosition] = data   
  console.log(data)




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
const markerClicked = (key) => {
    setTarget(key);
  }
  console.log(target)


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
          
        {data.map(d=><Marker key={d.spot_code} label={`${d.spot_name}`} onLoad={onLoad} position={{lat:d.spot_lat,lng: d.spot_lng}}/>)}
        <MarkerF
        onLoad={onLoad}
        position={center}
        />
      </GoogleMap>
  );
};

export default CreateSchedule;