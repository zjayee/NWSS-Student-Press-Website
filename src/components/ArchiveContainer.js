import * as React from 'react'
import ArchiveCard from './ArchiveCard'
import {container, outercontainer} from "./ArchiveContainer.module.css"

const ArchiveContainer = (props) =>{

    return(

        <div className={outercontainer}>
        <div className={container}>

        {/* {articles.map((article)=>(
        <ArchiveCard month={article.month} year={article.year} description={article.description} image={article.image} url={article.url}/>
        ))} */}
        {props.children}
        </div>
        </div>
    )


}
export default ArchiveContainer