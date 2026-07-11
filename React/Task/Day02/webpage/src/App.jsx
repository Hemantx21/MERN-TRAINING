import './App.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const App = () => {
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
          <h1>Creative <br /> Process</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam expedita recusandae  consectetur.</p>
          <br />
          <button>More Info</button>
        </div>
        <div id="image">
          <img src='/a.png'></img>
        </div>
      </div>
    </div>






  </>)
}
export default App