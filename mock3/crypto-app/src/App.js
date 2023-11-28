
import './App.css';
import React  from "react";
import axios from "axios"
import { useState,useEffect } from 'react';
import CoinList from './CoinList';
import Pagination from "./Pagination";
import SearchBar from './SearchBar';
import SortButton from './SortButton';
import CurrencySelector from './CurrencySelector';
import CoinModal from "./CoinModel"




function App() {

  const [coins,setCoins]=useState([])
  const[currentPage,setCurrentPage]=useState(1);
  const[search,setSearch]=useState("");
  const[sortOrder,setSortOrder]=useState("asc");
  const[selectedCurrency,setSelectedCurrency]=useState("INR");
  const [coinsPerPage]=useState(10);
  const[modalData,setModalData]=useState(null);


  const fetchCoins=async()=>{


    try {
      const res=await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}`)
     
      setCoins(res.data)
      console.log(res.data)
      
    } catch (error) {
      console.log("error")
    }
  }

   useEffect(()=>{
    fetchCoins()
   },[selectedCurrency])

    
   const openModal=(coin)=>{
    setModalData(coin)
   }
   const closeModal=()=>{
    setModalData(null)
   }

   const indexLastCoin=currentPage*coinsPerPage;
   const indexFirstCoin=indexLastCoin-coinsPerPage;
   const currentCoins=coins
   .filter(
    (coin)=>
    coin.name.toLowerCase().includes(search.toLowerCase())||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
   )
   .sort((a,b)=>{
    if(sortOrder==="asc"){
      return a.market_cap - b.market_cap;

    }
    else{
      return b.market_cap - a.market_cap
    }
   })
   .slice(indexFirstCoin,indexLastCoin);


    

  return (
    <div className="App">

      <h1>Crypto Coins</h1>

      <CurrencySelector
      selectedCurrency={selectedCurrency}
      setSelectedCurrency={setSelectedCurrency}
      
      />

      <SearchBar
      search={search}
      setSearch={setSearch}
      />

      <SortButton 
      sortOrder={sortOrder}
      setSortOrder={setSortOrder}
      
      />

      <CoinList 
      coins={currentCoins}
      openModal={openModal}
      
      />

      <Pagination
      coinsPerPage={coinsPerPage}
      totalCoins={coins.length}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}

      
      />

      {modalData && <CoinModal coin={modalData} closeModal={closeModal} />}
    </div>
  );
}

export default App;
