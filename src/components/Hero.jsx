import React from 'react'
import "../styles/hero.css"

const Hero = ({navigateCard}) => {
  return (
    <div className="hero_container">
        <div className="text_container">
            <h2 className='greet'>Welcome To,</h2>
            <h2 className='title'>Manju's Profile Card</h2>
            <h2 className="paragraph">Ambitious and dedicated MERN Stack Developer with a strong knowledge of Frontend and Backend Technologies,seeking opportunities as a Full Stack Developer. Confident in designing and building dynamic web applications with seamless user experience. Eager to contribute my expertise towards the Organsation's goals.
            </h2>
        <a href="card">
            <button 
            className='hero_btn' 
            type='button' 
            onClick={(e)=>{
                e.preventDefault();
                navigateCard();
            }}>
                View Card
            </button>
        </a>
        </div>
        <div className="image_container">
        <img src="https://1.bp.blogspot.com/--JFmzWfIZcE/X6kMkOZdzUI/AAAAAAAAA8c/8c1NpUOMdWYZOKHeWxQvwyVCyXjK_U28QCLcBGAsYHQ/s1280/Neumorphism%2BProfile%2BCard%2BUI%2BDesign%2Busing%2Bonly%2BHTML%2B%2526%2BCSS.webp" alt="hero card" className="hero_image" />
        </div>
    </div>
  )
}

export default Hero
