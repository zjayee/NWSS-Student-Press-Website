
import * as React from 'react'
import { Link } from 'gatsby'

import ArchiveHeader from '../components/ArchiveHeader'
import TopNav from '../components/TopNav'
import MiddleBar from '../components/MiddleBar'
import BannerHeader from '../components/BannerHeader'
import RecentIssueCard from '../components/RecentIssueCard'
import ArchiveContainer from '../components/ArchiveContainer'
import HeaderCover from '../components/HeaderCover'


const IndexPage = () => {
  
  const arr = [{month: "September", year:"2021", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/404"},{month: "October", year:"2021", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/404"},{month: "November", year:"2021", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/404"},{month: "December", year:"2021", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/404"},{month: "January", year:"2022", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/404"},{month: "Febuary", year:"2022", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/404"}]
  
  return (
    <main>
      <title>NWSS Student Press</title>
      <TopNav/>
      <HeaderCover articles={arr}/>
      
      <MiddleBar/>
      
      <ArchiveHeader/>
      <ArchiveContainer articles= {arr}/>
      
      
    </main>
  )
}


export default IndexPage