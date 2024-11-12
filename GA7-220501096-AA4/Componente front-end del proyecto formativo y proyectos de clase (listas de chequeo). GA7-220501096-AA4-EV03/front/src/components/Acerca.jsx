function Acerca(props){
    return (
        <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>Acerca De</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
             Performance Radio, es una radiodifusora internacional de servicio público, con carácter musical e informativa que:  
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Produce </li>
              <li><i className="ri-check-double-line"></i> Transmite </li>
              <li><i className="ri-check-double-line"></i> Promueve una programación de calidad para contribuir y fomentar el diálogo intercultural </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
             A través de nuestros locutores que transmiten desde diferentes países del mundo, generamos espacios que fundamentan los valores de diversidad cultural, inclusión, convivencia, libertad de expresión, responsabilidad y ética informativa para un mundo abierto. Somos una empresa radial con objetivos claros de expansión, que se adapta a las tendencias digitales con un carácter innovador, resiliente y socialmente responsable
            </p>
            <a href="#our-values" className="btn-learn-more">Leer Más</a>
          </div>
        </div>

      </div>
    

    </section>
 
    )
}

export default Acerca;