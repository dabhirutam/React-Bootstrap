import team1 from './../../images/team-1.jpg'
import team2 from './../../images/team-2.jpg'
import team3 from './../../images/team-3.jpg'
import team4 from './../../images/team-4.jpg'

const Team = () => {
    const teamMembers = [
        { name: 'Walter White', role: 'Chief Executive Officer', imgSrc: team1, delay: '.2s' },
        { name: 'Sarah Johnson', role: 'Product Manager', imgSrc: team2, delay: '.4s' },
        { name: 'William Anderson', role: 'CTO', imgSrc: team3, delay: '.6s' },
        { name: 'Amanda Jepson', role: 'Accountant', imgSrc: team4, delay: '.8s' },
    ];

    return (
        <section className="py-5" id="team">
            <div className="container">
                <div className="row mb-5 animate__animated wow fadeInUp">
                    <div className="col text-center">
                        <h2>Team</h2>
                        <div className="bg-primary pt-1 mx-auto my-2 rounded-pill" style={{ width: '50px' }}></div>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
                </div>
                <div className="row justify-content-center row-gap-4">
                    {teamMembers.map((member, index) => (
                        <div
                            className="col-md-6 col-xl-3 animate__animated wow fadeInUp"
                            data-wow-delay={member.delay}
                            key={index}
                        >
                            <div
                                className="position-relative img-box overflow-hidden rounded-4"
                                style={{ cursor: 'pointer', transition: 'all .4s' }}
                                onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(75%)')}
                                onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(100%)')}
                            >
                                <img className="img-fluid" style={{ width: '100%' }} src={member.imgSrc} alt={member.name} />

                                {/* Social Icons */}
                                <div
                                    className="img-t-iv position-absolute top-0 start-0 bg-dark bg-opacity-75 p-3 invisible opacity-0"
                                    style={{
                                        height: '100%',
                                        transform: 'translateX(-100%)',
                                        transition: 'all .4s',
                                    }}
                                >
                                    <ul className="list-unstyled d-flex flex-column row-gap-2">
                                        {['twitter', 'instagram', 'facebook', 'linkedin'].map((social, i) => (
                                            <li key={i}>
                                                <a href="#" className="text-decoration-none icon-link icon-link-hover fs-5" style={{ transition: 'all .4s' }}>
                                                    <i className={`bi bi-${social}`}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Member Info */}
                                <div
                                    className="img-t-iv position-absolute bottom-0 start-0 bg-dark bg-opacity-75 text-center p-2 invisible opacity-0"
                                    style={{
                                        width: '100%',
                                        transform: 'translateY(100%)',
                                        transition: 'all .4s',
                                    }}
                                >
                                    <h4 className="text-white">{member.name}</h4>
                                    <p className="fst-italic text-white m-0">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team;