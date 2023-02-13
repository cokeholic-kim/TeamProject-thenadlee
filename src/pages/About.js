import React from 'react';
// import { FaFacebookSquare } from 'react-icons/fa';
import './About.scss';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
// import background from '...public/imgs/mainN7.jpg';

const About = () => {
    return (
        <div className='wrap'>
            <div className="wrapper">
                <div className="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" style={{width: "90vw", height: "80vh", backgroundImage:`URL('imgs/mainN7.jpg')`}} data-src='imgs/mainN7.jpg' uk-img="">
                    <h3 className="title-text-left">AI 여행 스케줄링 플래너</h3>

                    <h1 className="title-text-right">THE 나드리</h1>
                </div>
            </div>
            <div style={{margin: "40px 0"}}>
                <div className="uk-section uk-section-default" style={{width: "90vw", margin: "40px auto"}}>
                    <div className="uk-container">
                        <div className='textcenter'>
                            <div className="about-section-title">THE 나드리</div>
                            <div className="uk-text-meta about-section-subtitle">MAKE YOUR ROUTE OPTIMIZED</div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="uk-section uk-section-default" style={{width: "90vw", margin: "40px auto"}}>
                    <div className="uk-container">
                        <h3 className="uk-heading-bullet">쉽고 간편한 여행 일정 플래너</h3>

                        <div className="uk-grid-match uk-child-width-1-2@m uk-grid" uk-grid="">
                            <div className="uk-first-column">
                                <h2>
                                    누구나 할 수 있는<br/>
                                    간편한 일정 작성
                                </h2>
                                <p>
                                    여행 일자, 숙소, 가고 싶은 장소만 선택해서<br/>
                                    담으면 되는 간편하고 편리한 일정 작성
                                </p>
                            </div>
                            <div>
                                <img src="/imgs/newintro1.jpg" alt="introimage"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-default" style={{width: "90vw", margin: "40px auto"}}>
                    <div className="uk-container">
                        <h3 className="uk-heading-bullet">여행 경로 최적화 AI</h3>
                        <div className="uk-grid-match uk-child-width-1-2@m uk-grid" uk-grid="">
                            <div className="uk-first-column">
                                <h2>
                                    인공지능(AI)이 만들어 주는<br/>
                                    최적화된 일자별 여행 코스
                                </h2>
                                <p>
                                    위치, 이동시간, 동선,<br/>
                                    영업일, 휴무일, 식사시간,<br/>
                                    며칠, 몇 시간씩 걸리던 고민을<br/>
                                    이제 THE-나드리 를 통해 해결하세요.<br/>
                                </p>
                            </div>
                            <div>
                                <img src="/imgs/newintro2.jpg" alt="introimage"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="uk-section uk-section-default" style={{width: "90vw", margin: "40px auto"}}>
                    <div className="uk-container">
                        <h3 className="uk-heading-bullet">웹-앱 자유롭게 사용</h3>

                        <div className="uk-grid-match uk-child-width-1-2@m uk-grid" uk-grid="">
                            <div className="uk-first-column">
                                <h2>
                                    언제 어디서나<br/>
                                    자유로운 일정 사용
                                </h2>
                                <p>
                                    웹-앱 자유로운 연동 및 일정 수정<br/>
                                    엑셀 일정표 출력<br/>
                                    회원가압 없이 메일 전송만으로<br/>
                                    모바일에서도 편리하게 이용하세요.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-default" style={{width: "90vw", margin: "40px auto"}}>
                    <div className="uk-container">
                        <div className='linkdiv'>
                            <div className='icondiv'>
                                <a onclick="window.open('https://www.instagram.com/','_blank')"><AiFillInstagram/></a>
                                <a onclick="window.open('https://www.facebook.com/','_blank')"><AiFillFacebook/></a>
                                <a onclick="window.open('https://www.youtube.com/','_blank')"><AiFillYoutube/></a>
                                <a onclick="window.open('https://blog.naver.com/','_blank')" id="myroBlogcss"><img src="/imgs/naverblogicon.png" alt="img"/></a>
                            </div>
                            <div className='bottomapp' style={{width: "100%", display: "flex", justifycontent: "center", margin: "16px 0"}}>
                                <div style={{width: "160px"}}>
                                    <a href="https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%B4%EB%A1%9C-myro/id1496337358">
                                        <img src="/imgs/applestore.png" alt="앱스토어"/>
                                    </a>
                                </div>
                                <div style={{width: "160px"}}>
                                    <a href="https://play.google.com/store/apps/details?id=com.myro.myro">
                                        <img src="/imgs/playstore.png" alt="플레이스토어"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default About;