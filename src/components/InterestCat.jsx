import { useState, useEffect } from "react";
import * as interestCatService from '../service/interestCatService.js'
import { Link } from "react-router-dom";
import './InterestCat.css'

const interestCat = () => {
  const [interestCatList, setInterestCat] = useState([]);

useEffect(() => {
 const FetchInterestCats = async () => {
  try{
  const categories = await interestCatService.index()
    
  if (categories.error) {
    throw new Error(categories.error)
  }

  setInterestCat(categories)
  } catch(error) {
    console.error(error)
  }
 }
 FetchInterestCats()
}, [])

// const categories = interestCatList.map((category) =>
//   <li key={category._id}>
//     <h3>{category.name}</h3>
//     <Link to ={category.link} target='_blank'><button className='youtubeLinkButton'>see more</button></Link>
//   </li>
// )

//     return (
     
//       <div>
//     <h2>Categories</h2>
//     <ul>{categories}</ul>
//       </div>
//     );
//   };

const categories = interestCatList.map((category) => (
  <li key={category._id} className="category-item">
    <h3>{category.name}</h3>
    
    {category.name === "Fitness & Wellness" && (
      <>
      <img
        src="/img/Fitness & Wellness.jpg"
        alt="Group of 4 running"
        className="category-image"
      />
      <p className="category-description">
        Explore fitness routines, wellness tips, and healthy living advice.
      </p>
    </>
    )}
    {category.name === "Music" && (
      <>
      <img
        src="/img/Music.png"
        alt="Music Instruments"
        className="category-image"
      />
      <p className="category-description">
        Discover new music, learn instruments, and dive into the world of sound.
      </p>
    </>
    )}
    {category.name === "Table Top Games" && (
      <>
      <img
        src="/img/Table top Games.jpg"
        alt="Table Top Games"
        className="category-image"
      />
      <p className="category-description">
        Explore different types of table top games, from strategy to fun.
      </p>
    </>
    )}
    {category.name === "Video Games" && (
      <>
      <img
        src="/img/Video Games.jpg"
        alt="Video Game Player"
        className="category-image"
      />
      <p className="category-description">
        Explore the exciting world of video games, from classics to new releases.
      </p>
    </>
    )}

    <Link to={category.link} target="_blank">
      <button className="youtubeLinkButton">See More</button>
    </Link>
  </li>
))

return (
  <div className="IntCategory-container shared-container">
    <header className="IntCategory-header">
    <h2>Current Categories</h2>
      <p className="catdashboard-description">
        Looking for inspiration? New categories are sprouting up all the
        time! Check back often to see what's new. Excited to watch you grow!
      </p>
    </header>

    <ul className="categories-list">{categories}</ul>
  </div>
)
}
  
  export default interestCat;