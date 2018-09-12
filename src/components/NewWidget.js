import React from 'react'
import './components.css'

class Widgets extends React.Component {
  render() {
    return (
      <div className="col-3 card-3-3 shadow card btn btn-large">
        <h1 className="mt-5"> + </h1>
        <Widget/>
      </div>
      
    )
  }
}

class Widget extends React.Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Widgets