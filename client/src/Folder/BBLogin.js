import React from "react";
import { Link } from "react-router-dom";

export default function BloodBankLogin(){
    return(
        <div className="container-fluid form-control mb-5 mt-5 card-body">
            <h1 className="text-danger mt-5 text-center">Blood Bank Login</h1>

            <div className="row m-auto">
    <div className="col-sm-8 m-auto">
      <div className="form-control mt-5 p-3 m-auto">
        <div className="card-body">

          <form action="/login" method="POST">
            <div className="form-group">
              <label for="userName">User Name</label>
              <input type="text" className="form-control" name="username" placeholder="Enter User Name"/>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" name="password" placeholder="Enter Password"></input>
            </div>
            <button type="submit" className="btn btn-secondary homeBtn form-control mt-5" >Login</button>
            <p><Link to='/' className="text-danger">Forget Password?</Link></p>
          </form>
          
        </div>
        
      </div>  
      <p className="text-center "><Link to="/" className="text-decoration-none text-secondary">Home</Link></p>
    </div>
    </div>
        </div>
    );
}