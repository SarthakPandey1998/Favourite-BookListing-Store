import { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js';

function BookQuote() {
  const [quote, setQuote] = useState({ quote: "", author: "" });
  const [show, setShow] = useState(false);

  const typedRef = useRef(null);

  useEffect(() => {
    fetch("https://recite.onrender.com/api/v1/random")
      .then((res) => res.json())
      .then((data) => { setQuote(data); setShow(true) })
      .catch((err) => console.log("API not working:", err))


  }, [])

  useEffect(() => { 
    if(quote.quote){
      const typed = new Typed(typedRef.current, {
        strings: [`${quote.quote}`],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
      })

      return () => {
        typed.destroy();
      }
    }
  }, [quote.quote])
  return (
    <>
      {show ? <div className='text-center'>
        <span ref={typedRef}></span>
        <h6>- {quote.author}</h6>
      </div> : <div className='text-center'>Loading...</div>}
    </>
  )
}

export default BookQuote
