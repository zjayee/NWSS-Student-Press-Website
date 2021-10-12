import * as React from 'react'
import {header, description, bar, container} from "./BannerHeader.module.css"

const BannerHeader= () =>{

    return(
        <div className={container}>
        <h1 className={header}>View Our Latest Issues</h1>
        <div className={bar}/>
        <p className={description}>Welcome to the nwss student press website, here is a short description of the press. Also read our news and whatnot. </p>
        
        </div>
    )


}
export default BannerHeader