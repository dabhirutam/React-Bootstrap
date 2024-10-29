import aboutImg from './../../images/about-img.svg'

const About = () => {
    return (
        <section className="py-5 overflow-hidden" id="about">
            <div className="container">
                <div className="row mb-5">
                    <div className="col text-center animate__animated wow fadeInUp">
                        <h2>About</h2>
                        <div className="bg-primary pt-1 mx-auto my-2 rounded-pill" style={{ width: '50px' }}></div>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0 animate__animated wow bounceInLeft">
                        <div>
                            <img className="img-fluid" src={aboutImg} alt="About" />
                        </div>
                    </div>
                    <div className="col-lg-6 animate__animated wow bounceInRight">
                        <div className="d-flex flex-column px-2">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ul className="list-unstyled mt-3">
                                <li>
                                    <div className="d-flex mb-3">
                                        <div className="bg-primary d-flex align-items-center justify-content-center me-3 rounded" style={{ height: '70px', aspectRatio: '1/1' }}>
                                            <i className="bi bi-diagram-3 fs-2 text-white"></i>
                                        </div>
                                        <div className="col">
                                            <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                                            <p className="d-none d-sm-block">Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <div className="bg-primary d-flex align-items-center justify-content-center me-3 rounded" style={{ height: '70px', aspectRatio: '1/1' }}>
                                            <i className="bi bi-fullscreen-exit fs-2 text-white"></i>
                                        </div>
                                        <div className="col">
                                            <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                                            <p className="d-none d-sm-block">Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;