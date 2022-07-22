import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  // const [name, setName] = useState(null)
  // const [username, setUsername] = useState(null)
  // const [email, setEmail] = useState(null)
  // const [address, setAddress] = useState(null)
  // const [phone, setPhone] = useState(null)
  const navigate = useNavigate()

  const data = {
    name : "",
    username : "",
    email : "",
    address : "",
    phone : 0,
  }

  const handleSubmit = () => {
    //fetch.post("http://localhost:4000/adddata", name, username, email, address, phone)
    axios.post("http://localhost:4000/adddata",data)
      .then(console.log("Successfully!!", data))
      .catch(console.log("Somthing went wrong!!"))
    alert("Register Successfully!!");
    navigate("#");
  }

  return (
    <div>
      <form className="control">
        <h1>Insert Data</h1><br />
        <div className="form-group">
          <label>Name :</label>
          <input type="text" className="form-control" id="name"  onChange={(e) => {data.name = e.target.value}} placeholder="Enter name" />
        </div><br />

        <div class="form-group">
          <label>Username :</label>
          <input type="text" className="form-control" id="username"  onChange={(e) => (data.username = e.target.value)} placeholder="Enter username" />
        </div><br />

        <div class="form-group">
          <label>Email :</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => (data.email = e.target.value)} placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div><br />

        <div class="form-group">
          <label>Address :</label>
          <input type="text" className="form-control" id="address" onChange={(e) => (data.address = e.target.value)} placeholder="Enter address" />
        </div><br />

        <div class="form-group">
          <label>MobileNo. :</label>
          <input type="number" className="form-control" id="phone" onChange={(e) => (data.phone = e.target.value)} placeholder="Enter mobile number" />
        </div><br />

        <button type="submit" className="btn btn-primary" onClick={() => handleSubmit()}>Add Data</button>
      </form>

    </div>
  )
}

export default Home