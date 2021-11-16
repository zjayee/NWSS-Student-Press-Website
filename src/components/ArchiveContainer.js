import * as React from 'react'
import ArchiveCard from './ArchiveCard'
import {container} from "./ArchiveContainer.module.css"

const ArchiveContainer = (props) =>{

    const articles = props.articles

    return(

        <div className={container}>

        {articles.map((article)=>(
        <ArchiveCard month={article.month} year={article.year} description={article.description} image={article.image} url={article.url}/>
        ))}

        </div>
    )


}
export default ArchiveContainer