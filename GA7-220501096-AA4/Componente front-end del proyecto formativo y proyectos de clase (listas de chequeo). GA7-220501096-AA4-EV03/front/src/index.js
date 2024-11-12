import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/App.css';
import './assets/css/style.css';

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
//import './assets/js/playbtn.js';
//import './assets/js/main';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));


// const audio = React.cloneElement(document.getElementById("audio"));
// const playPause = React.cloneElement(document.getElementById("play"));

// playPause.addEventListener("click", () => {
//   if (audio.paused || audio.ended) {
//     playPause.querySelector(".pause-btn").classList.toggle("hide");
//     playPause.querySelector(".play-btn").classList.toggle("hide");
//     audio.play();
//   } else {
//     audio.pause();
//     playPause.querySelector(".pause-btn").classList.toggle("hide");
//     playPause.querySelector(".play-btn").classList.toggle("hide");
//   }
// });

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
