import heroImg from './../../images/hero-img.svg'

const Banner = () => {
    return (
        <section className="bg-primary-subtle border-bottom border-primary d-flex align-items-center" style={{ height: '700px' }}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-11 col-lg-6 order-2 order-lg-0 animate__animated wow fadeInUp">
                        <h1 className="fw-bold">Better digital experience with Ninestars</h1>
                        <p className="fs-5 text-secondary">We are a team of talented designers making websites with Bootstrap</p>
                        <div className="d-flex">
                            <a href="#" className="btn btn-primary btn-shadow rounded-pill p-2 px-4 me-4">
                                Get Started
                            </a>
                            <a data-bs-toggle="modal" href="#banner-video" className="fs-5 text-decoration-none align-items-center d-flex text-dark">
                                <i className="bi bi-play-circle text-primary fs-3 me-2"></i>
                                Watch Video
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-lg-6 order-1 animate__animated wow zoomIn">
                        <div>
                            <img className="img-fluid" style={{ animation: 'banner 5s linear infinite' }} src={heroImg} alt="Hero" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;