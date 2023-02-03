import React from "react";
import './Header.scss' ;

function Header(){

    return(
        <header>
            <div class="header_top">
                <div class="header_top_left">
                    <a href="#">
                        <h1>The나들이 <span>떠나 나들이</span></h1>
                    </a>
                </div>
                <ul class="header_top_right">
                    <a href="#"><li>여행지</li></a>
                    <a href="#"><li>이용방법</li></a>
                    <a href="#"><li>THE나들이</li></a>
                    <a href="#"><li>로그인</li></a>
                </ul>
            </div>
        </header>    
    )
}

export default Header
