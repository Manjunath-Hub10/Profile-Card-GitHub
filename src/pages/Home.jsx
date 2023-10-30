import React from 'react'
import NavBar from '../components/navbar'
import Hero from '../components/hero'

const Home = ({navigateHome, navigateCard}) => {
  return (
    <div className="main_container">
      <NavBar navigateHome={navigateHome} navigateCard={navigateCard} />
      <Hero navigateCard={navigateCard}/>
    </div>
  )
}

export default Home
