import React, { useEffect } from 'react';
import Header from "./components/Header";
import Main from './components/Main';

export default function App() {
  useEffect(() => {
    document.title = 'CyberSurferWeb';
  }, []);

  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}