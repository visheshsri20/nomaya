import React,{useEffect} from 'react'
import './main.css'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import img10 from '../../Assets/img10.jpg'
import img11 from '../../Assets/img11.jpg'
import img12 from '../../Assets/img12.jpg'
import { MdLocationPin } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa";


import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Goa',
    location: 'India',
    grade: 'BEACH GETAWAY',
    fees: '$700',
    description: 'Goa is a state on the southwestern coast of India, known for its stunning beaches, vibrant nightlife, and Portuguese heritage. It is a popular destination for both domestic and international tourists seeking relaxation, adventure, and cultural experiences.'
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Pondicherry',
    location: 'India',
    grade: 'BEACH GETAWAY',
    fees: '$1200',
    description: 'Pondicherry, also known as Puducherry, is a Union Territory of India located on the southeastern coast. It is famous for its French colonial architecture, serene beaches, and spiritual heritage. The city offers a unique blend of Indian and French cultures, making it a popular destination for travelers seeking tranquility and cultural experiences.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Kerala',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$1500',
    description: 'Kerala, located on the southwestern coast of India, is known for its lush landscapes, backwaters, and rich cultural heritage. It is often referred to as "God\'s Own Country" and offers a unique blend of natural beauty, Ayurveda, and traditional art forms. Kerala is a popular destination for those seeking relaxation, adventure, and cultural experiences.'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Kashmir',
    location: 'India',
    grade: 'HILL STATION',
    fees: '$2000',
    description: 'Kashmir, often referred to as "Paradise on Earth," is a region in northern India known for its breathtaking landscapes, snow-capped mountains, and serene lakes. It is a popular destination for nature lovers, adventure seekers, and those looking to experience the rich cultural heritage of the region.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Andaman',
    location: 'India',
    grade: 'ISLAND ESCAPE',
    fees: '$2500',
    description: 'The Andaman and Nicobar Islands are a group of islands located in the Bay of Bengal, known for their pristine beaches, crystal-clear waters, and diverse marine life. They are a popular destination for beach lovers, adventure enthusiasts, and those seeking a tropical paradise.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Shimla',
    location: 'India',
    grade: 'HILL STATION',
    fees: '$3000',
    description: 'Shimla, the capital of Himachal Pradesh, is a popular hill station in northern India known for its colonial architecture, pleasant climate, and scenic beauty. It is a favorite destination for tourists seeking a peaceful retreat in the lap of the Himalayas.'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Darjeeling',
    location: 'India',
    grade: 'HILL STATION',
    fees: '$3500',
    description: 'Darjeeling, located in the eastern Himalayas, is famous for its tea plantations, stunning views of the Kanchenjunga mountain range, and colonial charm. It is a popular destination for those seeking a serene escape amidst nature.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Rajasthan',
    location: 'India',
    grade: 'CULTURAL HERITAGE',
    fees: '$4000',
    description: 'Rajasthan, known as the "Land of Kings," is famous for its rich cultural heritage, majestic forts, and vibrant festivals. It offers a unique blend of history, architecture, and desert landscapes, making it a popular destination for culture enthusiasts.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Mysore',
    location: 'India',
    grade: 'CULTURAL HERITAGE',
    fees: '$4500',
    description: 'Mysore, located in southern India, is known for its royal heritage, palaces, and gardens. It is a popular destination for those interested in history, architecture, and cultural experiences.'
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: 'Kanyakumari',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$5000',
    description: 'Kanyakumari, located at the southern tip of India, is famous for its stunning sunsets, beaches, and the confluence of three seas. It is a popular destination for beach lovers and those seeking spiritual experiences.'
  },
  {
    id:11,
    imgSrc: img11,
    destTitle: 'Vaishno Devi',
    location: 'India',
    grade: 'SPIRITUAL JOURNEY',
    fees: '$5500',
    description: 'Vaishno Devi is a revered Hindu pilgrimage site located in the Trikuta Mountains of Jammu and Kashmir. It attracts millions of devotees each year who undertake a trek to the shrine dedicated to Goddess Vaishno Devi, seeking blessings and spiritual fulfillment.'
  },
  {
    id:12,
    imgSrc: img12,
    destTitle: 'Somnath Temple',
    location: 'India',
    grade: 'SPIRITUAL JOURNEY',
    fees: '$6000',
    description: 'Somnath Temple, located in Gujarat, is one of the twelve Jyotirlinga shrines dedicated to Lord Shiva. It is a significant pilgrimage site known for its historical and architectural significance, attracting devotees and tourists alike who come to seek blessings and experience the spiritual ambiance of the temple.'
  }

]

const Main=()=> {

  useEffect(()=>{
  Aos.init({duration:2000})
},[]);


  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most popluar destinations
        </h3>
      </div>
      
      <div className="secContent grid">
       
{
  Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
    return(
      <div key={id} data-aos="fade-up" className="singleDestination">
    <div className="imageDiv">
        <img src={imgSrc} alt={destTitle}/>
    </div>
    <div className="cardInfo">
      <h4 className="destTitle">{destTitle}</h4>
      <span className='continent flex'>
       <MdLocationPin className='icon'/>
       <span className='name'>{location}</span>

        </span>

        <div className="fees flex">
          <div className="grade">
            <span>{grade}<small>+1</small></span>
          </div>
          <div className="price">
            <h5>{fees}</h5>
          </div>
        </div>

        <div className="desc">
          <p>{description}</p>
        </div>

        <button className='btn flex'>
          DETAILS <FaRegClipboard className='icon'/>
          </button>
    </div>
      </div>
    )
  
  }
  )
}
      </div>

    </section>
  )
}

export default Main
