import React, { useEffect, useState } from 'react';
import '../css/LatestPost.css';
// import { store } from './Blog';
import img4 from '../images/ad.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import fetchData from './api';

const Tourism = () => {

  const [apidata, setData] = useState([]);
    
  useEffect(() => {
    const apiFetch = async () => {
      setData(await fetchData());
    };
    apiFetch();
  }, [apidata]);

  return (
    <>
    <Navbar/>
    <h2>Tourism</h2>
    
    <div className='flex-post'>
     <div className='post'>
     {
      apidata.filter(data => data.category === "Travel").map(filtereddata =>(
     
      <div key={filtereddata.index} class="row">
        <div class="col-sm-4">
        <Link to={`/category/article/${filtereddata.id}/${filtereddata.category}`}>
        <img src={filtereddata.image} alt="" width="100%" height="200px"/>
        </Link>      
          </div>
        <div class="col-sm-5">
          <div class="card-body">
            <h5 class="card-title">{filtereddata.title}</h5>
              <p class="card-text">{filtereddata.description}</p>
            <h6>{filtereddata.category}<small>/{filtereddata.date}</small></h6>
          </div>
        </div>
        <hr id='latest-hr'/>
    </div>
      )
     )
}
     </div>
     <div className='toppost'>
     <h3>Top Post</h3>
     <br/>
     {
      apidata.filter(data => data.category === "Travel").map(filtereddata =>(
      <div class="row">
        <div class="col-sm-3">
           <Link to={`/category/article/${filtereddata.id}/${filtereddata.category}`}>
           <img src={filtereddata.image} alt="toppost-img" className='round-img'/>
           </Link>
        </div>
        <div class="col-sm-6">
          <div class="card-body">
            <h5 class="card-title">{filtereddata.title}</h5>
             
            <h6>{filtereddata.category}<small>/{filtereddata.date}</small></h6>
          </div>
        </div>
       <hr id='top-hr'/>
    </div>
      ))
}
<div className='advertise'>
<img src={img4} alt='nature'/>
</div>
 </div>
 
</div>

<Footer/>
    </>

    
  )
}

export default Tourism;