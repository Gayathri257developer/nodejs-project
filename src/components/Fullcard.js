import React from 'react'
import {useContext} from 'react'
import Navbar from './Navbar';
import '../css/Fullcard.css';
import Footer from './Footer';
import {store} from './Blog'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Fullcard = () => {
  const [data] = useContext(store);
  const {id} = useParams();
  const get_id = id-1;

return (
    <>
    <Navbar/>
     <div className='cards' key={data[get_id].id}>
     <Link to="/" style={{textDecoration: "none", backgroundColor: "skyblue",color: 'white',margin: "30px", padding: "8px 15px"}}> Go Back</Link>
  
          <div className='details'>
        <img src={data[get_id].image}   alt="" width="60%"/>
       
        <div className='descripition'>
          <p>{data[get_id].description}</p>
        </div>  
        <div className='flex1'>
        
        <b>{data[get_id].category}</b><br/>
        <small><strong>Date:</strong> {data[get_id].date}</small>
         </div>
        
        <hr/> 
        </div>      
      </div> 
    <Footer/>
    </>
  )
  }

export default Fullcard;
      