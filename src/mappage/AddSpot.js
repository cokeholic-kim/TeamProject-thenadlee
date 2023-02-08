import { FaInfoCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setPlus } from "../modules/add";

// 데이터 카드(li)에 대한 컴포넌트
const AddSpot = ({spotname,nation, p_lat, p_lng }) => {

    const dispatch = useDispatch() ;
    const onclick= ()=>{
        dispatch(setPlus(spotname,nation,p_lat,p_lng))
    }
        
    return (
        <li className=" RightControlbar_contents_li">
            <div className=" RightControlbar_contents_img">
                <img className='RightControlbar_contents_img_i' src="https://www.myro.co.kr/getSpotImage/amsterdam?no=1021"></img>
            </div>
            <div className=" RightControlbar_contents_p">
                <div className='RightControlbar_contents_p_left'>
                    <p>{nation}</p>
                    <p><span>{spotname}</span></p>
                </div>
                <div className='RightControlbar_contents_p_right'>
                    <div><FaInfoCircle/></div>
                    <div><span onClick={onclick}><FaPlus/></span></div>
                </div>
            </div>
        </li>
    );
};

export default AddSpot;
