
import * as React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import ArchiveHeader from '../components/ArchiveHeader'
import TopNav from '../components/TopNav'
import MiddleBar from '../components/MiddleBar'
import BannerHeader from '../components/BannerHeader'
import RecentIssueCard from '../components/RecentIssueCard'
import ArchiveContainer from '../components/ArchiveContainer'
import HeaderCover from '../components/HeaderCover'
import ArchiveCard from '../components/ArchiveCard'


const IndexPage = ({data}) => {
  
  
  return (
    <main>
      <title>NWSS Student Press</title>
      <TopNav/>
      <HeaderCover>
      {data.allContentfulIssue.nodes.slice(0, 2).map((node)=>(
        <RecentIssueCard date={node.date} description={node.description.description} image={node.coverImage.file.url} url={node.url}/>
        ))}
      </HeaderCover>
    
       
      <MiddleBar/>
      
      <ArchiveHeader/>
      <ArchiveContainer>
      {data.allContentfulIssue.nodes.map((node)=>(
        <ArchiveCard date={node.date} description={node.description.description} image={node.coverImage.file.url} url={node.url}/>
        ))}

      </ArchiveContainer>
      
      
    </main>
  )


  
}


export const query = graphql`

query MyQuery {
  allContentfulIssue(sort: {fields: date, order: DESC}) {
    nodes {
      date(formatString: "MMMM YYYY")
      url
      coverImage {
        file {
          url
        }
      }
      description {
        description
      }
    }
  }
}

    `

export default IndexPage