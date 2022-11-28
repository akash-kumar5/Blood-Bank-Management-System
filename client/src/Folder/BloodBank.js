import React from 'react'
import State from './State'

export default function BloodBank() {
  return (
    <div className=' m-5 p-5'>
      
    <form action="" method="get" className="m-5">
        <h3 className="text-center">Find Blood Banks</h3><hr className="border-1 text-danger" />
        <br />
        <div className="row m-5">
            <div className="col-lg-4">
                <State />
        </div>
        <div className="d- flex m-5">
            <button className="btn btn-danger m-auto" type="submit">Search</button>
        </div>
        </div>
    </form>
    </div>
  )
}
