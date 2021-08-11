import React, { useEffect, useState } from 'react';
import './App.css';
import Bottom from './components/bottom';

function App() {


  const [Data, setData] = useState('');
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('London');


  useEffect(() => {
    getData();

  }, [query]);

  const getData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_MY_API_KEY}`);
    const data = await response.json();
    setData(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getQuery = e => {
    e.preventDefault();

    setQuery(search);
    setSearch("");
  }


  return (
    <>

      <div className="inputs">
        <input type="text" placeholder="Enter City" value={search} onChange={updateSearch} />
        <button type="submit" onClick={getQuery}>Submit</button>
      </div>


      {Data ?
        <Bottom name={Data.name} actual_temp={Data.main.temp} feels_like={Data.main.feels_like} weather={Data.weather[0].description} /> : ""
      }
    </>
  );
}

export default App;
