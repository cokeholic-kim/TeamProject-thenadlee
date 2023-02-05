import React from 'react';
import LeftControlbar from './LeftControlbar';
import CreateSchedule from './CreateSchedule';

const Map = () => {
    return (
        <div style={{display:"flex"}}>
            <LeftControlbar/>
            <CreateSchedule/>
        </div>
    );
};

export default Map;