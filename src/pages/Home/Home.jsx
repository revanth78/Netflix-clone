import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import HeroBanner from '../../assets/hero_banner.jpg'
import HeroTitle from '../../assets/hero_title.png'
import PlayIcon from '../../assets/play_icon.png'
import InfoIcon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={HeroBanner} alt='' className='banner-img'/>
        <div className='hero-caption'>
          <img src={HeroTitle} alt='' className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from a immortal enemy.</p>
          <div className='hero-btns'>
            <button className='btn'><img src={PlayIcon} />Play</button>
            <button className='btn dark-btn'><img src={InfoIcon} />More Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className='more-cards'>
        <TitleCards title={"BlockBuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks for you"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home