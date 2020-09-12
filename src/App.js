import React, { useState, useEffect } from 'react';
import generatePassword from './PasswordService';
import './App.css';

function App() {
  const [password, setPassword] = useState("");

  useEffect(() => {
    setPassword(generatePassword());
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{password}</h1>
        {/* Refresh by Cris Dobbins from the Noun Project */}
        <button className="refresh" onClick={() => setPassword(generatePassword())}><span role="img" aria-label="refresh">🔄</span></button>
      </header>
    </div>
  );
}

export default App;
