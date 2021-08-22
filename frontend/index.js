import React from 'react';
import ReactDOM from 'react-dom'

function App(){
  return <h1>Hello World From React-Rollup</h1>;
}
export default App;


const domContainer = document.querySelector('#root');

ReactDOM.render(<App></App>, domContainer);