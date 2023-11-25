import React from "react";
import "./Coins.css";
import CoinItem from "./CoinItem";
const Coins = (props) => {
  const newCoins = props.coins.filter(coin => {
    return coin.name.toLowerCase().includes(props.search.toLowerCase());
});
  return (
    <div className="container">
      <div>
        <div className="heading">
    
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>
        {newCoins.map(coins =>{
          coins.name.toLowerCase()

          return <CoinItem coins={coins}/>
        })}
      </div>
    </div>
  );
};

export default Coins;
