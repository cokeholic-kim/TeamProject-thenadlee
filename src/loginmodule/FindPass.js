import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { setId } from '../modules/logincheck'

const FindPass = () => {
    const dispatch=useDispatch()
    const [idInfo,setIdinfo]= useState(false)
    const [findPassdata,setFindPassData]=useState({
        useremail:""
    })
    const onChange=(e)=>{
        const {name,value}= e.target;
        setFindPassData({
            [name]:value   
        })
    }
    const onSubmit = (e) =>{
        console.log("call")
        e.preventDefault();
        axios.post(`${API_URL}/findPass`,findPassdata)
        .then(res=>{
            alert("이메일이 확인되었습니다.")
            setIdinfo(res.data)
            dispatch(setId(res.data))
        })
        .catch(e=>{console.log(e)})   
    }
    return (
        <div className="container">
            <div className="text">비밀번호 찾기</div>
            <form onSubmit={onSubmit}>
                <label className="label-text">이메일</label>
                <div className="uk-form-controls">
                    <input className="uk-input" value={FormData.m_email} name="useremail" onChange={onChange} type="text"placeholder="" />
                </div>
            <div className="small-text">회원가입시 등록하셨던 이메일 주소를 입력해주시면 새로운 비밀번호를 사용하실수 있습니다. </div>
            <div>
                {idInfo ? <Link to="/updatePassword"><button className="myro-btn">비밀번호 변경하기</button></Link>:<button className="myro-btn" type="submit">발급받기</button>}
            </div>
            </form>
            {idInfo ?<></>:<div className="small-text">* 가입한 이메일이 기억나지 않는다면 새로 가입부탁드립니다.</div>}
            <div>
                <Link to="/login"><button className="myro-btn-back">뒤로가기</button></Link>
            </div>
        </div>
    );
};

export default FindPass;