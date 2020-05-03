import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Journals from "./journals";
import NewJournals from "./newjournal"
if(document.location.pathname.includes("/journals")){
  ReactDOM.render(
    <React.StrictMode>
      <Journals />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
if(document.location.pathname.includes("home")  ){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
if(document.location.pathname.includes("newjournals")){
  ReactDOM.render(
    <React.StrictMode>
      <NewJournals />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
if(document.location.pathname.includes("explore")){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
