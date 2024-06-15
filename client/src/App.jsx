import { Component } from "react";

import {BrowserRouter as Routes, Route} from "react-router-dom";

import MainLayout from "./components/Layout/HomePage";
import Header from "./components/Layout/Header";

class App extends Component{
  render(){
    return(
      <div className="app-container">
          <Header/>
      </div>
    );
  }
}



export default App;
