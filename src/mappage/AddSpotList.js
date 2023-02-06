// Addspot의 정보가 담긴 배열을 map으로 펼친다 addSpotItem으로 넘겨주어, 왼쪽으로 넘어갈 수 있게한다. 

import React from 'react';
import AddSpotItem from './AddSpotItem';
import RightControlbar from './RightControlbar';

const AddSpotList = ({spot}) => {
    // 펼쳐지는 배열들 설정
    return (
        <div className="AddSpotList">
            {spot.map(spot=>(
                <RightControlbar>
                    <AddSpotList/>
                    <AddSpotItem spot={spot} key={spot_code}/>
                </RightControlbar>
            ))}
            
        </div>
    );
};

export default AddSpotList;