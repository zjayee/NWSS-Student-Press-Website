
import * as React from 'react'
import { Link } from 'gatsby'

import ArchiveCard from '../components/ArchiveCard'
import NextButton from '../components/NextButton'
import BackButton from '../components/Backbutton'
import ArchiveHeader from '../components/ArchiveHeader'
import TopNav from '../components/TopNav'
import MiddleBar from '../components/MiddleBar'
import BannerHeader from '../components/BannerHeader'
import RecentIssueCard from '../components/RecentIssueCard'
import ArchiveContainer from '../components/ArchiveContainer'


const IndexPage = () => {
  
  const arr = [{month: "September", year:"2021", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/about"},{month: "October", year:"2021", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/about"},{month: "November", year:"2021", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/about"},{month: "December", year:"2021", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/about"},{month: "January", year:"2022", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/about"},{month: "Febuary", year:"2022", description:"description description desctiption",
  image:"https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg", url:"/about"}]
  
  return (
    <main>
      <title>Home Page</title>
      <TopNav/>
      <BannerHeader/>
      <RecentIssueCard month="September" year="2021" description="description description desctiption"
      image="https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg" url = "/about"/>
      <MiddleBar/>
      <ArchiveHeader/>

      <ArchiveContainer articles= {arr}/>

      {/* <ArchiveCard month="June" year="2021" description="description description description" 
      image="https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/4e/81/5a/4e815afd-9be1-2c3c-9f79-db523e722d49/190296479854.jpg/400x400cc.jpg"
      url = "/about"/> */}
      
      
    </main>
  )
}


export default IndexPage