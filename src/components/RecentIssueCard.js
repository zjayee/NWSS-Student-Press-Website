import * as React from 'react'
import { Link } from 'gatsby'
import {header, caption, cover, container, button, textContainer} from './RecentIssueCard.module.css'

const RecentIssueCard = (props) =>{
    
    const date = props.date
    const description = props.description
    const image = props.image
    const url = props.url
    
    return(
        <div className={container}>
            <img className={cover} src={image}/>
            <div className={textContainer}>
                <h1 className={header}>{date}</h1>
                <p className={caption}>{description}</p>
                <Link to={url} className={button}>READ FULL ISSUE</Link>
            </div>
        </div>
    )

}

export default RecentIssueCard