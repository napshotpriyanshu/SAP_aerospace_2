import React from 'react';
import { Button } from './Button';
import '../assets/css/home2.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


import vd from '../assets/video-1.mp4'
import BannerBackground from '../assets/images/home/2.jpg'
import BannerImage from "../assets/images/drone.png";

const handleDragStart = (e) => e.preventDefault();


// const items = [
//     <img src={BannerImage}  onDragStart={handleDragStart} role="presentation" />,
//     <img src={BannerBackground}  onDragStart={handleDragStart} role="presentation" />,
//     ];


function Home2() {

  return (
    <div className='hero-container'>
      {/* <video src={vd} autoPlay loop muted /> */}
      {/* <AliceCarousel mouseTracking items={items} className='img21' autoPlay={true} autoHeight={true}/> */}
     <img src={BannerImage} alt="" className='img21' />
      <h1>SAP AEROSPACE</h1>
      <p>Build New features</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
            <a 
            href="#main">
          GET STARTED
          </a>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
            <a 
            href="#aboutIn">
          WATCH TRAILER <i className='far fa-play-circle' />
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Home2;