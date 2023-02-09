import { React, useMemo, useState } from "react";
import { GoogleMap, Marker, MarkerF, Polyline, useJsApiLoader,DrawingManager } from "@react-google-maps/api";
import axios from "axios";
import { API_URL } from "../config/apiurl";
import { useParams } from "react-router-dom";
import useAsync from "../customHook/useAsync";
import { useSelector } from "react-redux";
import { SearchBox } from "./SearchBox";

const containerStyle = {
  width: '60%',
  height: '100vh',
};

async function markerFetch(places){
  const response = await axios.get(`${API_URL}/marker/${places}`);
  return response.data
}

//google map library
const libs = ['places', 'visualization', 'drawing', 'geometry'];

//CreateSchedule
  const CreateSchedule = ({place}) => {
  const state_places = useSelector(state=>state.add.adds)
  const center = useMemo(() => ({ lat: place.city_lat, lng: place.city_lng }), []);
//맵구현
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDBnr2sMNGCNmpZ0dUI9LAWq6nwZU3-eAM",
    libraries: libs
  });

  const {places} = useParams()
  const state = useAsync(()=>markerFetch(places),[]);
  const {loading,error,data} = state;
  if (loading) return <div>로딩중</div>
  if (error) return <div>에러발생</div>
  if (!data) return null

  const onLoad = (marker,polyline,drawingManager) => {
    console.log("marker: ", marker);
    console.log("polyline: ",polyline);
    console.log("drawingManager: ", drawingManager);
  };

  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };
  
  //polyline 경로 배열
  const path = [];
  state_places.forEach(d => {
    let lat = d.lat
    let lng = d.lng
    path.push({lat,lng})
  });

  const optionsPolyline = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight:2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    paths:path,
    zIndex: 1
  };
  //drawing manager
  const onPolylineComplete = polyline => {
    console.log(polyline);
  }
  


  if (!isLoaded) return <div>Loading...</div>;

  return (
      <GoogleMap
        zoom={place.zoom}
        options={options}
        libraries={libs}
        center={center}
        mapContainerClassName="map-container"
        mapContainerStyle={containerStyle}
        >
        <Polyline onLoad={onLoad} path={path} optionsPolyline={optionsPolyline}/>
        {state_places.map((d,index)=><Marker key={index} label={`${d.spotname}`} onLoad = {onLoad} position={{lat:d.lat,lng:d.lng}}/>)}
        <DrawingManager
          onLoad={onLoad}
          onPolylineComplete={onPolylineComplete}
        />
        <SearchBox />
      </GoogleMap>
  );
};

export default CreateSchedule;