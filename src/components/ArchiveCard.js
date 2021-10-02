import * as React from 'react'
import { Link } from 'gatsby'
import { header, card} from "./ArchiveCard.module.css"

const ArchiveCard = (props) =>{
    const month = props.month
    const year = props.year
    const description = props.description
    const image = props.image
    const url = props.url
    const readIssue = "READ FULL ISSUE >>"
    
    return(
        <div className ={card}>
            <img class="archive-cover"src={image}/>
            <h1 className={header}>{month} {year}</h1>
            <p>{description}</p>
            <Link to={url} class="read-link">{readIssue}</Link>
        </div>
    )
}

export default ArchiveCard