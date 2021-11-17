
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
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/about"},{month: "October", year:"2021", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/about"},{month: "November", year:"2021", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/about"},{month: "December", year:"2021", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/about"},{month: "January", year:"2022", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/about"},{month: "Febuary", year:"2022", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/about"}]
  
  return (
    <main width="100vw">
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