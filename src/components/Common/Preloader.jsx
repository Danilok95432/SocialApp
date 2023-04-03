import React from "react"
import preloader from '../../assets/preloader.svg'
import '../../css/Common.css'
const Preloader = (props) =>{
    return(
        <div className="preloader">
            <img src={preloader} alt="" />
        </div>
    )
}

export default Preloader