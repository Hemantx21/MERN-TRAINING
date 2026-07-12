import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
const App = () => {
const data=[
  {
  srno:1,
  name:"Hemant",
  email:"hemant@gmail.com",
  mobile:8976543210
},
  {
  srno:2,
  name:"Rahul",
  email:"Rahul@fmail.com@gmail.com",
  mobile:9765432108
}
]

return(
  <>
   <div className="row ">
    <div className="col-sm-3"></div>
    <div className="col-sm-6">
      <h1 className='text-center'>#WelcomeTo<span className='text-danger'>EmergingWorld</span></h1>
      <table className='table mt-3'>
        <thead className='table-dark'>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return(<>
            <tr><td>{item.srno}</td><td>{item.no}</td><td>{item.email}</td><td>{item.mobile}</td></tr>

            </>)
        }
      }
         </tbody>
      </table>
    </div>
    <div className="col-sm-3"></div>
   </div>
  </>
)

}
export default App















// const App = () => {
//   let a= false;
//   if (a){
//     return <h1>You are Login</h1>
//   }
//   else{
//     return <h1>you are not login</h1>
//   }

// }















// const App = () => {
//   let age =18;
// return(<> {age >=18?<h1>You can vote</h1>:<h1>You can't vote</h1>}</>)
// }





// const App = () => {
//   let a=22
//   return(<>
//   <h1>{a>20 && <h1> a is greater than 20</h1>}</h1>
//   </>)
// }



//  <div className='btn btn-info m-3'> Button</div>

  
// <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">
//       Navbar
//     </a>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//             Link
//           </a>
//         </li>
//         <li className="nav-item dropdown">
//           <a
//             className="nav-link dropdown-toggle"
//             href="#"
//             role="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             Dropdown
//           </a>
//           <ul className="dropdown-menu">
//             <li>
//               <a className="dropdown-item" href="#">
//                 Action
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//             </li>
//             <li>
//               <hr className="dropdown-divider" />
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" aria-disabled="true">
//             Disabled
//           </a>
//         </li>
//       </ul>
//       <form className="d-flex" role="search">
//         <input
//           className="form-control me-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//         />
//         <button className="btn btn-outline-success" type="submit">
//           Search
//         </button>
//       </form>
//     </div>
//   </div>
// </nav>
// <hr/>
// <div id="carouselExample" className="carousel slide">
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src="favicon.svg" className="d-block w-100 h-5" alt="..." />
//     </div>
//     <div className="carousel-item">
//       <img src="icons.svg" className="d-block w-100" alt="..." />
//     </div>
//     <div className="carousel-item">
//       <img src="favicon.svg" className="d-block w-100" alt="..." />
//     </div>
//   </div>
//   <button
//     className="carousel-control-prev"
//     type="button"
//     data-bs-target="#carouselExample"
//     data-bs-slide="prev"
//   >
//     <span className="carousel-control-prev-icon" aria-hidden="true" />
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button
//     className="carousel-control-next"
//     type="button"
//     data-bs-target="#carouselExample"
//     data-bs-slide="next"
//   >
//     <span className="carousel-control-next-icon" aria-hidden="true" />
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
