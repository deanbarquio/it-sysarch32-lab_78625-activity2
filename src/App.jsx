import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content'; // Assuming Content component contains the logic to display multiple Student components

function App() {
  return (
    <>
      <Header />
      <Content /> {/* Display multiple Student components */}
      <Footer />
    </>
  );
}

export default App;
