import React,{useState} from 'react';
import { MdAirplaneTicket } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import './LeftControlbar.scss'
import { useDispatch, useSelector } from 'react-redux';
import AddTurning from './AddTurning';
import { setReset } from '../modules/add';

const LeftControlbar = ({place}) => {

    const dispatch = useDispatch() ;
    const onClickDelete= ()=>{
        dispatch(setReset()) ;
    }

    const places = useSelector(state=>state.add.adds)
    console.log(places)
    return (
        <div className='LeftControlbar'>
            <div className='background'>
                <div className='Place'>
                    <div id="korCityname">{place.kor_cityname}</div>
                    <div id="engCityname">{place.cityname}</div>
                </div>
                <div className='planeticketing'>
                    <div id="Flightbutton">
                        <button className="Flightbutton">
                            <MdAirplaneTicket/>
                            <img style={{width:"80px"}} src="../imgs/kyowon.png" alt="placephoto" loading='lazy'></img>
                        </button>
                    </div>
                </div>    
                <div className='selectList'>
                    선택목록
                </div>
                <div className="center" style={{margin:"16px 0",width:"100%" }}>
                    <ul id="tabs" className="tabs tabs-fixed-width">
                        <li className="tab">
                            <a id="selecteSpotsTab" style={{textDecoration:"none !important"}}>장 소</a>
                        </li>
                    </ul>
                </div>
                <div className="left_bottom_ul">
                    <div className="center" style={{margin:"8px 0"}}>
                        <span id="seletedSpotsCount">0</span>
                        <span id="totalTimeArea"><span>(총</span><span id="sumOfSpotStayingH">0</span><span data-langnum="20">시간</span>)</span>
                    </div>
                    <div className="center2" style={{display:"flex", justifyContent: "center" , alignItems: "center", width: "100%" , padding: "8px 0"}}>
                        <button className="Clearbtn" onClick={(e)=>{console.log(e)}}>
                            <h6 onClick={onClickDelete}>장소전체삭제</h6>
                        </button>
                    </div>
                    <ul className="ul-style" id="cart">
                        {/* 들어갈위치 */}
                        { places.length != 0 ? places.map((d,index)=><AddTurning key={index} lat={d.lat} lng={d.lng} nation={d.nation} spotname={d.spotname}/>): 
                            <li id="cartList" className="center">
                                <hs>
                                    <span data-langnum="27">가고 싶은 장소들을 검색하여 추가해주세요.</span><br/>
                                    <span data-langnum="28">설정하신 일자별 여행시간 내에서 </span><br/>
                                    <span data-langnum="29">하루 평균 최대 8개의 장소까지 선택 가능합니다.</span><br/><br/>
                                    <AiOutlinePlus/>
                                </hs>
                            </li>
                        }
                    </ul>
                </div>
                </div>
            </div>            
    );
};

export default LeftControlbar;