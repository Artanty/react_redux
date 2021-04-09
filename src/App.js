import logo from './logo.svg';
import './App.css';

import React from "react";
import Field from './components/field';
import Languages from './components/languages';
import Translate from './components/translate';

function App() {
  return ( 
    <div>
      <Field/>
      <Languages/>
      <hr />
      <Translate/>
    </div>
  );
}

export default App;
