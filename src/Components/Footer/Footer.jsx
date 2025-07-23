import React,{useEffect} from 'react'
import './footer.css'
import footervideo from '../../Assets/footer-video.mp4'
import { FiSend } from "react-icons/fi";
import { MdModeOfTravel } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos';
import 'aos/dist/aos.css';

function Footer() {

    useEffect(()=>{
    Aos.init({duration:2000})
  },[]);
  
  return (
  <section data-aos="fade-up" className='footer'>
    <div className='videoDiv'>
      <video src={footervideo} loop autoPlay muted type="video/mp4"></video>
    </div>

    <div data-aos="fade-up" className="secContent container">
      <div className="contactDiv flex">
        <div data-aos="fade-up" className="text">
          <small>Keep in touch</small>
          <h2>Travel with us</h2>
        </div>
    
       <div data-aos="fade-up" className="inputDiv flex">
        <input type="text" placeholder='Enter Email Address' />
        <button className='btn flex'>
         Send <FiSend className='icon'/>
        </button>
       </div>

      </div>

      <div   className="footerCard flex">
        <div data-aos="fade-up" className="footerIntro flex">
          <div data-aos="fade-up" className="logoDiv">
            <a href="#" className='logo flex'>
             <MdModeOfTravel className='icon'/>
                    Nomaya.
              </a>
          </div>

          <div  data-aos="fade-up" className="footerParagraph">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, 
               voluptatum.
            </p>
            <div className="footerSocials flex">
              <FaTwitter className='icon'/>
              <FaYoutube className='icon' />
              <FaInstagram className='icon'/>
              <FaTripadvisor className='icon'/>

            </div>
          </div>
        </div>

        <div  data-aos="fade-up" className="footerLinks grid">
          <div className="linkGroup">
            <span className="groupTitle">
              Our Agency
            </span>

            <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           Services
            </li>

             <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           Insurance
            </li>

             <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           Agency
            </li>

             <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           Tourism
            </li>

 <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           Services
            </li>
            
             <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           Packages
            </li>

             <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           RaahiAi
            </li>
          </div>
           <div className="linkGroup">
            <span className="groupTitle">
              Partners
            </span>

            <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           Bookings
            </li>

             <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           Rentcars
            </li>

             <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           HostelWorld
            </li>

             <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           Trivago
            </li>

 <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                          TripAdvisor
            </li>
          </div>

          <div className="linkGroup">
            <span className="groupTitle">
              Last Minute
            </span>

            <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           Flight PNR status
            </li>

             <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           Train PNR status
            </li>

             <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           Associated Cities
            </li>

             <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           India's Cultural Heritage
            </li>

 <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           Things to do
            </li>
            
             <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           Explore more
            </li>

             <li className="footerList flex">
                     <FiChevronRight className='icon'/>
                           Get Help
            </li>
          </div>
        </div>

        <div  className='footerDiv flex'>
          <small>Explore the world with us</small>
          <small>Copyrights reserved-Nomaya 2025</small>
        </div>
       </div>
    </div>
    </section>
  )
}

export default Footer
