import './App.css'
import Swal from 'sweetalert2';
import Typewriter from 'typewriter-effect';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const App = () => {
  const demo=()=>{
    Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
  }
  return (<>
    <div id="outer">
      <div id="nav">
        <div id="logo">
          <div id="circle"></div>
          <div id='logotxt'>YOUR LOGO</div>
        </div>
        <div id="menu">
          <ul>
            <li>< FaHome size={12} style={{marginRight:"3px"}}/><a href='#'>Home</a> </li>
            <li><FaUser size={12} style={{marginRight:"3px"}}/><a href='#'>About us</a> </li>
            <li><FaBriefcase size={12} style={{marginRight:"3px"}}/><a href='#'>Work</a> </li>
            <li><FaInfoCircle size={12} style={{marginRight:"3px"}}/><a href='#'>Info</a> </li>
            <li>< FaEnvelope size={12} color='blue' style={{marginRight:"3px"}}/><a href='#'><b style={{ color: "#4a47ce" }}>Contact us</b></a> </li>
          </ul>
        </div>
      </div>
      <div id="slide">
        <div id="content">
           <div id="top"> 
            <h1>
              <Typewriter
              options={{
                strings: ['Creative <br /> Process'],
                autoStart: true,
                loop: true,
                delay:100,
              }}
            />
            </h1>
            
            </div>
           <div id="bottom">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam expedita recusandae  consectetur.</p>
          <br />
          <button onClick={demo}>More Info</button>
           </div>
          
        </div>
        <div id="image">
          <img src='/a.png'></img>
        </div>
      </div>
    </div>






  </>)
}
export default App