const CurrencySelector=({selectedCurrency, setSelectedCurrency})=>{

    const handleChange=(e)=>{
        setSelectedCurrency(e.target.value)
    }


    return(
        <select value={selectedCurrency}  onChange={handleChange}>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>

        </select>
    )
}

export default CurrencySelector