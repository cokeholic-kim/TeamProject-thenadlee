import React from 'react';
import { useDispatch } from 'react-redux';

// 데이터 카드(li)가 LeftControlbar로 넘어가기 위한 컴포넌트

const dispatch = useDispatch() ;

const AddTurning = () => {
    dispatch()
    return (
        <div>
            <li>
                <div>
                    <img className='RightControlbar_contents_img_i' src="https://www.myro.co.kr/getSpotImage/amsterdam?no=1021"></img>
                </div>
                <div>
                    <div>
                        <p>{nation}</p>
                        <p><span>{spotname}</span></p>
                    </div>
                    <div>
                        <div><FaInfoCircle/></div>
                        <div><span onClick={onClick}>X</span></div>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default AddTurning;
