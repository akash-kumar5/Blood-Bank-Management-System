import React from "react";
import State from "./State";
import { Link } from "react-router-dom";

export default function AddBloodBank() {
  return (
    <div className=" m-auto col-lg-10">
      <h1 className="text-danger">Blood Bank Details</h1>
      <form action="" method="post">
      <h3 className="mt-5 p-2">Blood Bank Information</h3>
      <div className="card m-5 mt-0 p-2">
        <h3 className="p-2">Blood Bank Address</h3>
        <State />
      </div>
      <div className="card m-5 mt-0 p-4">
        <h3>Blood Bank Details</h3>
        
        <label for="bbName">Blood Bank Name</label>
        <input className="form-control" type="text" />

        <label for="">Parent Hospital Name</label>
        <input type="text" className="form-control" />

        <label for="">Category</label>
        <select name="" id="" className="col-6 form-control" > 
          <option value="">Govt.</option>
          <option value="">Private</option>
          <option value="">Red Cross</option>
          <option value="">Charitable</option>
        </select>

        <label for="">Contact Person</label>
        <input className="form-control" type="text" />

        <label for="">Email</label>
        <input className="form-control" type="email" />

        <label for="">Contact No.</label>
        <input className="form-control" type="tel" />

        <label for="">Fax No.</label>
        <input className="form-control" type="tel" />

        <label for="">Licence No.</label>
        <input className="form-control" type="text" />

        <label for="">From Date</label>
        <input className="form-control" type="date" />

        <label for="">To Date</label>
        <input className="form-control" type="date" />

        <label for="">Component Facility</label>
        <select name="" id="">
          <option value="">Select Value</option>
          <option value="">YES</option>
          <option value="">NO</option>
        </select>

        <label for="">Apheresis Facility</label>
        <select name="" id="">
          <option value="">Select Value</option>
          <option value="">YES</option>
          <option value="">NO</option>
        </select>
        <label for="">Helpline No.</label>
        <input className="form-control" type="tel" />
      </div>

      <div className="card m-5 mt-0 p-2" >
        <h3>Postal Address</h3>
        <label for="">Address Line 1</label>
        <input className="form-control" type="text" name="" id="" />

        <label for="">Address Line 2</label>
        <input className="form-control" type="text" name="" id="" />

        <label for="">Pincode</label>
        <input className="form-control" type="number" name="" id="" />
      </div>

      <div className="card m-5 mt-0 p-2">
        <label for="">Website</label>
        <input className="form-control" type="url" />
      </div>

      <h3>Donation Information</h3>
      <div className="card m-5 mt-0 p-2">
        <h3>Donor Type</h3>
        <input className=" me-1" type="checkbox" />
        <label for="">Voluntary</label>
        <br />
        <input className=" me-1" type="checkbox" />
        <label for="">Replacement</label>
        <br />
        <input className=" me-1" type="checkbox" />
        <label for="">Directed</label>
        <br />
        <input className=" me-1" type="checkbox"  />
        <label for="">Autologous</label>
        <br />
        <input className=" me-1" type="checkbox" />
        <label for="">Family</label>
        <br />
        <input className=" me-1" type="checkbox" />
        <label for="">Replacement External</label>
      </div>

      <div className="card m-5 mt-0 p-2">
      <h3>Donation Type</h3>
      <input  type="checkbox" className="me-1" />
      <label for="">Leucaperesis</label>
      <br />
      <input type="checkbox" className="me-1" />
      <label for="">Plasmapheresis</label>
      <br />
      <input  type="checkbox" className="me-1" />
      <label for="">Plateletpheresis</label>
      <br />
      <input  type="checkbox" className="me-1" />
      <label for="">Whole Blood</label>
      </div>    

      <div className="card m-5 mt-0 p-2 ">
      <h3>Component Type</h3>
      <input className=" me-1" type="checkbox" />
      <label for="">Cryo Poor Plasma</label>
      <br />
      </div>  
      <button type="submit" className=" btn btn-danger btn-lg ps-5 pe-5 m-5 me-2 mt-2 ">Save</button>
      <button className="btn btn-secondary btn-lg ps-5 pe-5 m-5 me-2 mt-2 "><Link to="/" className="text-decoration-none text-light">Cancel</Link></button>
      </form>  
    </div>
  );
}
