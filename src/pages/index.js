
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

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <TopNav/>
      <BannerHeader/>
      <RecentIssueCard month="September" year="2021" description="description description desctiption"
      image="https://pbs.twimg.com/media/ErdpsQYVkAEECtk.jpg" url = "/about"/>
      <MiddleBar/>
      <ArchiveHeader/>
       <BackButton/><NextButton/>
      <ArchiveCard month="June" year="2021" description="description description description" 
      image="https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/4e/81/5a/4e815afd-9be1-2c3c-9f79-db523e722d49/190296479854.jpg/400x400cc.jpg"
      url = "/about"/>
      
      
    </main>
  )
}


export default IndexPage