import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaInfoCircle } from 'react-icons/fa';
import './AddTurning.scss' ;
import { setLeft, setRight } from '../modules/add';

// 데이터 카드(li)가 LeftControlbar로 넘어가기 위한 컴포넌트



const AddTurning = ({nation,lat,lng,spotname,img}) => {
    const dispatch = useDispatch() ;
    const onclick =()=>{
        dispatch(setRight(spotname,nation,p_lat,p_lng,img,time));
        dispatch(setLeft(spotname)) ;
    }
    return (
            <li className="AddTurning_contents_li">
                <div className="AddTurning_contents_img">
                    <img className='AddTurning_contents_img_i' src={img}></img>
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