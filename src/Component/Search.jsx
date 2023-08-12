import React, { useState } from "react";


const Search = (props) => {
  const [value,setValue]=useState('');
  const inputReader = (event)=>{
   setValue(event.target.value)
  }

  const onSubmit=()=>{
    props.setSearchedQuery(value)

  }
 console.log(value);
  return (
    <div>
      <div className="search-heading">
        <h2>
          Search Recipes With
          <span style={{ color: "#2185D0" }}> Our Recipe-App</span>{" "}
        </h2>
        <h4>Input Recipes seperated by comma</h4>

        <div className="d-flex justify-content-center  ">
          <div className="input-group w-50">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              name="search-bar"
              value={value}
              onChange={inputReader}
            
       
            />
            <div className="input-group-append" style={{ marginLeft: "5px" }}>
              <button className="btn btn-primary " type="button" onClick={onSubmit} >
                <i className="bi bi-search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="18"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />

                  </svg>
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
