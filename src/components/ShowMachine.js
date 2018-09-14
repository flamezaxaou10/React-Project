import React from 'react'
import NewWidgets from './NewWidget'


class ShowMachine extends React.Component {
  render() {
    let machineId = this.props.match.params.machineId
    return (
      <div className="ShowMachine text-white justify-content-center">
        <div className="row">
          <div className="col-4">
            <h4>Machine ID : {machineId}</h4>
          </div>
          <div className="col-4">
            <h4>Machine Name : </h4>
          </div>
          <div className="col-4">
            <h4>Machine Type : </h4>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="row">
          <div className="col-3">
            
          </div>
        </div>
        <NewWidgets />
      </div>
    )
  }
}

export default ShowMachine