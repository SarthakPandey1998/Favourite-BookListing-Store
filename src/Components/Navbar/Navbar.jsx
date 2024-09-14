

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between px-4 py-2">
            <div className="container-fluid d-flex justify-content-between">
                <div><a className="navbar-brand text-primary fs-2" href="#"><img src='logo.png' width={100} height={80} /></a></div>
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link fw-bold active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item fw-bold">
                            <a className="nav-link" href="#">ABOUT</a>
                        </li>
                        <li className="nav-item fw-bold">
                            <a className="nav-link" aria-disabled="true">CONTACT</a>
                        </li>
                    </ul>
                    <form className="d-flex ms-5" role="search">
                           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div>
                    <button className="btn btn-primary">Login</button>
                    <button className="btn btn-outline-primary mx-2">Register</button>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
}

export default Navbar;
