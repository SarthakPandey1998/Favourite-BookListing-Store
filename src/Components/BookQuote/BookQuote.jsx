import  { useEffect, useState } from 'react'

function BookQuote() {
    const[quote,setQuote] = useState({});

    useEffect(()=>{
        fetch("https://recite.onrender.com/api/v1/random")
        .then((res)=>res.json())
        .then((data)=> setQuote(data))
        .catch((err)=>console.log("API not working:",err))
    },[])
  return (
    <div className='text-center'>
       <p>{quote.quote}</p>
       <h6>-{quote.author}</h6>
    </div>
  )
}

export default BookQuote
