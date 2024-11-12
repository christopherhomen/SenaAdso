function Cuentas(props){
    return(
        <section id="counts" className="counts">
        <div className="container">
  
          <div className="row counters">
  
            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="1" className="purecounter"></span>
              <p>Locutores</p>
            </div>
  
            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="1" className="purecounter"></span>
              <p>Paises</p>
            </div>
  
            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" className="purecounter"></span>
              <p>Horas de transmisión continua</p>
            </div>
  
            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="1582" data-purecounter-duration="1" className="purecounter"></span>
              <p>Radio Escuchas</p>
            </div>
  
          </div>
  
        </div>
      </section>
    )
}

export default Cuentas;