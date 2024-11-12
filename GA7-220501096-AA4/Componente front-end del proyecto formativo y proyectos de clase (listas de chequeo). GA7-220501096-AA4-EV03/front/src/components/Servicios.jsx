function Servicios(props){
    return (
        <section id="services" className="services">
        <div className="container">
  
          <div className="section-title">
            <h2>Servicios</h2>
            <p>Conoce nuestros servicios:</p>
          </div>
  
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-briefcase" ></i></div>
                <h4 className="title"><a href="">Promociones Publicitarias</a></h4>
                <p className="description">Obten las mejores espacios para promocionar tus productos en la web</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-boombox" ></i></div>
                <h4 className="title"><a href="">Promociones Radiales</a></h4>
                <p className="description">Contrata los mejores locutores para promocionar tu marca, empresa y más</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-file-music"></i></div>
                <h4 className="title"><a href="">Creación de Cuñas Radiales</a></h4>
                <p className="description">Obten las mejores voces para tus cuñas personalizadas</p>
              </div>
            </div>
        </div>
        </div>
      </section>


    )
}

export default Servicios;