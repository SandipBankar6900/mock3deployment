import React from "react"

const SortButton=({sortOrder, setSortOrder})=>{

    const handleSort=()=>{

        setSortOrder(sortOrder==="asc" ? "desc" : "asc");

    }


    return(
       <button onClick={handleSort}>{sortOrder==="asc" ? "Sort Ascending" :"Sort Descending"}</button>
    )
}

export default SortButton