import React from 'react';
import './App.css';
import Product from './pages/Product';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Product />
      </main>
    </>
  );
}

export default App;
