import { Link } from "react-router-dom";
import LogButton from "./Logbutton";

function Navbar(props){
    return(
      

        <div id="header" className="d-flex align-items-center ">

          
          <div className="container-fluid d-flex align-items-center justify-content-lg-between">
      

            <a href="#hero" className="logo me-auto me-lg-0"><img src={require("../../assets/img/logo/logo3.png")} alt="" className="img-fluid"/></a>
      
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li><Link to="/" className="nav-link scrollto active" href="#hero">Inicio</Link></li>
                <li><Link to={"/acerca"} className="nav-link scrollto" href="#about">Acerca de</Link></li>
                <li><Link to={"/servicios"} className="nav-link scrollto">Servicios</Link></li>
                
                <li><Link to={"/equipo"} className="nav-link scrollto">Nuestro Equipo</Link></li>
                <li><Link to={"/contacto"}  className="nav-link scrollto">Contacto</Link></li>

                {/* <li className="dropdown"><span>Usuario</span> <i className="bi bi-chevron-down"></i> */}

                <li className="dropdown"><Link to={"/usuarios"}><span>Usuario</span> <i className="bi bi-chevron-down"></i></Link>
                  <ul>
                    <li><LogButton to={"/login"} logged={props.logged}/></li>
                    <li><Link >Iniciar Sesión</Link></li>
                    <li><Link href="#">Registro</Link></li>
                
                  </ul>
                </li>
       
      
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
      
            <div className="header-social-links d-flex align-items-center">
              <a href="https://www.facebook.com/performanceradio" className="facebook" target="_blank"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/performanceradio/" className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
              <a href="https://twitter.com/performanceradi" className="twitter" target="_blank"><i className="bi bi-twitter"></i></a>
              <a href="https://www.youtube.com/channel/UC_ir-CuCJm7gMEeXdegjq2Q" className="youtube" target="_blank"><i className="bi bi-youtube"></i></a>
            </div>
      
          </div>
     
        </div>

      //   <nav class="navbar navbar-expand-lg bg-dark"> 
      //   <div class="container-fluid">
      //     <a class="navbar-brand" href="#">Navbar w/ text</a>
      //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      //       <span class="navbar-toggler-icon"></span>
      //     </button>
      //     <div class="collapse navbar-collapse" id="navbarText">
      //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      //         <li class="nav-item">
      //           <a class="nav-link active" aria-current="page" href="#">Home</a>
      //         </li>
      //         <li class="nav-item">
      //           <a class="nav-link" href="#">Features</a>
      //         </li>
      //         <li class="nav-item">
      //           <a class="nav-link" href="#">Pricing</a>
      //         </li>
      //       </ul>
      //       <span class="navbar-text">
      //         Navbar text with an inline element
      //       </span>
      //     </div>
      //   </div>
      // </nav>
    )
}

export default Navbar;