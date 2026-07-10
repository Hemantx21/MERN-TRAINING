import img from "./assets/2.jpg"
import "./App.css"
const App =()=>{
    const styles={
        color:"yellow",
        background:"aqua",
        fontSize:"20px",
        textAlign:"center"
    }
return(<>
<img src="/bg.jpg" height={400} width={400} />{/*Task1*/}
<img src={img} height={400} width={400}  />{/*Task2*/}
<h1 style={{color:"blue",background:"lightblue",fontSize:"20px"}}>Hemant Singh</h1>
<h2 style={styles}>Buddha Institute of Technology</h2>
<h3 className="a">Gida Gorakhpur</h3>
</>)}
export default App;