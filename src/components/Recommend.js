import { click } from '@testing-library/user-event/dist/click';
import { Carousel } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import './Recommend.scss'
import Smallrecommend from './Smallrecommend';

const contentStyle = {
    height: 'auto',
    width: "auto",
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',  };


const Recommend = ({place,setRecommend}) => {
    const data =useSelector(state => state.add.data)

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const clickall = ()=>{
        let check = document.querySelectorAll('.chip')
        check.forEach(chip=>chip.classList.toggle('click'))
    }

    return (
        <div className='recommendModal'>
            <div className='recommendTop'>
                <h1>추천일정</h1>
                <div className='Recommend_close' onClick={()=>setRecommend(false)}>x</div>
            </div>
            <div className="recommendBox">
                <div className='recommendimg'>
                    
                    <Carousel afterChange={onChange} autoplay>
                        <div style={{width:"100%",height:"100%"}}>
                            <img src='../imgs/google_btn.png' style={contentStyle}/>
                        </div>
                        <div style={{width:"100%",height:"100%"}}>
                            <img src='../imgs/google_btn.png' style={contentStyle}/>
                        </div>
                        <div style={{width:"100%",height:"100%"}}>
                            <img src='../imgs/google_btn.png' style={contentStyle}/>
                        </div>
                        <div style={{width:"100%",height:"100%"}}>
                            <img src='../imgs/google_btn.png' style={contentStyle}/>
                        </div>
                    </Carousel>
                    <button title='전체선택' className='allSelect' onClick={clickall}>모두 선택</button>
                </div>
                <div className='recomendplace'>
                    {data.map(data=><Smallrecommend data={data}/>)}
                </div>
            </div>
        </div>
    );
};

export default Recommend;