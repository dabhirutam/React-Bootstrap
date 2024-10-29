

const Header = () => {

    return (
        <header className="fixed-top">
            <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
                <div className="container">
                    <a className="navbar-brand fs-2 opacity-50 fw-medium text-primary" href="#">Ninestars</a>
                    <a data-bs-toggle="offcanvas" href="#offcanvasExample"
                        className="d-lg-none border p-1 px-2 rounded-3 border-primary">
                        <i className="bi bi-list fs-2 text-primary"></i>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 column-gap-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#team">Team</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contect">Contect</a>
                            </li>
                        </ul>
                        <a href="#" className="btn btn-primary fw-medium ms-4 rounded-pill px-4">Get Strated</a>
                    </div>
                </div>
            </nav>
        </header>
    );

}

export default Header;