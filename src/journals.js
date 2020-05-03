import React, {useState} from 'react';
import './App.css';


function Journals() {
    const [journal, setJournal] = useState([{
        title:"today was very happy",
        description:"it has been an wondeful day for me"
    },{
        title:"today was very happy",
        description:"it has been an wondeful day for me"
    }])
  return (
    <div><div>welcome to your journals </div>

<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">{journal[0].title}</h5>
      <p class="card-text">{journal[0].description}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
    </div>
  );
}

export default Journals;