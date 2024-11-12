import ReactPlayer from 'react-player'
import React from 'react';
//import '../../assets/js/playbtn';
//


function Hero(props){
  // this.audio = React.createRef();
    return(
        <section id="hero">
    
    <div className="hero-container img-fluid">
     {/* <ReactPlayer url={require("../../assets/video/video4.mp4")} className="react-player" playing width="100%" height="100%"> </ReactPlayer> */}
     {/* <img src={require('../../assets/img/locutor/daniela_aragon.jpg')}></img> */}
      <video autoPlay muted loop id="myVideo" src={require("../../assets/video/video4.mp4")} className="content-video" type="video/mp4">
       
      </video>
       <div className="hero-container-play">
        <img src={require("../../assets/img/logo/logo1.png")} style={{marginTop:82}} alt="" className="img-fluid" />
       

         <div id= "play2" className="containerplay2 img-fluid">
            <div className="player img-fluid">
             <div className="player__controls img-fluid">
                <div className="player__btn player__btn--small img-fluid" id="previous">
                  <i className="fas fa-arrow-left"></i>
                </div>
                <h5 className="player__title img-fluid">Reproduciendo</h5>
                <div className="player__btn player__btn--small img-fluid" id="icon-menu">
                  <i className="fas fa-bars img-fluid"></i>
                </div>
              </div>
              <div className="player__album img-fluid">
                <img src={require("../../assets/img/locutor/andres_salazar.png")} alt="Album Cover" className="player__img img-fluid" loading="lazy"/>
              </div>
              
              <h2 src="MetadatosRadio.aspx?servidor=https://cp9.serverse.com/proxy/perforCHUMILLASmp=/index.htmlCHUMILLASsid=1&amp;" className="player__artist img-fluid">Performance Radio </h2>
              <h3 className="player__song img-fluid">Radio</h3>
         
              <input type="range" value="20" min="0" className="player__level img-fluid" id="range" />
              <div className="audio-duration img-fluid">
                <div className="start img-fluid">00:01</div>
                <div className="end img-fluid">04:30</div>
              </div>
         
              <audio className="player__audio img-fluid" controls id = {"audio"}>
                
                <source src="https://cp9.serverse.com/proxy/perfor?mp=/stream;" type="audio/mpeg" />
                </audio>
         
         <div className="player__controls img-fluid">
           <div className="player__btn player__btn--medium img-fluid" id="backward">
             <i className="fas fa-backward img-fluid"></i>
           </div>
    
           <div className="player__btn player__btn--medium blue play img-fluid" id={"play"} >
             <i className="fas fa-play play-btn img-fluid"></i>
             <i className="fas fa-pause pause-btn hide img-fluid"></i>
           </div>
    
           <div className="player__btn player__btn--medium img-fluid" id="forward">
             <i className="fas fa-forward img-fluid"></i>
           </div>
         </div>
       </div>
        </div> 

 </div>
</div>


</section>



    )
}




export default Hero;