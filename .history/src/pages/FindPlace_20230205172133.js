import React from 'react';
import './FindPlace.scss' ;

function FindPlace () {
    return (
        <div className='FindPlace'>
            <div className='FindPlaceP'>
                <p>어디로 여행을 떠나시나요</p>
                <p>여행지를 검색하거나 목록에서 직접 선택해주세요</p>
            </div>
            <div className='FindPlace_country'>
                <div className='FindPlace_country_Jeju'>
                    
                </div>
                <div className='FindPlace_country_Singapore'>

                </div>
                <div className='FindPlace_country_China'>

                </div>
                <div className='FindPlace_country_Canada'>

                </div>

            </div>
        </div>
    );
};

export default FindPlace;