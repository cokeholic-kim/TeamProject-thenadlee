// right 컨트롤바 템플릿 - 디자인 등 적용... 

import React from 'react';
import './RightControlbar.scss' ;
import { FaInfoCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const RightControlbar = () => {
    return (
        <div className=" RightControlbar">
            <div className=" RightControlbar_inner">
                <div className=" RightControlbar_header">
                    <p>추천장소</p>
                </div>
                <ul className=" RightControlbar_contents">
                    <li className=" RightControlbar_contents_li">
                        <div className=" RightControlbar_contents_img">
                            <img className='RightControlbar_contents_img_i' src="https://www.myro.co.kr/getSpotImage/amsterdam?no=1021"></img>
                        </div>
                        <div className=" RightControlbar_contents_p">
                            <div className='RightControlbar_contents_p_left'>
                                <p>담광장</p>
                                <p><span>Dam's Park</span></p>
                            </div>
                            <div className='RightControlbar_contents_p_right'>
                                <div><FaInfoCircle/></div>
                                <div><span><FaPlus/></span></div>
                            </div>
                        </div>
                    </li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default RightControlbar;