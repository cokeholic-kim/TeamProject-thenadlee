import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaInfoCircle } from 'react-icons/fa';
import { setDelete } from '../modules/add';
import './AddTurning.scss' ;

// 데이터 카드(li)가 LeftControlbar로 넘어가기 위한 컴포넌트



const AddTurning = ({nation,lat,lng,spotname}) => {
    const dispatch = useDispatch() ;
    const onclick =()=>{
        dispatch(setDelete(spotname))
    }
    return (
            <li className="AddTurning_contents_li">
                <div className="AddTurning_contents_img">
                    <img className='AddTurning_contents_img_i' src="https://www.myro.co.kr/getSpotImage/amsterdam?no=1021"></img>
                </div>
                <div className="AddTurning_contents_p">
                    <div className='AddTurning_contents_p_left'>
                        <p>{nation}</p>
                        <p><span>{spotname}</span></p>
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