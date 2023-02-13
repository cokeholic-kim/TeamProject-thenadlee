import { FaInfoCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setLeft } from "../modules/add";
import { setENTER, setLEAVE } from "../modules/hover";
import './AddSpot.scss' ;
// import 'RightControlbar.scss' ;

// 데이터 카드(li)에 대한 컴포넌트
const AddSpot = ({spotname,nation, p_lat, p_lng , img,  time }) => {
    // rC에서 전달
    const adds = useSelector(state=>state.add.right)
    // const [deleteArr, setDeleteArr ] = useState(spotname) ; 
    const dispatch = useDispatch() ;


    const onclick= ()=>{
        dispatch(setLeft(spotname,nation,p_lat,p_lng,img,time));
    }

    const onMouseEnter = (lat,lng)=>{
        dispatch(setENTER(lat,lng))
    }

    const onMouseleave = ()=>{
        dispatch(setLEAVE())
    }

        
    return (
        <li className="RightControlbar_contents_li" onMouseEnter={()=>onMouseEnter(p_lat,p_lng)} onMouseLeave={onMouseleave}>
            <div className=" RightControlbar_contents_img">
                <img className='RightControlbar_contents_img_i' src={img}></img>
            </div>
            <div className=" RightControlbar_contents_p">
                <div className='RightControlbar_contents_p_left'>
                    <p>{nation}</p>
                    <p><span>{spotname}</span></p>
                </div>
                <div className='RightControlbar_contents_p_right'>
                    <div>
                        <span onClick={onclick}><FaPlus/></span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default AddSpot;
