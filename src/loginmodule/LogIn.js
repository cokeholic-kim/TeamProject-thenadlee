import React from 'react';

import './Login.scss'

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
                        <input type="password" id="myroLoginPwd" onkeypress="javascript:if(event.keyCode==13) {myroLogin()}" required=""></input>
                    </div>
                    <div className='forgot-pass'>
                        <a href="/findPassword">비밀번호를 잊으셨나요?</a>
                    </div>
                    <div className='btn'>
                        <div class="inner"></div>
                        <button type="submit" id="LoginBtn" onclick="Login()">로그인</button>
                    </div>
                    <div className='datsignup-linka'>
                        "회원이 아니라면?"
                        <a href="/JoinPage.js">회원가입하기</a>
                    </div>
                </div>
                <div class="divider-container">
                    <div class="divider"></div>
                    <span>or</span>
                </div>
                <div class="sns-text">SNS 간편 로그인</div>
                <div class="socialBtn-container">
                    <div class="socialBtn">
                        <div class="socialBtn-image-container" onclick="location.href =`auth/kakao?params=${fromMobile},${savedRouteTokenKey}`">
                            <img src="/Images/kakaolink_btn.png" alt="logo"/>
                        </div>
                    </div>
                    <div class="socialBtn">
                        <div class="socialBtn-image-container" onclick="location.href=`auth/naver?params=${fromMobile},${savedRouteTokenKey}`">
                            <img src="Images/naver_btn.png" alt="logo"/>
                        </div>
                    </div>
                    
                    <div class="socialBtn google-mobile-login">
                        <div class="socialBtn-image-container" onclick="location.href=`/auth/google?params=${fromMobile},${savedRouteTokenKey}`">
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