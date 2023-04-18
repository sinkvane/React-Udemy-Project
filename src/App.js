import './App.css';

function Test({name, surname, link}) { //мы сразу деструктурируем объект пропса на нужные нам свойства
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  )
}


function App() {
  return (
    <div className='App'>
      <Test/>
    </div>
  );
}

export default App;
