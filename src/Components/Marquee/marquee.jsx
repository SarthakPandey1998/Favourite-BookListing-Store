import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import './marquee.css';

const user = [{
    name: "Mohini",
    class: "text-danger"
},
{
    name: "Sohan",
    class: "text-info"
},
{
    name: "Monika",
    class: "text-primary"
},
{
    name: "Rahul",
    class: "text-warning"
},
]
function Marquee() {

    const favouriteRef = useRef(null);

    useEffect(()=>{
        const sr = ScrollReveal({
            distance: '150px',
            duration: 800,
            delay: 500,
            reset: true,
            
          });
        if (favouriteRef.current) {
            sr.reveal(favouriteRef.current,{origin:"left"});
          }
    },[]);
    return (
        <section>
            <div className="container-fluid p-0">
                <div className='d-flex'>
                    <div className='text-white cut-effect bg-success w-25' ref={favouriteRef}>Favourite books list created by</div>
                    <div className='marquee'>
                        <p>
                            {
                                user.map((user, index) => <span className={user.class} key={index}>{user.name}&emsp;</span>)
                            }
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Marquee;
