import React from "react";
import { connect } from 'react-redux';
import { getSmurfs, addSmurfs } from '../actions';
import Smurf from '../components/Smurf';
import Form from '../components/Form';
import "./App.css";

function App(props) {
  const { isLoading, smurfArray, error, getSmurfs, begin, addSmurfs } = props;

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Click the button to populate the list</div>
      <div>Then you can add your own Smufs to the list</div>
      <div>Have fun!</div>

      {!isLoading && !begin ?  <button onClick={getSmurfs}>Enter Smurf Village</button> : ''}

      <div className='container'>
        {!isLoading && smurfArray && (
          smurfArray.map(smurf =>
            <Smurf 
              key={smurf.id} 
              name={smurf.name} 
              height={smurf.height}/>)
        )} 
        {!isLoading && begin && (
          <div className='form-section'>
            <h3>Add your own Smurfs</h3>
            <Form addSmurfs={addSmurfs} isLoading={isLoading}/> 
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfArray: state.smurfArray,
    error: state.error,
    begin: state.begin
  }
}

export default connect(mapStateToProps, { getSmurfs, addSmurfs })(App);
