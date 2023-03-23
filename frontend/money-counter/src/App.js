import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Lesson from "./components/Lesson"
import React from "react";
import axios from "axios";


class App extends React.Component {
      render () {
        return(
          <div>
            <Header />
            <p>Data from django</p>
            <div>
            <Lesson />
          </div>
        <Footer />
        </div>
        )
      }
  }


export default App;
