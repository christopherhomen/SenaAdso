function Home(props){
    return(
        <section id="cta" className="cta">
        <div className="container">
  
          <div className="text-center">
            <h3>Nuestros Programas</h3>
            <p> Tenemos un programa especial para ti.</p>
            
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={require("../assets/img/programas/rocio.jpg")} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={require("../assets/img/programas/leticia_marquez.jpg")} className="d-block w-100" alt="..."/>      
      </div>
      <div className="carousel-item">
        <img src={require("../assets/img/programas/rossy.jpg")} className="d-block w-100" alt="..."/>
      </div>
            <div className="carousel-item">
        <img src={require("../assets/img/programas/roberto_garcia.jpg")} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={require("../assets/img/programas/susan_sanchez.jpg")} className="d-block w-100" alt="..."/>      
      </div>
      <div className="carousel-item">
        <img src={require("../assets/img/programas/maria_luisa.jpg")} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={require("../assets/img/programas/diana_tapatia.jpg")} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={require("../assets/img/programas/jesus_guzman.jpg")} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={require("../assets/img/programas/lulu_molina.jpg")} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={require("../assets/img/programas/daniela_aragon.jpg")} className="d-block w-100" alt="..."/>
      </div>
      <br/>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Anterior</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Siguiente</span>
    </button>
  </div>
          </div>
  
        </div>
      </section>
  
    )
}

export default Home;