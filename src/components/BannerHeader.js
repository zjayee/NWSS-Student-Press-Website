import * as React from 'react'
import CoverDecor from '../images/coverimage.png'
import {header, description, bar, container, textHeader, image} from "./BannerHeader.module.css"

const BannerHeader= () =>{

    return(
        <div className={container}>
        <img src={CoverDecor} className={image}/>
        <div className={textHeader}>
        <h1 className={header}>View Our Latest Issues</h1>
        <div className={bar}/>
        <p className={description}>Welcome to the NWSS Student Press website.</p>
        </div>
        </div>
    )


}
export default BannerHeader
