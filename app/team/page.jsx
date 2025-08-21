import React from 'react'
import Header from '../../components/header'
import Footer from "@/components/footer"

import ProfileCard from '../../components/ProfileCard'

export default function page() {
  return (
    <div className='min-h-screen '>
        <Header/>
       <main>
           <div className=" h-auto pt-10 pl-15 mb-5">
            
            <ProfileCard/>
            </div> 
            <Footer/>


       </main>
    </div>
  )
}
