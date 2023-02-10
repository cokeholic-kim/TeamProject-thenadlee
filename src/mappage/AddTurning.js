import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaInfoCircle } from 'react-icons/fa';
import './AddTurning.scss' ;
import { setLeft, setRight} from '../modules/add';

// 데이터 카드(li)가 LeftControlbar로 넘어가기 위한 컴포넌트



const AddTurning = ({adds}) => {
    console.log(adds)
    const dispatch = useDispatch() ;
    const onclick= ()=>{
        dispatch(setRight(adds.spotname,adds.nation,adds.lat,adds.lng ,adds.img,adds.time));
        // dispatch(setLeft(spotname,nation, p_lat, p_lng , img,  time)) ;
        // delData(spotname);

        // +시 배열에서 삭제
        // const  = state.adds.filter(add=> add.spotname !== action.spotname)
    }
    return (
            <li className="AddTurning_contents_li">
                <div className="AddTurning_contents_img">
                    <img className='AddTurning_contents_img_i' src={adds.img}></img>
                </div>
                <div className="AddTurning_contents_p">
                    <div className='AddTurning_contents_p_left'>
                        <p>{adds.nation}</p>
                        <p><span>{adds.spotname}</span></p>
                    </div>
                    <div className='AddTurning_contents_p_right'>
                        <div><FaInfoCircle/></div>
                        <div><span onClick={onclick}>X</span></div>
                    </div>
                </div>
            </li>
    );
};

export default AddTurning;