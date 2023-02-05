import React from 'react';
import './JoinPage.scss';

const JoinPage = () => {
    return (
        <div class="container">
            <div class="text">SIGN UP</div>
            <div class="small-text">효율적인 여행 가이드 THE-나들이</div>
            <form class="uk-form-stacked">
                <div>
                    <label class="label-text" for="signInEmail">이메일</label>
                    <div class="uk-form-controls input-button-flex">
                        <input class="uk-input" type="text" id="signInEmail" placeholder=""/>
                        <button class="uk-button email-btn" id="checkDuplicationEmail">확인</button>
                    </div>
                </div>
                <div>
                    <label class="label-text" for="signInName">이름</label>
                    <div class="uk-form-controls">
                        <input class="uk-input" type="text" id="signInName" placeholder=""/>
                    </div>
                </div>
                <div>
                    <label class="label-text" for="signInNickname">닉네임</label>
                    <div class="uk-form-controls">
                        <input class="uk-input" type="text" id="signInNickname" placeholder=""/>
                    </div>
                </div>
                <div>
                    <label class="label-text" for="signInPwd">비밀번호</label>
                    <div class="uk-form-controls">
                        <input class="uk-input" type="password" id="signInPwd" placeholder="비밀번호(문자, 숫자, 특수문자 포함 10~20자)" required=""/>
                    </div>
                </div>
                <div>
                    <label class="label-text" for="checkSignInPwd">비밀번호확인</label>
                    <div class="uk-form-controls">
                        <input class="uk-input" type="password" id="checkSignInPwd" placeholder="비밀번호 재입력" required=""/>
                    </div>
                </div>
                <div class="agree-container">
                    <span class="agree-link-container">
                        <label><input type="checkbox" id="userAgeChecked" name="color" value="blue"/>
                            본인은 만 14세 이상입니다.<span>(필수)</span></label>
                    </span>
                    <span class="agree-link-container">
                        <label><input type="checkbox" id="userPolicyChecked" name="color" value="blue"/>
                            개인정보수집에 동의합니다.
                            <span>(필수)</span></label>
                        <a onclick="window.open('/userPolicy')" class="agree-link-text">보기</a>
                    </span>
                    <table>
                        <tbody><tr>
                            <td colspan="2">개인정보수집</td>
                        </tr>
                        <tr>
                            <td>목적</td>
                            <td class="second-td">
                                개인식별, 회원자격 유지・관리
                            </td>
                        </tr>
                        <tr>
                            <td>항목</td>
                            <td class="second-td">
                                이름,아이디,이메일,닉네임,비밀번호
                            </td>
                        </tr>
                        <tr>
                            <td>보유기간</td>
                            <td class="second-td">회원탈퇴 시 즉시 파기</td>
                        </tr>
                    </tbody></table>
                    <span class="agree-link-container">
                        <label><input type="checkbox" id="userAgreementsChecked"/>
                            이용약관에 동의합니다.
                            <span>(필수)</span></label>
                        <a onclick="window.open('/userAgreements')" class="agree-link-text">보기</a>
                    </span>
                </div>
                <div>
                    <button class="myro-btn" id="completeSignInAndSendVerifyCode">
                        회원가입
                    </button>
                </div>
                <div>
                    <button class="myro-btn-back" id="backPage">
                        뒤로가기
                    </button>
                </div>
            </form>
            <div class="small-text"></div>
        </div>
    );
};

export default JoinPage;