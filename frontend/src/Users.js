import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const Users = function () {
  const [data, setData] = useState([])
  const [mode, setMode] = useState("online")
  useEffect(() => {
    let url = "http://localhost:4000/getdata"
    fetch(url)
    .then((response) => {
      response.json().then((result) => {
        console.log("result => ", result);
        setData(result)
        localStorage.setItem("users",JSON.stringify(result))
      })
    })
    .catch(err =>{
      let collection = localStorage.getItem("users")
      setData(JSON.parse(collection))
      setMode('offline')
    })
  }, [])

  return (
    <div>
      <div>
        {
          mode === 'offline' ? <div class="alert alert-warning" role="alert">You are in offline mode!!</div> : null
        }
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>EmailId</th>
            <th>Phone No.</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address.city}</td>
            </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Users