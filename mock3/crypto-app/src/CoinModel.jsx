const CoinModel=({coin,closeModal})=>{



    return(
        <div>
            <h2>{coin.name}-{coin.symbol}-{coin.market_cap_rank}-{coin.current_price}-{coin.price_change_24h}</h2>

            <button onClick={closeModal}>Close</button>
        </div>
    )
}

export default CoinModel