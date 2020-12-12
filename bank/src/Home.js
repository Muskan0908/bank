import React from 'react';
import './style.css';
import imgs from '/home/muskan/ReactJs/bankingSystem/bank/src/images/bg.jpg';
const Home =()=>{
  return(
    <div className="home" id="res">
      <div className="home-top">
      <br/>
        <h1>Welcome to our bank!</h1>
      </div>
      <img className="home-bottom" src={imgs} alt="Bank"/>

        </div>
    );
  }
export default Home;
