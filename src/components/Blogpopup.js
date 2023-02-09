import React, { useEffect, useState } from "react";
import "./Blogpopup.scss";

const close = () =>{
    const blog = document.querySelector(".blogModal")
    blog.classList.add('hidden')
}

// 주소는 나중에 데이터베이스에서 받아올 예정 .
const Blogpopup = () => {
    const [url,seturl] = useState("https://in.naver.com/hksh012/contents/359919131091968?query=%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%97%AC%ED%96%89%EC%9D%BC%EC%A0%95")
    // const BlogPost = (post)=>{console.log(post)}
    function BlogPost(post){seturl(post)}
  return (
    <div className="blogModal" >
        <div className="blogpopup">
            <div className="categorybuttons">
                <div className="categories">
                    <div title="부산 여행 코스 추천" className="categorybutton" onClick={()=>BlogPost("https://in.naver.com/hksh012/contents/359919131091968?query=%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%97%AC%ED%96%89%EC%9D%BC%EC%A0%95")}>
                        <div className="categorytitle">초롱둘</div>
                        <div className="categorydate">2021.10</div>
                    </div>
                    </div>
                    <div className="categories">
                    <div title="부산 여행 코스 추천" className="categorybutton" onClick={()=>BlogPost("https://in.naver.com/bambina/contents/366617608123680?query=%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%97%AC%ED%96%89%EC%9D%BC%EC%A0%95")}>
                        <div className="categorytitle">초롱둘</div>
                        <div className="categorydate">2021.10</div>
                    </div>
                    </div>
                    <div className="categories">
                    <div title="부산 여행 코스 추천" className="categorybutton" onClick={()=>BlogPost("https://blog.naver.com/bosul101/222580610181")}>
                        <div className="categorytitle">초롱둘</div>
                        <div className="categorydate">2021.10</div>
                    </div>
                </div>
            </div>
            <div className="posts">
                <div className="close" onClick={close}>x</div>
                <h4>여행일기</h4>
                <p style={{ color: "#e0e0e0" }}>TRAVELDIARY</p>
                <div id="blogframe">
                    <iframe
                        title="1"
                        src={url} className="travediary-frame"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Blogpopup;
