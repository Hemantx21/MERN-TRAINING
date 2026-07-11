import React from 'react'
import Swal from 'sweetalert2'
import Typewriter from 'typewriter-effect';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const App = () => {
 const demo=()=>
 {
    Swal.fire({
  title: "Data!",
  text: "Data Saved Successfully",
  icon: "success"
  });
 }
 const demo1=()=>
 {
    Swal.fire({
  title: "Registration",
  text: "Something went wrong",
  icon: "error"
  });
 }
 const demo2=()=>
 {
    Swal.fire({
  title: "Information",
  text: "This is information message",
  icon: "info"
  });
 }
 const demo3=()=>
 {
    Swal.fire({
  title: "Registration",
  text: "Please check your input!",
  icon: "warning"
  });
 }
 const demo4=()=>
 {
    Swal.fire({
  title: "Question Alert",
  text: "Are you sure you want to continue",
  icon: "question"
  });
 }


  return (
  <>
  <h1>sweetalert2</h1>
  <button onClick={demo}> Task2</button> <br/>
  <button onClick={demo1}> Task3</button><br/>
  <button onClick={demo2}> Task4</button><br/>
  <button onClick={demo3}> Task5</button><br/>
  <button onClick={demo4}> Task6</button><br/>
  <hr/>
  <h1>typewriter-effect</h1>
  <div>
    <Typewriter
  options={{
    strings: ['Welcome to React'],
    autoStart: true,
    loop: true,
  }}
/>
  </div>
  <br/>
<br/>
  <div>
    <Typewriter
  options={{
    strings: ['Hemant Singh'],
    autoStart: true,
    loop: true,
  }}
/>
  </div>

<br/>
<br/>
  <div><Typewriter
  options={{
    strings: ["Hello, Students! <br/>Learning React is fun!"],
    autoStart: true,
    loop: true,
  }}
/></div>
<br/>
<br/>
  <div><Typewriter
  options={{
    strings: ['<h1> This is heading tag</h1>'],
    autoStart: true,
    loop: true,
    delay:75
  }}
/></div>
<br/>
<br/>
<hr/>
<h1>REACT ICONS </h1>
<FaHome size={40}/><br/><br/>
<FaUser size={40}/>
<FaEnvelope size={40}/>
<FaPhone size={40} /><br/><br/>
<FaFacebook size={40}/>
<FaInstagram size={40} />
<FaTwitter size={40} />
<br/><br/>

<button>
  <FaDownload />
  Download
</button>


  </>
  )
}

export default App