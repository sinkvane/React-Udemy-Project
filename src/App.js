import { Component } from 'react';
import './App.css';


class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styledField = {
      width: '300px'
    };
    return <input
      placeholder={holder}
      type='text'
      style={styledField} />
  }
}

function App() {
  return (
    <div className='App'>
      <Field/>
    </div>
  );
}

export default App;
