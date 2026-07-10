import './App.css'
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
            <li><a href='#'>Home</a> </li>
            <li><a href='#'>About us</a> </li>
            <li><a href='#'>Work</a> </li>
            <li><a href='#'>Info</a> </li>
            <li><a href='#'><b style={{ color: "#4a47ce" }}>Contact us</b></a> </li>
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