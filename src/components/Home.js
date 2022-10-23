import React from 'react'
import Navbar from './Navbar';
import '../css/Home.css';
import Footer from './Footer';
import img1 from '../images/th.jpg';
import img2 from '../images/tech.jpg';
import img3 from '../images/yoga.jpg';
import Latest from './Latest';
import Article from './Article';
import Stories from './Stories';

const Home = () => {
  return ( 
    <>
    <Navbar/>
    <div className='grid-container'>
    <div className='img1'>
    <img src={img1} alt='nature'/>
   <div className='text' style={{position: "absolute", top: "90%", color: "white", left: "20%"}}>
   <h3>Kerala: God's Own Country</h3>
   <strong>Tourism / June 20, 2022</strong>
   </div>
    </div>
    <div className='img2'>
    <img src={img2} alt='tech'/>
    </div>
    <div className='img3'>
    <img src={img3} alt='yoga'/>
    </div>  
    </div>
    <Latest/>
    <Article/>
    <Stories/>
    <Footer/>
    </>
  )
}
export default Home;