import React from 'react'
import MachineStore from '../store/MachineStore'

class TypeB extends React.Component {

  render() {
    let machineId = this.props.match.params.machineId
    let machines = MachineStore.machines
    let machine = machines.filter((machine) =>
      machine.machineId === parseFloat(machineId)
    )
    return (
      <div className="TypeB text-white justify-content-center">
        <div className="row">
          <div className="col-4">
            <h4>Machine ID : {machineId}</h4>
          </div>
          <div className="col-4">
            <h4>Machine Name : {machine[0].machineName}</h4>
          </div>
          <div className="col-4">
            <h4>Machine Type : {machine[0].machineType}</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default TypeB 