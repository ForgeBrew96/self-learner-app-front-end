import { useState, useEffect } from "react";
import * as interestCatService from '../service/interestCatService.js'
import { Link } from "react-router-dom";


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
    console.log(error)
  }
 }
 FetchInterestCats()
}, [])

const categories = interestCatList.map((category) =>
  <li key={category._id}>
    <h3>{category.name}</h3>
    <Link to ={category.link}><button>see more</button></Link>
  </li>
)

    return (
     
      <div>
    <h2>Categories</h2>
    <ul>{categories}</ul>
      </div>
    );
  };
  
  export default interestCat;