import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import PFTest from './PFTest/index.js';
import { useState } from 'react';

const defaultName = 'Krille'
const defaultProfession = 'Coder'

function App() {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');

  const [HWname, setHWname] = useState(defaultName);
  const [HWprofession, setHWprofession] = useState(defaultProfession);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    //alert(`Name posted: "${name}"`)
    console.log("Submit button pressed: " + name)
    setHWname(name);
    setHWprofession(profession);
    setName('');
    setProfession('');
  }

  /* [{name: 'Krille', profession: 'Coder'},{...},...]
  */
  console.log("Hello from App")
  return (
    <div className="App-header">
      {/* <Welcome name="Sara" />; */}

      <HelloWorld HWname={HWname} profession={HWprofession} />
      <PFTest profession={profession}
        setProfession={setProfession}
        name={name}
        setName={setName}
        handleSubmit={handleSubmit} />
      <p className="App">Tjaba!</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
