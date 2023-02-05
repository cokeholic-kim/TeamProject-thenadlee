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
                    <div className='FindPlace_country_Jeju_left'>
                        <div>
                            <img src="https://www.myro.co.kr/myro_image/city/jeju.jpg"></img>
                        </div>
                        <div>
                            <p>Jeju</p>
                            <p>대한민국 제주도</p>
                        </div>
                    </div>
                    <div className='FindPlace_country_Jeju_right'>
                        <p>
                            섬 전체가 하나의 거대한 관광자원인 제주도, 에메랄드 빛 물빛이 인상적인 협재 해수욕장은
                            제주 대표 여행지이며, 파도가 넘보는 주상절리와 용머리 해안은 제주에서만 볼 수 있는
                            천혜의 자연경관으로 손꼽힌다. 드라마 촬영지로 알려진 섭지코스는 꾸준한 사랑을 받고 있으며
                            한라봉과 흑돼지, 은갈치 등은 제주를 대표하는 음식이다
                        </p>
                        <div>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                        <div>
                            <button>일정만들기</button>
                        </div>
                    </div>
                </div>
                <div className='FindPlace_country_Singapore'>
                    <div className='FindPlace_country_Singapore_left'>
                        <div>
                            <img src="https://myro.co.kr/myro_image/city/singapore.jpg"></img>
                        </div>
                        <div>
                            <p>Singapore</p>
                            <p>싱가포르</p>
                        </div>
                    </div>
                    <div className='FindPlace_country_Singapore_right'>
                        <p>
                            여유로운 분위기, 쾌적한 환경, 편리한 대중교통, 다양한 볼거리와 즐길거리로 꾸준히 사랑받고 있는
                            여행지 싱가포르, 깨끗하고 치안이 좋아 혼자 여행을 준비하는 사람들에게도 인기 있는 곳이다.
                            도시가 크지 않아 왠만한 거리는 걷거나 지하철을 이용해서 다니기 수월하다
                        </p>
                        <div>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                        <div>
                            <button>일정만들기</button>
                        </div>
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