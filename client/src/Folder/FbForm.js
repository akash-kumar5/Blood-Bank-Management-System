import React from 'react'
import { Link } from 'react-router-dom'

export default function FbForm() {

  function display(){
    alert("Your feedback has been submitted.")
    window.location = "/";
    
  }
  return (
    <div className=' m-5 m-auto p-5 container-fluid'>
       <div id="feedback-form-modal form-control m-auto p-5 border">
              <form>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">How likely you would like to recommand us to your friends?</label>
                  <div className="rating-input-wrapper d-flex justify-content-between mt-2 ">
                    <label><input className='form-control' type="radio" name="rating" />1</label>
                    <label><input className='form-control' type="radio" name="rating" />2</label>
                    <label><input className='form-control' type="radio" name="rating" />3</label>
                    <label><input className='form-control' type="radio" name="rating" />4</label>
                    <label><input className='form-control' type="radio" name="rating" />5</label>
                    <label><input className='form-control' type="radio" name="rating" />6</label>
                    <label><input className='form-control' type="radio" name="rating" />7</label>
                    <label><input className='form-control' type="radio" name="rating" />8</label>
                    <label><input className='form-control' type="radio" name="rating" />9</label>
                    <label><input className='form-control' type="radio" name="rating" />10</label>
                  </div>
                  <div className="rating-labels d-flex justify-content-between mt-2">
                    <label>Very unlikely</label>
                    <label>Very likely</label>
                  </div>
                </div>
                <div className="form-group form-control mt-5 mb-5">
                  <label for="input className='form-control'-one">What difficulties did you faced?</label>
                  <input className='form-control' type="text" id="input className='form-control'-one" placeholder="" />
                </div>
                <div className="form-group mt-5 mb-5">
                  <label for="input className='form-control'-two">Would you like to say something?</label>
                  <textarea className="form-control" id="input className='form-control'-two" rows="3"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer form-control ">
              <button type="button" className="btn btn-secondary m-auto col-4"><Link to="/" className="text-decoration-none text-light" >Close</Link></button>
            <button type="button" className="btn btn-danger p-2 m-auto col-4" onClick={display}>Submit</button>
            </div>
          </div>
        
  )
}
