import React from "react";
import { Link } from "react-router-dom";
import './Header.scss' ;

function Header(){

    return(
        <header>
            <div className="header_top">
                <div className="header_top_left">
                    <Link to="/">
                        <h1>The나들이 <span>떠나 나들이</span></h1>
                    </Link>
                </div>
                <ul className="header_top_right">
                    <a href="tour"><li>여행지</li></a>
                    <a href="footer"><li>이용방법</li></a>
                    <a href="header"><li>THE나들이</li></a>
                    <Link to="/login"><li>로그인</li></Link>
                </ul>
            </div>
        </header>    
    )
}

export default Header
