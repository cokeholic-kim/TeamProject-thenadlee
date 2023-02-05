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
                    <div>
                        <img></img>
                    </div>
                    <div>
                        <p>Jeju</p>
                        <p>대한민국 제주도</p>
                    </div>
                </div>
                <div className='FindPlace_country_Singapore'>
                    <div>
                        <img></img>
                    </div>
                    <div>
                        <p>Singapore</p>
                        <p>싱가포르</p>
                    </div>
                </div>
                <div className='FindPlace_country_China'>
                    <div>
                        <img></img>
                    </div>
                    <div>
                        <p>Heaerbin</p>
                        <p>중국 하얼빈</p>
                    </div>
                </div>
                <div className='FindPlace_country_Canada'>
                    <div>
                        <img></img>
                    </div>
                    <div>
                        <p>Vancouver</p>
                        <p>캐나다 벤쿠버</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindPlace;