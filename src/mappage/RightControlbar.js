// right 컨트롤바 템플릿 - 디자인 등 적용... 

import React from 'react';
import './RightControlbar.scss' ;

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
                            <img src="https://www.myro.co.kr/getSpotImage/amsterdam?no=1021"></img>
                        </div>
                        <div className=" RightControlbar_contents_p">
                            <p>담광장</p>
                            <p>Dam's Park</p>
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