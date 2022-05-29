import React from 'react';
import './App.css';
import hero from './images/hero-desktop.jpg';
import logo from "./images/logo.svg";
import arrow from "./images/icon-arrow.svg";
import error from "./images/icon-error.svg";

class App extends React.Component {
  state = {  } 

  _isValidEmail(params){
    console.log(params);
    let form = params.target.parentNode;
    console.log(form);
    let input = document.getElementById('email-input');
    console.log(input.value);
    let regex = RegExp(/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{2,3}/)
    if(input.value.match(regex)){
      form.classList.remove('error');
      form.submit();
      console.log("regex");
    }else if(input.value === ""){
      form.classList.add('error');
      console.log(null);
    }else{
      form.classList.add('error');
    }
  }

  render() { 
    return (
      <div className='main'>
        <div className='header'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='image'>
          <img src={hero} alt="Women" />
        </div>
        <div className='content'>
          <h1><span>We're</span> coming <span>soon</span></h1>
          <p>
            Hello fellow shoppers! We're currently building our new fashion store. 
            Add your email below to stay up-to-date with announcements and our launch deals.
          </p>
          <form action='/'>
            <input type="email" id='email-input' placeholder='Email Address'/>
            <img className='errorLogo' src={error} alt="Error" />
            <button onClick={this._isValidEmail} type="button"><img src={arrow} alt="Arrow" /></button>
          </form>
          
        </div>
      </div>
    );
  }
}
 
export default App;
