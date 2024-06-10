

import './Components/style.css';
import About from'./Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpage from './Components/MainPage';
import Footer from './Components/Footer';

import Features from './Components/Features';
import Testimonials from './Components/Testimonials';
function App() {


  return (
    <div className="App">

 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a  href="#"><img src="assets\logo.png.png" alt=""  class="navbar-brand" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">How it works</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">testimonials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">contact us</a>
        </li>
      </ul>
      <button type="button" class="button">Large button</button>

    </div>
  </div>
</nav> 
     {/* <About /> */}
     {/* <Mainpage /> */}
     {/* <Footer /> */}
     {/* <Features /> */}
     <Testimonials/>
    </div>
  )
}

export default App
