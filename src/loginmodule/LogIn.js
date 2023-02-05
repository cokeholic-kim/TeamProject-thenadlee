import React from 'react';
import './Login.scss'
import { Link } from 'react-router-dom';


const LogIn = () => {
    return (
        <div className='center'>
            <div className='container'>
                <div className='text'>LOG IN</div>
                <div className='small-text'>효율적인 여행 가이드 THE-나들이</div>
                <div className='form-container'>
                    <div className='data'>
                        <label>E-mail</label>
                        <input type='text' id='LoginId' required></input>
                    </div>
                    <div className='data'>
                        <label>Password</label>
                        <input type="password" id="myroLoginPwd" onKeyDownCapture={(e)=>{console.log(e)}} required=""></input>
                    </div>
                    <div className='forgot-pass'>
                        <a href="/findPassword">비밀번호를 잊으셨나요?</a>
                    </div>
                    <div className='btn'>
                        <div className="inner"></div>
                        <button type="submit" id="LoginBtn" onClick={(e)=>{console.log(e)}}>로그인</button>
                    </div>
                    <div className='datsignup-linka'>
                        "회원이 아니라면?"
                        <Link to="/join">회원가입하기</Link>
                    </div>
                </div>
                <div className="divider-container">
                    <div className="divider"></div>
                    <span>or</span>
                </div>
                <div className="sns-text">SNS 간편 로그인</div>
                <div className="socialBtn-container">
                    <div className="socialBtn">
                        <div className="socialBtn-image-container" onClick={(e)=>{console.log(e)}}>
                            <img src="/Images/kakaolink_btn.png" alt="logo"/>
                        </div>
                    </div>
                    <div className="socialBtn">
                        <div className="socialBtn-image-container" onClick={(e)=>{console.log(e)}}>
                            <img src="Images/naver_btn.png" alt="logo"/>
                        </div>
                    </div>
                    
                    <div className="socialBtn google-mobile-login">
                        <div className="socialBtn-image-container" onClick={(e)=>{console.log(e)}}>
                            <img src="/Images/google_btn.png" alt="logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <script src="/build/login.js"></script>
        // <script>
        //     let headAddress = 'https://www.myro.co.kr';
        //     let savedRouteTokenKey = '';
        //     let fromMobile = '0';
        // </script>
    );
};

export default LogIn;