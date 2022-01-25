import * as React from 'react'
import { Link } from 'gatsby'
import { header, card, cover, caption, link} from "./ArchiveCard.module.css"

const ArchiveCard = (props) =>{
    const date = props.date
    const description = props.description // max 115 char
    const image = props.image
    const url = props.url
    const readIssue = "READ FULL ISSUE >>"
    
    return(
        <div className ={card}>
            <img className={cover} src={image}/>
            <h1 className={header}>{date}</h1>
            <p className={caption}>{description}</p>
            <Link to={url} className={link}>{readIssue}</Link>
        </div>
    )
}

export default ArchiveCard