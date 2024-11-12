function Precios(props) {
    return (
        <section id="pricing" className="pricing">
        <div className="container">
  
          <div className="section-title">
            <h2>Precios</h2>
            <p>Tenemos un catálogo de precios especial solo para ti.</p>
          </div>
  
          <div className="row">
  
            <div className="col-lg-4 col-md-6">
              <div className="box">
                <h3>Promociones Publicitarias</h3>
                <h4><sup>$</sup>Por definir<span> / month</span></h4>
                <ul>
                  <li>Obten las mejores espacios para promocionar tus productos en la web</li>
                  {/* <!-- <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li className="na">Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li> --> */}
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">Adquirir</a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
              <div className="box featured">
                <h3>Promociones Radiales</h3>
                <h4><sup>$</sup>Por definir<span> / month</span></h4>
                <ul>
                  <li>Contrata los mejores locutores para promocionar tu marca, empresa y más</li>
                  {/* <!-- <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li> --> */}
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">Adquirir</a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="box">
                <h3>Creación de Cuñas Radiales</h3>
                <h4><sup>$</sup>Por definir<span> / month</span></h4>
                <ul>
                  <li>Obten las mejores voces para tus cuñas personalizadas</li>
                  {/* <!-- <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li>Massa ultricies mi</li> --> */}
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">Adquirir</a>
                </div>
              </div>
            </div>

  
          </div>
  
        </div>
      </section>
    )
}

export default Precios;