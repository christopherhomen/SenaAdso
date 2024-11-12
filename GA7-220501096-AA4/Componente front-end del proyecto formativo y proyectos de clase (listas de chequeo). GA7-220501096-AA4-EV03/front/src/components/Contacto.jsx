import { IframeHTMLAttributes } from "react";

function Contacto (props){
    return (
        <section id="contact" className="contact">
        <div className="container">
  
          <div className="section-title">
            <h2>Contacto</h2>
            <p>Performance Radio, es una estación de radio virtual de Acrópolis Disco Móvil con Base en la ciudad de Poza Rica Veracruz México.</p>
          </div>
  
          <div>
            <iframe style={{border:0, height: 270}} className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59780.8420067579!2d-97.47992836886162!3d20.534795234482687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85da14cd806d0909%3A0x7bc6651769041d29!2sPoza%20Rica%20de%20Hidalgo%2C%20Ver.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sco!4v1663172131466!5m2!1ses!2sco" frameborder="0" allowfullscreen></iframe>
          </div>
  
          <div className="row mt-5">
  
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Ubicación:</h4>
                  <p>152 Sonoma - Veracruz, CA 94125</p>
                </div>
  
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>performanceradio20@gmail.com</p>
                </div>
  
                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Teléfono:</h4>
                  <p>+​415-234-3567</p>
                </div>
  
              </div>
  
            </div>
  
            <div className="col-lg-8 mt-5 mt-lg-0">
  
              <form action="https://formsubmit.co/performanceradio20@gmail.com" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" required/>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" required/>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Titulo" required/>
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Cargando</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Su mensaje fue enviado, gracias!</div>
                </div>
                <div className="text-center"><button type="submit">Enviar Mensaje</button></div>
              </form>
  
            </div>
  
          </div>
  
        </div>
      </section>
    )
}

export default Contacto;