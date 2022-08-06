import React, { useEffect } from 'react';
import Header from "./components/Header";
import Main from './components/Main';
import Footer from "./components/Footer";

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