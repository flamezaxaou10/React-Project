import React from 'react'
import { Link } from 'react-router-dom'

class Machine extends React.Component {
  render() {
    let machineId = this.props.machine.machineId
    let machineName = this.props.machine.machineName
    let machineType = this.props.machine.machineType
    return (
      <div className="card col-lg-3 col-md-4 col-sm-6 m-2">
        <Link to={`/Type`+ machineType +`/` + machineId} className="card-link">
          <img className="card-img-top p-2" src="" alt="" />
          <div className="card-body">
            <h4 className="card-title">{machineName}: {machineType}</h4>
          </div>
        </Link>
      </div>
    )
  }
}



export default Machine