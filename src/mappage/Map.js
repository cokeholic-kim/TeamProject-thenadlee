import React from 'react';
import LeftControlbar from './LeftControlbar';
import CreateSchedule from './CreateSchedule';
import { API_URL } from '../config/apiurl';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useAsync from '../customHook/useAsync';

async function productFetch(places){
    const response = await axios.get(`${API_URL}/place/${places}`);
    return response.data
}

const Map = () => {
    const {places} = useParams()
    const state = useAsync(()=>productFetch(places),[]);
    const {loading,error,data} = state;
    if (loading) return <div>로딩중</div>
    if (error) return <div>에러발생</div>
    if (!data) return null
    const [place] = data   
    return (
        <div style={{display:"flex"}}>
            <LeftControlbar place={place}/>
            <CreateSchedule place={place}/>
        </div>
    );
};

export default Map;