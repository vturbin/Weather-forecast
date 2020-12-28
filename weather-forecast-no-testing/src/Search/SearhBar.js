import React, { useState,useRef,useEffect } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [searchCity, setSearchCity] = useState("");
  const [open, setOpen] = useState(false);
  const [cityResults, setCityResults] = useState([]);
  const ref = useRef();

  const searchHandler = (e) => {
    setSearchCity(e.target.value);
  };

  const handleResult = (key,cityName,countryName) => {
    setCityResults([]);
    setSearchCity(`${cityName}, ${countryName}`)
    props.city(key);
  }
  
  const currentPositionHandler = () => {
    setSearchCity("Current Location")
    window.navigator.geolocation.getCurrentPosition(
          position=> props.coords(position),
          err => props.coords(err)
      );
  }

  useEffect(() => {
    const onBodyClick = (event) => {
     if (ref.current && ref.current.contains(event.target)) {
        return;
      }
 
      setOpen(false);
    };
 
    document.body.addEventListener('click', onBodyClick);
 
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const printResults = cityResults.map((result)=> {
      return <li onClick={()=>handleResult(result.Key,result.LocalizedName, result.Country.LocalizedName)} key={result.Key} className="search-result-item">{result.LocalizedName}, {result.Country.LocalizedName}</li>
  })
 

  return (
    <div className="searchbar-wrapper">
      <input
        ref={ref}
        type="text"
        className="search-input"
        placeholder="Enter your city"
        value={searchCity}
        onChange={(e) => searchHandler(e)}
        onClick={()=> setOpen(true)}
      />
      {searchCity ? (
        <i
          className="material-icons"
          id="clearSearch"
          onClick={(e) => {setOpen(false);setSearchCity("")}}
        >
          close
        </i>
      ) : null}
      {open ? (
          <div className="search-result-wrapper">
          <ul className="search-result-list">
          <li key={0} className="search-result-item" onClick={()=>currentPositionHandler()}>Get Current Location</li>
          {printResults}
          </ul>
          </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
