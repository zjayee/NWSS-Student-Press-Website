import * as React from 'react'
import {header, description, bar, container} from "./ArchiveHeader.module.css"

const ArchiveHeader= () =>{

    return(
        <div className={container}>
        <h1 className={header}>Archive</h1>
        <p className={description}>Older works are displayed here</p>
        <div className={bar}/>
        </div>
    )


}
export default ArchiveHeader