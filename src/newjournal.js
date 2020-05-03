import React from 'react';
import './App.css';

function NewJournals() {
  return (
    <div>
    <div>What's in your mind today ? </div>
    <form>
  <div classNameName="form-group">
    <label for="exampleFormControlInput1">Short Description</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Something to remember"></input>
  </div>
  <div>
      <input type="date"></input>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Tell in detail</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
  </div>
  <div className="col-auto">
      <button type="submit" className="btn btn-primary mb-2">Submit</button>
    </div>
</form></div>
  );
}

export default NewJournals;