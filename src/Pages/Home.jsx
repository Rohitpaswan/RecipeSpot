import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="cover-img">
        <div className="cover-header">
          <h1>Looking for your faviourt recipie</h1>
          <Link to='recipe' >
          <button className="search-btn"  to ='/recipe'>Search here </button>
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Home;
