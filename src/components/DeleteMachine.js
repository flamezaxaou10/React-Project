import React from 'react'
import MachineStore from '../store/MachineStore'

class DeleteMachine extends React.Component {
  render () {
    MachineStore.delMachineToDB(this.props.match.params.machineId)
    return window.location = "http://localhost:3000"
  }
}

export default DeleteMachine