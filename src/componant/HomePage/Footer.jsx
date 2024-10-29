
const Footer = () => {
    return (
        <footer className="py-5">
            <div className="container">
                <div className="row border-bottom pb-4">
                    <div className="col-md-5 col-lg-4">
                        <div>
                            <a href="#" className="text-decoration-none text-secondary fs-2">
                                Ninestars
                            </a>
                            <p className="m-0 mt-3">A108 Adam Street</p>
                            <p>New York, NY 535022</p>
                            <p className="m-0">
                                <strong>Phone:</strong> +91 93163 13729
                            </p>
                            <p>
                                <strong>Email:</strong> dabhirutam34@gmail.com
                            </p>
                        </div>
                    </div>
                    {/* Useful Links */}
                    <div className="col-md-3 col-lg-2 pt-3">
                        <div>
                            <h5>Useful Links</h5>
                            <ul className="list-unstyled d-flex flex-column row-gap-2">
                                {['Home', 'About', 'Services', 'Term Of Services'].map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-decoration-none"
                                            style={{
                                                color: '#0000009f',
                                                transition: 'all .4s',
                                            }}
                                            onMouseOver={(e) => (e.target.style.color = '#eb5d1e')}
                                            onMouseOut={(e) => (e.target.style.color = '#0000009f')}
                                        >
                                            <i className="bi bi-chevron-right"></i>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Our Services */}
                    <div className="col-md-4 col-lg-2 pt-3">
                        <div>
                            <h5>Our Services</h5>
                            <ul className="list-unstyled d-flex flex-column row-gap-2">
                                {['Web Design', 'Web Development', 'Product Management', 'Marketing'].map((service, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-decoration-none"
                                            style={{
                                                color: '#0000009f',
                                                transition: 'all .4s',
                                            }}
                                            onMouseOver={(e) => (e.target.style.color = '#eb5d1e')}
                                            onMouseOut={(e) => (e.target.style.color = '#0000009f')}
                                        >
                                            <i className="bi bi-chevron-right"></i>
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Follow Us */}
                    <div className="col-lg-4 pt-3">
                        <div>
                            <h5>Follow Us</h5>
                            <p className="text-secondary">
                                Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies
                            </p>
                            <ul className="list-unstyled d-flex">
                                {['twitter', 'facebook', 'instagram', 'linkedin'].map((network, index) => (
                                    <li className="cnt-box" key={index}>
                                        <a
                                            href="javascript:void(0)"
                                            className="cnt-i d-flex align-items-center justify-content-center text-primary me-3 rounded-circle shadow"
                                            style={{
                                                height: '40px',
                                                aspectRatio: '1 / 1',
                                                background: '#eb5c1e28',
                                                transition: 'all .4s',
                                            }}
                                        >
                                            <i className={`bi bi-${network} fs-5`}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="row pt-4 justify-content-center">
                    <div className="col-lg-6 text-center">
                        <p>
                            © Copyright <strong>Ninestars</strong> All Rights Reserved
                        </p>
                        <p>
                            Designed by <span className="text-primary">Rutam Dabhi</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;