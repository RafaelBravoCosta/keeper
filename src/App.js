import React from "react";
import "./styles/style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";

function App() {

  return (
    <div>
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;

// inputs to create our notes
// note component
// store our notes in an array and manage them with state
// be able to delete notes
// pick a color for our notes
// edit our notes
// pinn main notes
// change the order of the notes
