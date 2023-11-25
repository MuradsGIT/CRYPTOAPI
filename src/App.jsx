import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Coins from "./components/Coins";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <Navbar search={search} setSearch={setSearch}/>
      <Coins coins={coins} search={search} />
    </div>
    
  );
}

export default App;
