import React from "react";

function Header(){

    return(
        <header>
            <h1>The 나들이 <span>떠나 나들이</span></h1>
            <ul className='menu'>
                <li>여행지</li>
                <li>이용방법</li>
                <li>THE나들이</li>
                <li>로그인</li>
            </ul>
        </header>    
    )
}

export default Header