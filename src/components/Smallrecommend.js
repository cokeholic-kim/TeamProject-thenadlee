import React from 'react';
import { SiStrapi } from "react-icons/si";

const Smallrecommend = ({data}) => {
    const onClick=(e)=>{
        e.target.classList.toggle('click')
    }

    return (
        <div className="chip" onClick={e=>onClick(e)}>
            <SiStrapi/>
            <hs disabled="false">{data.spot_name}</hs>
        </div>    
    );
};

export default Smallrecommend;

