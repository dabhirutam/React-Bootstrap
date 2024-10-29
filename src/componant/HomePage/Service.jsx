
const Service = () => {
    return (
        <section className="py-5 bg-primary-subtle" id="service">
        <div className="container">
          <div className="row mb-5 animate__animated wow fadeInUp">
            <div className="col text-center">
              <h2>Services</h2>
              <div className="bg-primary pt-1 mx-auto my-2 rounded-pill" style={{ width: '50px' }}></div>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
          </div>
          <div className="row justify-content-center row-gap-4">
            {[
              {
                icon: 'bi bi-activity',
                title: 'Lorem Ipsum',
                text: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias',
                delay: '.2s'
              },
              {
                icon: 'bi bi-bounding-box-circles',
                title: 'Sed ut perspici',
                text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
                delay: '.4s'
              },
              {
                icon: 'bi bi-calendar4-week',
                title: 'Magni Dolores',
                text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
                delay: '.6s'
              },
              {
                icon: 'bi bi-broadcast',
                title: 'Nemo Enim',
                text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
                delay: '.8s'
              }
            ].map((service, index) => (
              <div
                className="col-sm-8 col-md-6 col-xl-3 animate__animated wow fadeInUp"
                data-wow-delay={service.delay}
                key={index}
              >
                <div
                  className="card border-0 shadow p-4"
                  style={{ transition: 'all .3s', cursor: 'pointer' }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-5%)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0%)')}
                >
                  <div className="card-body">
                    <div>
                      <i className={`${service.icon} text-primary fs-2`}></i>
                    </div>
                    <h5 className="card-title my-3" style={{ transition: 'all .4s' }}>{service.title}</h5>
                    <p className="card-text">{service.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Service;