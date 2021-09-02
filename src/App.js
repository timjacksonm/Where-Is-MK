import React, { useEffect } from 'react';
import './app.css';
import test from './firebase/index';

function App() {
  useEffect(() => {
    test();
  }, []);
  return (
    <div className="app">
      <div>app</div>
    </div>
  );
}

export default App;
