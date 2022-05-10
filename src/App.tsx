import React from 'react';
import './App.css';
import ProductPage from './pages/Product/Product.page';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <ProductPage />
      </main>
    </>
  );
}

export default App;
