import React from 'react'
import "./InfoCard.css";
import { FaRegBuilding } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

const InfoCard = ({data}:any) => {
    
    return (
        <div className='infoCard'>
            <p style={{fontSize:'1.4rem'}}>{data?.position}</p>
            <div className="infoCard__bottom">
                <p className='infoLayout'><FaRegBuilding />{data?.place}</p>
                <p className='infoLayout'><CiCalendarDate />{data?.date}</p>
            </div>
        </div>
    )
}

export default InfoCard