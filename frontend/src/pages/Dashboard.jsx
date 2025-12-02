import React from 'react'
import Navbar from '../components/Navbar'
import ListNotes from '../components/ListNotes'
import Footer from '../components/Footer'

function Dashboard() {
  return (
      <div>
          <Navbar />
          <ListNotes />
          <Footer/>
    </div>
  )
}

export default Dashboard