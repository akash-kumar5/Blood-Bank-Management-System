import React from 'react';
import { Link } from 'react-router-dom';

export default function Feedback() {
  return (
    <div>
  <div id="feedback-form-wrapper">
    <div id="floating-icon">
      <button type="button" className="btn btn-danger btn-sm rounded-0" data-toggle="modal" data-target="#feedback-form-modal">
        <Link to="/FbForm.js" className='text-decoration-none text-light'>Feedback</Link>
      </button>
    </div>
  </div>
      </div>
  )
}
