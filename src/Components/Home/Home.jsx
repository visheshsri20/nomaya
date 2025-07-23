import React,{useEffect} from 'react';
import './home.css';
import landingvideo from '../../Assets/landing-video.mp4';
import { TfiLocationArrow } from "react-icons/tfi";
//import { MdOutlineDateRange } from "react-icons/md";
import { GoFilter } from "react-icons/go";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
//import { FaWhatsapp } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { TbApps } from "react-icons/tb";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home=()=> {
useEffect(()=>{
  Aos.init({duration:2000})
},[]);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={landingvideo} muted autoPlay loop type="video/mp4"></video>

      <div className="home-content container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">our packages</span>
          <h1 data-aos="fade-up" className="homeTitle">What's your next destination?</h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination</label>
            <div className="input flex">
              <input type="text" placeholder="Enter your destination" />
              <TfiLocationArrow className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date :</label>
            <div className="input flex">
              <input type="date"  />
              
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Travel budget</label>
              <h3 className="total">₹5000</h3>
            </div>
            <div className='input flex'>
              <input type="range"  min="1000" max="500000" />
              </div>
     
          </div>

                  <div className="searchOptions flex">
                    <GoFilter className='icon' />
                    <span>More Filters</span>
                  </div>
                  

        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
             <AiOutlineFacebook className='icon'/>
             <FaInstagram className='icon' />
             <FaTripadvisor className='icon'/>
          </div>
 
        <div className="leftIcons">
             <IoIosList className='icon'/>
             <TbApps className='icon'/>
        </div>

        </div>
      </div>  
    </section>
  );
}

export default Home;
