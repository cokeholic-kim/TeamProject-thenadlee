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
                        <img src="https://www.myro.co.kr/myro_image/city/jeju.jpg"></img>
                    </div>
                    <div>
                        <p>Jeju</p>
                        <p>대한민국 제주도</p>
                    </div>
                </div>
                <div className='FindPlace_country_Singapore'>
                    <div>
                        <img src="https://myro.co.kr/myro_image/city/singapore.jpg"></img>
                    </div>
                    <div>
                        <p>Singapore</p>
                        <p>싱가포르</p>
                    </div>
                    <div>
                        <p>
                            여유로운 분위기, 쾌적한 환경, 편리한 대중교통, 다양한 볼거리와 즐길거리로 꾸준히 사랑받고 있는
                            여행지 싱가포르, 깨끗하고 치안이 좋아 혼자 여행을 준비하는 사람들에게도 인기 있는 곳이다.
                            도시가 크지 않아 왠만한 거리는 걷거나 지하철을 이용해서 다니기 수월하다
                        </p>
                    </div>
                </div>
                <div className='FindPlace_country_China'>
                    <div>
                        <img src="https://www.travelchina.org.cn/gjlycms/sitefiles/img/gjly_zh/tourcity/14937052039131080.jpg"></img>
                    </div>
                    <div>
                        <p>Heaerbin</p>
                        <p>중국 하얼빈</p>
                    </div>
                </div>
                <div className='FindPlace_country_Canada'>
                    <div>
                        <img src="https://www.myro.co.kr/myro_image/city/vancouver.jpg"></img>
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