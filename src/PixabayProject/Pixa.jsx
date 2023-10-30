import React, { useEffect, useState } from 'react';

import './App.css';

const Pixa = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=37880286-e1e18b7cca90632d195ae5e6e&q=${search}&image_type=photo&pretty=true`)
      .then((res) => res.json())
      .then((d) => setData(d.hits));
  }, [search]);
  

  return (
    <div className='App'>
      <nav className='nav'>

        <div className='pixabay'>
        <i id='pixabay' class="fa-solid fa-pixabay">pixabay</i>
        </div>

        <div className='nav2'>
          Explore
          <select id='explore'>
            <option>Explore</option>
          </select>
        </div>

        <div className='notification'>🔔</div>

        <div className='nav4'>
          <button className='upload-container'>Upload</button>
        </div>

      </nav>



      <div className='name'>
        <div className='name-content'>
          <h1>Stunning royalty-free images & royalty-free stock</h1>
          <h4>"Over 4.2 million+ high quality stock images, videos, and music shared by our talented community."</h4>
        </div><br />

        <div id='search'>
        <div className="search">
          <div className="searchbar">
          <input type='text' onChange={(e) => setSearch(e.target.value)} placeholder='Search for all images on pixabay' />
          </div>
          <select className='allimg'>
            <option value=''>Images</option>
          </select>
        </div>
        </div>
      </div>

      <div className="imgmain">
      {data.map((x) => {
        return (
          <section key={x.type} className='secimg'>
            <img id='img' src={x.webformatURL} height={x.webformatHeight} width={x.webformatWidth} alt='Pixabay' />
          </section>
        );
      })}
      
      </div>
    </div>
  );
};

export default Pixa;
