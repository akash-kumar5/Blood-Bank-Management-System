import React from 'react'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import State from './State';
import ScrollToTop from './ScrollToTop';
import {Form , Button} from	"react-bootstrap"

export default function Register() {
  return (
    <div className='m-auto mt-5 mb-5 p-5 container border border-5'>

      <Form ref={form} onSubmit={sendEmail} className='container-fluid'>	
	<div className=" ">		
			<div className="container-fluid p-5">
			  <h1 className="text-center text-decoration-underline">Register as a Donor</h1>
			  <hr className="text-danger" />
			  </div>
			  </div>
	  
	  
			  <h2>Personal Details</h2>
			  <hr />
			  <div className="row ">
				<div className="col-lg-8 col-md-8 col-sm-12 ">
				  <label for="name">Full Name <sup className="bi bi-star-fill text-danger"></sup></label><br />
				  <input className="form-control" type="text" name='name' placeholder="Please enter your name" />
				</div>
				<div className="col-lg-4 col-md-4 col-sm-12">
				  <label for=""
					>Gender <sup className="bi bi-star-fill text-danger"></sup></label><br />
					<select name="" id="" className="form-control">
						<option value="">Select gender</option>
					  <option value="male">Male</option>
					  <option value="female">female</option>
					  <option value="others">Others</option>
					</select>
				  
				</div>
			


			  <div className="row ">
				<div className="col-lg-4 col-md-6 col-sm-12">
				  <label for="dob"
					>Date of Birth <sup className="bi bi-star-fill text-danger"></sup></label><br />
					<input type="date" name='date' className="text-muted form-control" />
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
				  <label for="blood-group"
					>Blood Group </label>
					<select name="" id="" className="form-control">
					  <option value="#">Select Blood Group</option>
					  <option value="A+">A+</option>
					  <option value="A-">A-</option>
					  <option value="B+">B+</option>
					  <option value="B-">B-</option>
					  <option value="O+">O+</option>
					  <option value="O-">O-</option>
					  <option value="AB+">AB+</option>
					  <option value="AB-">AB-</option>
					  <option value="Not Known">Not Known</option>
					</select>
				</div>
				<div className="col-lg-4 col-md-12 col-sm-12">
				  <label for="aadharNo"
					>Aadhaar Card No. </label><br /><input className="form-control"
					  type="number"
					  maxlength="12"
					  placeholder="Please Enter Aadhaar No."
					  name='adharno'
				  />
				</div>
			  </div>
	  
			  <div className="row ">
				<h2>Contact Details</h2>
				<hr />
				<div className="col-lg-4 col-md-6 col-sm-12">
				  <label for="mobileNo">Mobile No. <sup className="bi bi-star-fill text-danger"></sup></label>
				  <input className="form-control" type="tel" name="number" id="" placeholder="Please enter your number" />
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
				<Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
				<Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
				</div>
			  </div>
	  
			  <div className="row">
				<h2>Location</h2>
				<hr />
				<State />
			  </div>
	  
			  <div className="row ">
				<h2>Donor Specific Information</h2>
				<hr />
				<div className="col-lg-6 col-md-6 col-sm-12">
				  <label for="">Last Date of Donation </label><br /><input type="date" className="text-muted form-control" name="" id=""
				  />
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12">
				  <label for="preference"
					>Preference </label>
					<select name="" id="" className="form-control">
					  <option value="">Select Donation Preference</option>
					  <option value="periodic">Only in 3 months</option>
					  <option value="emergency">Only in Emergency</option>
					</select>
				</div>
				<div className="form-check mt-5">
				  <input className="form-check-input " name='checkbox' type="checkbox" value="" id="flexCheckChecked" checked
				  />
				  <label className="form-check-label " for="flexCheckChecked">
					I agree to be contacted by blood banks.
				  </label>
				</div>
				<Button type="submit" variant="primary" className="btn mt-5 btn-danger p-2 mt-3">Submit</Button>
			  </div>
			
		  <div className="col-3">
			<img src="" alt="" className="img-fluid" />
		  </div>
	   </div>
   </Form>
    </div>
  )
}
