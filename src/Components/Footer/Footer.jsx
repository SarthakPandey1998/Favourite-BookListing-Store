import { useEffect, useState } from "react";

function Footer() {
    const[date,setDate] = useState("");

    useEffect(()=>{
        var now = new Date();
        var dateTime = now.toLocaleString();
        setDate(dateTime)
    },[])
    return (
        <footer className='d-flex justify-content-around align-items-center bg-light text-black-50' style={{ height: "12vh" }}>
            &copy;BooksHaven 2024
            <div className="text-end">{date}</div>
        </footer>
    )
}

export default Footer;
