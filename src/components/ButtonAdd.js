import React from 'react'
import circleadd from '../assets/circleadd.png'
import '../components/components.css'
// import CreateMachine from './CreateMachine'

class ButtonAdd extends React.Component {
  render() {
    return (
      <div className="ButtonAdd">
        <p id="ButtonAdd">
          <button type="button" className="btn btn-secondary p-0 shadow rounded-circle"
            data-toggle="modal" data-target=".ModalCreate" >
            <img width="60px" src={circleadd} alt="" />
          </button>
        </p>
        
      </div>
    )
  }
}


export default ButtonAdd