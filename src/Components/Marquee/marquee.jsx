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
    return (
        <section>
            <div className="container-fluid p-0">
                <div className='d-flex'>
                    <div className='text-white cut-effect bg-success w-25'>Favourite books list created by</div>
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
