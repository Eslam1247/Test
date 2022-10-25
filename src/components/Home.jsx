import React from 'react';
import home from '../assets/home.jpg'
import './home.css'

const Home = () => {
  return (
    <div>
        <section className='home'>
            <div className='left'>
            <h2>Providing  Brilliant Ideasfor your business</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et doloremagna aliquyam erat, sed diam</p>
                <button>See Our Work</button>
            </div>
            <div className='right'>
                <img src={home} alt="" />
            </div>
        </section>
    </div>
  )
}

export default Home;