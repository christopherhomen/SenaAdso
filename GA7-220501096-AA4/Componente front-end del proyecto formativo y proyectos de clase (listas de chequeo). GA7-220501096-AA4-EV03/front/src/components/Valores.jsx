function Valores(props){
    return(
        <section id="our-values" className="our-values">
        <div className="container">
  
          <div className="row">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <video autoPlay muted loop poster="cake.jpg" src={require("../../src/assets/video/video1.mp4")} className="video">
                  {/* <source  type="video/webm"/> */}
                  Your browser does not support the video tag.
                </video>
                <div className="card-body">
                  <h5 className="card-title"><a href="">Nuestra Misión</a></h5>
                  <p className="card-text">Difundir contenido musical, cultural e informativo de alta calidad, que incentive la libre expresión de las ideas, así como la exploración de nuevas formas radiofónicas que contribuyan emocionalmente al bienestar de nuestros oyentes. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="card">
                <video autoPlay muted loop poster="cake.jpg" src={require("../../src/assets/video/video2.mp4")} className="video">
                  {/* <source type="video/webm"/> */}
                  Your browser does not support the video tag.
                </video>
                <div className="card-body">
                  <h5 className="card-title"><a href="">Nuestra Visión</a></h5>
                  <p className="card-text">Somos una empresa radiofónica referente, que genera confianza y credibilidad en nuestros oyentes, por la calidad, compromiso e innovación a través de nuestros programas, que cuenta con un equipo autoexigente y capacitado para expandirse en el sector.</p>
                </div>
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    )
}

export default Valores;