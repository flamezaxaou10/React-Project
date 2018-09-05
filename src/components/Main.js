import React from 'react'
//import PropTypes from 'prop-types'
import MachineStore from '../store/MachineStore'
import ButtonAdd from './ButtonAdd'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listMachine: MachineStore.listMachine
    }
  }

  newRender = () => {
    this.setState({
      listMachine: MachineStore.listMachine
    })
  }


  render() {
    return (
      <div className="Main">
        <h3 className="text-white">Dashboard</h3>
        <div className="row justify-content-center">
          {this.state.listMachine}
          <ButtonAdd callback={this.newRender} MachineStore={MachineStore} />
        </div>
      </div>
    )
  }
}



export default Main