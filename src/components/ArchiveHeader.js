import * as React from 'react'
import {header, description, bar, container} from "./ArchiveHeader.module.css"

const ArchiveHeader= () =>{

    return(
        <div className={container}>
        <h1 className={header}>All Issues</h1>
        <p className={description}>Find all past issues here</p>
        <div className={bar}/>
        </div>
    )


}
export default ArchiveHeader