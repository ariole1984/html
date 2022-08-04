import logo from './logo.svg';
import './App.css';

function App() {
  let count = 0;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My First react App</h1>
        <p>
         You clicked the button {count} times.
        </p>
        <button onClick={() => {
        console.log('I clicked the button');
        count = count + 1;
        }} >Click Me</button>
      </header>
    </div>
  );
}

export default App;
