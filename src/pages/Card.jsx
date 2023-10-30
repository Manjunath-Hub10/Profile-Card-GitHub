import React from 'react'
import NavBar from '../components/navbar'
import Profilecard from '../components/profilecard'

const Card = ({navigateHome, navigateCard, data}) => {
  return (
    <>
    <div className='main_container'>
      <NavBar navigateHome={navigateHome} navigateCard={navigateCard} />
      <Profilecard  data={data} />
    </div>
    </>
  )
}

export default Card
