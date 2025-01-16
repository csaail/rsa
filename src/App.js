import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RSAHome from './JS/RSAHome';
import Decryption from './JS/decryption';
import Encrypt from './JS/encryption'; // Import the Encrypt component
import RSACalculator from './JS/Calculator';

const App = () => {
  const [resultData, setResultData] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Route for RSAHome */}
        <Route path="/" element={<RSAHome setResultData={setResultData} />} />

        {/* Route for Decryption */}
        <Route path="/result" element={<Decryption resultData={resultData} />} />

        {/* Route for Encrypt1 */}
        <Route path="/encryption" element={<Encrypt />} />
        
        <Route path="/calculator" element={<RSACalculator />} />
      </Routes>
    </Router>
  );
};

export default App;
