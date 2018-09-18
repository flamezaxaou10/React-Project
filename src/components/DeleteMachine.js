import React from 'react'
import MachineStore from '../store/MachineStore'
import { Redirect } from 'react-router-dom'

class DeleteMachine extends React.Component {
  render () {
    MachineStore.delMachineToDB(this.props.match.params.machineId)
    return <Redirect to='/' />
  }
}

export default DeleteMachine