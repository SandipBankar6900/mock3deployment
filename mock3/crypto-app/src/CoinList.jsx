import React from "react";


const CoinList=({coins, openModal})=>{





    return(
    
        <table>

            <thead>

                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Current Price</th>
                    <th>Price Change 24h</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            <tbody>
                {coins.map((coin)=>(
                    <tr key={coin.id} onClick={()=> openModal(coin)}>
                        <td><img src={coin.image} alt="name"/></td>
                        <td>{coin.name}</td>
                        <td>{coin.symbol}</td>
                        <td>{coin.current_price}</td>
                        <td>{coin.price_change_percentage_24h}</td>
                        <td>{coin.market_cap}</td>


                    </tr>
                ))}
            </tbody>
        </table>


       
        

    )
}
export default CoinList