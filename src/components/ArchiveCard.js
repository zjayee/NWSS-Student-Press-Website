import * as React from 'react'
import { Link } from 'gatsby'
import { header, card, cover, caption, link} from "./ArchiveCard.module.css"

const ArchiveCard = (props) =>{
    const month = props.month
    const year = props.year
    const description = props.description
    const image = props.image
    const url = props.url
    const readIssue = "READ FULL ISSUE >>"
    
    return(
        <div className ={card}>
            <img className={cover} src={image}/>
            <h1 className={header}>{month} {year}</h1>
            <p className={caption}>{description}</p>
            <Link to={url} className={link}>{readIssue}</Link>
        </div>
    )
}

export default ArchiveCard