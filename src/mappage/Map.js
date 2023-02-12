import React, { useEffect } from 'react';
import LeftControlbar from './LeftControlbar';
import RightControlbar from './RightControlbar';
import CreateSchedule from './CreateSchedule';
import { API_URL } from '../config/apiurl';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useAsync from '../customHook/useAsync';
import { useDispatch } from 'react-redux';
import { setReset } from '../modules/add';
import './Map.scss' ;

async function productFetch(places){
    const response = await axios.get(`${API_URL}/place/${places}`);
    return response.data
}

const Map = () => {
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(setReset())
    // },[])
    const {places} = useParams()
    const state = useAsync(()=>productFetch(places),[]);
    const {loading,error,data} = state;
    if (loading) return <div>로딩중</div>
    if (error) return <div>에러발생</div>
    if (!data) return null
    const [place] = data;   
    return (
        <div style={{display:"flex"}}>
            <LeftControlbar place={place}/>
            <CreateSchedule place={place}/>
            <RightControlbar place={place}/>
        </div>
    );
};

export default Map;