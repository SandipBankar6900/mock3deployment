const Pagination=({coinsPerPage,totalCoins,currentPage,setCurrentPage})=>{
    const pageNum=[]

    for(let i=1;i<=Math.ceil(totalCoins/coinsPerPage);i++)
    {
        pageNum.push(i)
    }


    return(
        <div>
            {pageNum.map((num)=>(
                
                    <button  key={num} onClick={()=>setCurrentPage(num)}>{num}</button>
                
            ))}
            </div>
    
    )
}

export default Pagination