import * as React from 'react'
import BannerHeader from './BannerHeader'
import RecentIssueCard from './RecentIssueCard'

import {container, issueContainer, banner} from "./HeaderCover.module.css"

const HeaderCover = (props) =>{

    const articles = props.articles


    return(

        <div className={container}>
            <BannerHeader className={banner}/>
            <div className={issueContainer}>
             {articles.slice(0, 2).map((article)=>(
            <RecentIssueCard month={article.month} year={article.year} description={article.description} image={article.image} url={article.url}/>
            ))}
            </div>
        </div>
    )


}
export default HeaderCover