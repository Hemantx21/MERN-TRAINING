import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { users, products, employees, orders, students, customers, invoices, tasks, payments, attendance } from "./task_data.js";

const App = () => {
  return (<>
    <div className="row">
      <div className="col-sm-2"></div>
      <div className="col-sm-8">
        <h1 className='text-center'>User (Task01)</h1>
        <table className='table'>
          <thead className='table-dark'>
            <tr>
              <th>ID</th>
              <th> Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (<>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>{item.status}</td>
                </tr>


              </>)
            })
            }
          </tbody>
        </table>
        <hr />
         <h1 className='text-center'> Products (Task02)</h1>
        <table  className='table'>
         
          <thead className='table-dark'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th> Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item)=>{
              return(<>
              <tr> 
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                </tr>

              </>)
              
            })
          }
          </tbody>
        </table>
  <hr/>
  <h1 className='text-center'>Employee (Task03)</h1>
  <table className='table'>
    <thead className='table-dark'>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Department</th>
        <th>Salary</th>
        <th>City</th>
      </tr>
    </thead>
    <tbody>
      {employees.map((item)=>{
        return(<>
        <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.department}</td>
        <td>{item.salary}</td>
        <td>{item.city}</td>
      </tr>
        
        
        </>)
      })
    }
      
    </tbody>
  </table>
  <hr/>
    <h1 className='text-center'>Orders (Task04)</h1>
  <table className='table'>
    <thead className='table-dark'>
      <tr>
        <th>Order ID</th>
        <th>Customer</th>
        <th>Amount</th>
        <th>Payment</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        orders.map((item)=>{
          return(<>
          
          <tr>
            <td>{item.orderId}</td>
            <td>{item.customer}</td>
            <td>{item.amount}</td>
            <td>{item.payment}</td>
            <td>{item.status}</td>
          </tr>
          
          </>)
        })
      }
    </tbody>
  </table>
  <hr/>
  <h1 className='text-center'>Students (Task05)</h1>
  <table className='table'>
    <thead className='table-dark'>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Class</th>
        <th>Marks</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      {
        students.map((item=>{
          return(<>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.class}</td>
            <td>{item.marks}</td>
            <td>{item.grade}</td>
          </tr>
          </>)
        }))
      }
    </tbody>
  </table>
  <hr/>
  <h1 className="text-center">Customers (Task06)</h1>
  <table className='table'>
    <thead className='table-dark'>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>phone</th>
        <th>City</th>
        <th>Loyalty</th>
      </tr>
    </thead>
    <tbody>
      {customers.map((item)=>{
        return(<>
        <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.city}</td>
        <td>{item.loyalty}</td>
      </tr>
        </>)
      })
}
      </tbody>
  </table>
  <hr/>
  <h1 className='text-center'>Invoices (task07)</h1>
  <table className="table">
    <thead className="table-dark">
      <tr>
        <td>Invoice No</td>
        <td>Client</td>
        <td>Total</td>
        <td>Due Date</td>
        <td>Status</td>
      </tr>
    </thead>
    <tbody>
      {
        invoices.map((item)=>(
          <tr>
            <td>{item.invoiceNo}</td>
            <td>{item.client}</td>
            <td>{item.total}</td>
            <td>{item.dueDate}</td>
            <td>{item.status}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
  <hr />
  <h1 className="text-center">tasks (task08)</h1>
  <table className="table">
    <thead className="table-dark">
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Priority</th>
        <th>Assignee</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        tasks.map((item)=>{
          return(<>
          <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.priority}</td>
            <td>{item.assignee}</td>
            <td>{item.status}</td>
          </tr>
          </>)
        })
      }
    </tbody>
  </table>
  <hr />
  <h1 className="text-center">Payments (task09)</h1>
  <table className="table">
    <thead className="table-dark">
      <tr>
        <th>ID</th>
        <th>Player</th>
        <th>Method</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
     { payments.map((item)=>{
        return(<>
        <tr>
          <td>{item.id}</td>
          <td>{item.player}</td>
          <td>{item.method}</td>
          <td>{item.amount}</td>
          <td>{item.status}</td>
        </tr>
        </>)
      })
    }
    </tbody>
  </table>
  <hr/>
  <h1 className="text-center">Attendance (Task10)</h1>
  <table className="table">
    <thead className="table-dark">
      <tr>
        <th>ID</th>
        <th>Employee</th>
        <th>Date</th>
        <th>Check In</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        attendance.map((item)=>{
          return (<>
          <tr>
            <td>{item.id}</td>
            <td>{item.employee}</td>
            <td>{item.date}</td>
            <td>{item.checkIn}</td>
            <td>{item.status}</td>
          </tr>
          </>)
        })
      }
    </tbody>
  </table>
      </div>
      <div className="col-sm-2"></div>
    </div>

  </>)
}

export default App