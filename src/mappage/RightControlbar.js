// right 컨트롤바 템플릿 - 디자인 등 적용... 

import './RightControlbar.scss' ;
import useAsync from '../customHook/useAsync';
import { API_URL } from '../config/apiurl';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AddSpot from './AddSpot';
import { useDispatch } from 'react-redux';



async function markerFetch(places){
    const response = await axios.get(`${API_URL}/marker/${places}`);
    return response.data
  }

function RightControlPage({data}){
    const dispatch = useDispatch() ;
    // 초기값이 0 , 마운트될때마다 데이터 불러오기

    useEffect(()=>{
    dispatch(setRedo(data))
    },[])


    // const onclick= ()=>{
    //     dispatch(setPlus(spotname,nation,p_lat,p_lng,img,time))
    //     delData(spotname);        

    //     // +시 배열에서 삭제
    //     // const  = state.adds.filter(add=> add.spotname !== action.spotname)
    // }





    // const [ newData, setNewData ] = useState(data);
    // const delData = (name) => {
    //     setNewData(newData.filter(dat=>dat.spot_name !== name));
    // }
    // newData받아서 펼치기
    return (
        <div className=" RightControlbar">
            <div className=" RightControlbar_inner">
                <div className=" RightControlbar_header">
                    <p>추천장소</p>
                </div>
                <ul className=" RightControlbar_contents">
                    {data.map((d,index)=><AddSpot key={index} spotname={d.spot_name} 
                    nation={d.Nation} p_lat={d.spot_lat} p_lng={d.spot_lng} img={d.img_url} time={d.time}/>)}
                    {/* <li className=" RightControlbar_contents_li">
                        <div className=" RightControlbar_contents_img">
                            <img className='RightControlbar_contents_img_i' src="https://www.myro.co.kr/getSpotImage/amsterdam?no=1021"></img>
                        </div>
                        <div className=" RightControlbar_contents_p">
                            <div className='RightControlbar_contents_p_left'>
                                <p>담광장</p>
                                <p><span>Dam's Park</span></p>
                            </div>
                            <div className='RightControlbar_contents_p_right'>
                                <div><FaInfoCircle/></div>
                                <div><span><FaPlus/></span></div>
                            </div>
                        </div>
                    </li> */}

                </ul>
            </div>
        </div>
    )
}

const RightControlbar = ({place}) => {

    const {places} = useParams()
    const state = useAsync(()=>markerFetch(places),[]);
    const {loading,error,data} = state;
    if (loading) return <div>로딩중</div>
    if (error) return <div>에러발생</div>
    if (!data) return null
   
    console.log(data);

    return (
        <RightControlPage data={data}/>
    );
};

export default RightControlbar;