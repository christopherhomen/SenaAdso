function Footer(props){
    return(
        <footer id="footer">
        <a href="https://chat.whatsapp.com/KWg4GAgxnV47D0sbwNWuGa?text=Hola,Deseo%20solicitar%20una%20canción%20" className="whatsapp" target="_blank"> <i className="fa fa-whatsapp whatsapp-icon"></i></a>
    
        <div className="footer-top">
    
          <div className="container">
    
            <div className="row  justify-content-center">
              <div className="col-lg-6">
                <h3>Performance</h3>
                <p>Recibe las ultimas noticias.</p>
              </div>
            </div>
    
            <div className="row footer-newsletter justify-content-center">
              <div className="col-lg-6">

              </div>
            </div>
    
            <div className="social-links">
              <a href="https://www.facebook.com/performanceradio" className="facebook" target="_blank"><i className="bx bxl-facebook"></i></a>
              <a href="https://www.instagram.com/performanceradio/" className="instagram" target="_blank"><i className="bx bxl-instagram"></i></a>
              <a href="https://twitter.com/performanceradi" className="twitter" target="_blank"><i className="bx bxl-twitter"></i></a>
              <a href="https://www.youtube.com/channel/UC_ir-CuCJm7gMEeXdegjq2Q" className="youtube" target="_blank"><i className="bx bxl-youtube"></i></a>
            </div>
          </div>
        </div>
    
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright <strong><span>Performance Radio</span></strong>. All Rights Reserved 2022
          </div>
          <div className="credits">
            Designed by <a href="#">Unicornios Espaciales</a>
          </div>
        </div>
        </footer>
    )
}

export default Footer;