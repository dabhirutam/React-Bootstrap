
const Contact = () => {
    return (
        <section className="py-5" id="contact">
            <div className="container">
                <div className="row mb-5 animate__animated wow fadeInUp">
                    <div className="col text-center">
                        <h2>Contact</h2>
                        <div className="bg-primary pt-1 mx-auto my-2 rounded-pill" style={{ width: '50px' }}></div>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
                </div>
                <div className="row">
                    {/* Contact Information Section */}
                    <div className="col-lg-5">
                        <div className="border-bottom border-top border-3 border-primary shadow p-4">
                            {[
                                { icon: 'geo-alt', label: 'Address', detail: 'A108 Adam Street, New York, NY 535022' },
                                { icon: 'telephone', label: 'Call Us', detail: '+91 93163 13729' },
                                { icon: 'envelope', label: 'Email Us', detail: 'dabhirutam34@gmail.com' },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="d-flex cnt-box animate__animated wow fadeInUp my-4"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div
                                        className="cnt-i d-flex align-items-center justify-content-center text-primary me-3 rounded-circle shadow"
                                        style={{
                                            height: '60px',
                                            aspectRatio: '1 / 1',
                                            background: '#eb5c1e28',
                                            transition: 'all .4s',
                                        }}
                                    >
                                        <i className={`bi bi-${item.icon} fs-4`}></i>
                                    </div>
                                    <div className="col">
                                        <h5>{item.label}</h5>
                                        <p className="m-0">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                            {/* Map */}
                            <div className="mt-5 animate__animated wow fadeInUp" style={{ animationDelay: '.8s' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                                    frameBorder="0"
                                    style={{ border: 0, width: '100%', height: '200px' }}
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="col-lg-7 mt-4 mt-lg-0">
                        <div className="border-bottom border-top border-3 border-primary shadow p-4" style={{ height: '100%' }}>
                            <form className="row g-3">
                                <div className="col-md-6 animate__animated wow rotateInDownLeft">
                                    <label htmlFor="inputname" className="form-label">
                                        Your Name
                                    </label>
                                    <input type="text" className="form-control" id="inputname" />
                                </div>
                                <div className="col-md-6 animate__animated wow rotateInDownRight">
                                    <label htmlFor="inputemail" className="form-label">
                                        Your Email
                                    </label>
                                    <input type="email" className="form-control" id="inputemail" />
                                </div>
                                <div className="col-12 animate__animated wow fadeInUp" style={{ animationDelay: '.4s' }}>
                                    <label htmlFor="inputsubject" className="form-label">
                                        Subject
                                    </label>
                                    <input type="text" className="form-control" id="inputsubject" />
                                </div>
                                <div className="col-12 animate__animated wow fadeInUp" style={{ animationDelay: '.6s' }}>
                                    <label htmlFor="inputaddress" className="form-label">
                                        Message
                                    </label>
                                    <textarea className="form-control" id="inputaddress" rows="8"></textarea>
                                </div>
                                <div className="col-12 text-center animate__animated wow fadeInUp" style={{ animationDelay: '.8s' }}>
                                    <button type="submit" className="btn btn-primary rounded-pill p-2 px-4">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;