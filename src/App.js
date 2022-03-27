import React from 'react';
import Characters from './componets/Characters';
import Header from './componets/Header';
import "./main.scss";
import "./componets/header.css"
import Footer from './componets/Footer';

function App() {
  return (
    <>
      <Header
         title="Rick and Morty API"
         description= "This is a proyect that show character of Rick and Morty Series"
      />
      <Characters/>
      <Footer/>
    </>
  );
}

export default App;
