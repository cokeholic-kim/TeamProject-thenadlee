import React from 'react';
import { useState } from 'react';
import AddSpotList from './AddSpotList';

const AddSpot = () => {
    const [ spot, setSpot ] = useState([
        {
            spot_code: '',
            spot_name: '',
            spot_lat: '',
            spot_ing: '',
        }
    ]) ;

    
    


    return (
        <div>
            <AddSpotList spot={spot}/>
        </div>
    );
};

export default AddSpot;
