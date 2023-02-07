import { FaInfoCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


const AddSpot = ({spotname,nation}) => {

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
                    <div><span><FaPlus/></span></div>
                </div>
            </div>
        </li>
    );
};

export default AddSpot;
