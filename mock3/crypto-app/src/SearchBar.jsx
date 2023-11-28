
import React from "react"
const SearchBar=({search,setSearch})=>{





    return(
        <input
        type="text"
        placeholder="Search By Name Or Symbol"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        
        />
    )
}

export default SearchBar