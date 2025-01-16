import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './../CSS/RSA.css';
import copyIcon from './../assets/copy.png';

const RSACalculator = () => {
  const location = useLocation();
  const [step, setStep] = useState(1); // Default step is 1

  // Set step from navigation state if provided
  useEffect(() => {
    if (location.state?.step) {
      setStep(location.state.step);
    }
  }, [location.state]);

  const [prime1, setPrime1] = useState('');
  const [prime2, setPrime2] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [message, setMessage] = useState('');

  // Helper function to check if a number is prime
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Copied to clipboard!'))
      .catch(() => alert('Failed to copy!'));
  };

  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const calculateKeys = () => {
    if (!prime1 || !prime2) {
      alert('Please enter both prime numbers.');
      return;
    }
  
    const p = parseInt(prime1, 10);
    const q = parseInt(prime2, 10);
  
    if (!isPrime(p) || !isPrime(q)) {
      alert('Both numbers must be prime.');
      return;
    }
  
    const n = p * q;
    const phi = (p - 1) * (q - 1);
  
    // Choose e (public key exponent)
    let e = 3;
    while (gcd(e, phi) !== 1 && e < phi) {
      e++;
    }
  
    // Calculate d (private key exponent)
    let d = 1;
    while ((d * e) % phi !== 1) {
      d++;
    }
  
    setPublicKey(`(${e}, ${n})`);
    setPrivateKey(`(${d}, ${n})`);
    setStep(1);
  };
  

  const encryptMessage = () => {
    const [e, n] = publicKey.slice(1, -1).split(', ').map(Number);
    const encrypted = message
      .split('')
      .map((char) => (char.charCodeAt(0) ** e) % n)
      .join(' ');
    setEncryptedMessage(encrypted);
  };

  return (
    <section className="prsection">
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
      <div className="home">
        <h1 className="form-title">RSA Calculator</h1>


        {step === 1 && (
          <div>
            <p>Enter two prime numbers greater than 1.</p>
            <input type="number" placeholder="Prime Number 1 (p)"value={prime1} onChange={(e) => setPrime1(e.target.value)} className="form-input" />
            
            <input type="number" placeholder="Prime Number 2 (q)" value={prime2} onChange={(e) => setPrime2(e.target.value)} className="form-input" />
            
            <button className="form-submit" onClick={calculateKeys}>Generate Keys</button>

            {publicKey && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                <p style={{ margin: 0, flexGrow: 1, textAlign: 'left' }}>Public Key: {publicKey}</p>
                <img src={copyIcon} alt="Copy" style={{ cursor: 'pointer', width: '20px', height: '20px', marginLeft: '10px' }} onClick={() => copyToClipboard(publicKey)} />
              </div>
            )}

            {privateKey && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                <p style={{ margin: 0, flexGrow: 1, textAlign: 'left' }}>Private Key: {privateKey}</p>
                <img src={copyIcon} alt="Copy" style={{ cursor: 'pointer', width: '20px', height: '20px', marginLeft: '10px' }} onClick={() => copyToClipboard(privateKey)} />
              </div>
            )}


            {/* Download Keys Button */}
            {publicKey && privateKey && (
              <div>
                <button
                  className="form-submit"
                  onClick={() => {
                    const keysContent = `Public Key: ${publicKey}\nPrivate Key: ${privateKey}`;
                    const blob = new Blob([keysContent], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'rsa_keys.txt';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Download Keys
                </button>
                </div>
              )}

            <button className="form-submit" onClick={() => setStep(2)}>Next</button>

          </div>
        )}



        {step === 2 && (
          <div>
            <h2>Encrypt a Message</h2>
            
            {/* Input for entering a message */}
            <textarea type="text" placeholder="Enter a message" value={message} onChange={(e) => setMessage(e.target.value)} className="form-input" />

            {/* Input for public key (pre-filled if available) */}
            <input type="text" placeholder="Enter public key (e, n)" value={publicKey} onChange={(e) => setPublicKey(e.target.value)} className="form-input" />

            {/* Encrypt Button */}
            <button className="form-submit" onClick={encryptMessage}>Encrypt</button>

            {/* Read-only textbox to display the encrypted text */}
            {encryptedMessage && (
              <div>
                <h3>Encrypted Text:</h3>
                <textarea value={encryptedMessage} readOnly className="form-input read-only" />
                <button onClick={() => copyToClipboard(encryptedMessage)}>Copy Encrypted Text</button>
              </div>
            )}

            {/* Link for further reading */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              <a href="/" className="learn-more">Home</a>
              <a href="/" className="learn-more">Decrypt a message</a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default RSACalculator;
