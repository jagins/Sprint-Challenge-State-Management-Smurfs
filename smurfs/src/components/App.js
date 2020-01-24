import React, { Component } from "react";
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';
import Smurf from '../components/Smurf';
import "./App.css";

function App(props) {
  const {isLoading, smurfArray, error, getSmurfs} = props;

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      {!isLoading ?  <button onClick={getSmurfs}>Get Smurfs</button> : <button disabled>Loading...</button>}

      {!isLoading && smurfArray && (
        <div className='container'>
          {smurfArray.map(smurf => 
            <Smurf 
              key={smurf.id}
              name={smurf.name}
              age={smurf.age}
              height={smurf.height}/>
              )}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state =>
{
  return {
    isLoading: state.isLoading,
    smurfArray: state.smurfArray,
    error: state.error
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
