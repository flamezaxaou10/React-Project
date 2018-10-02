import React, { Component } from 'react'
import './App.css'
import Routing from './routes'
import Header from './components/Header'
//import NETPIEMicrogear from './store/NETPIEMicrogear'
class App extends Component {

  
  render() {
    return (
      <div className="App bg-dark">
        <Header />
        <div className="container justify-content-center">
          <Routing />
        </div>
      </div>
    )
  }
}

export default App
