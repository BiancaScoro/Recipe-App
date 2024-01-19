import React from 'react'
import Fooder from "../images/FooderLogo.png"
import '../pages/home.css'

const Home = () => {
  return (
    <section className="home">
        <div className='logo-container'>
            <img src={Fooder} alt="Fork Logo"/>
            <h1>FOODER</h1>
        </div>
    </section>
  )
}

export default Home