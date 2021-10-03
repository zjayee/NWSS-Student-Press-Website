
import * as React from 'react'
import { Link } from 'gatsby'

import ArchiveCard from '../components/ArchiveCard'
import NextButton from '../components/NextButton'
import BackButton from '../components/Backbutton'


const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
       <BackButton/><NextButton/>
      <ArchiveCard month="June" year="2021" description="description description description" 
      image="https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/4e/81/5a/4e815afd-9be1-2c3c-9f79-db523e722d49/190296479854.jpg/400x400cc.jpg"
      url = "/about"
      />
    
     
    </main>
  )
}


export default IndexPage