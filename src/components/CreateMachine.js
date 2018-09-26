import React from 'react'
import { observer } from 'mobx-react'

@observer
class CreateMachine extends React.Component {

  addMachine = () => {
    let payload = {
      machineName: this.state.machineName,
      machineType: this.state.machineType
    }
    this.setState({
      machineName: '',
      machineType: 'A'
    })
    this.props.MachineStore.getData = true
    this.props.MachineStore.addMachineToDB(payload)
  }

  constructor(props) {
    super(props)
    this.state = {
      machineName: '',
      machineType: 'A'
    }
  }

  handleMachineName(e) {
    this.setState({
      machineName: e.target.value
    })
  }

  handleMachineType(e) {
    this.setState({
      machineType: e.target.value
    })
  }

  render() {
    return (
      <div className="modal fade ModalCreate" tabIndex="-1" role="dialog" aria-hidden="false" >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h5 className="modal-title">Create Machine</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* <div className="form-group row">
                  <label htmlFor="machineId" className="col-3 col-form-label">
                    Machine ID :
                </label>
                  <div className="col-9">
                    <input
                      name="machineId"
                      type="text"
                      className="form-control"
                      readOnly
                      value={this.state.machineId}
                    />
                  </div>
                </div> */}
                <div className="form-group row">
                  <label htmlFor="machineName" className="col-3 col-form-label">
                    Machine Name :
                </label>
                  <div className="col-9">
                    <input
                      name="machineName"
                      component="input"
                      type="text"
                      className="form-control"
                      required
                      value={this.state.machineName}
                      onChange={this.handleMachineName.bind(this)}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="machineType" className="col-3 col-form-label">
                    Type :
                  </label>
                  <div className="col-9">
                    <select className="custom-select"
                      name="machineType"
                      required
                      onChange={this.handleMachineType.bind(this)}
                    >
                      <option value="A">Type A</option>
                      <option value="B">Type B</option>
                      <option value="C">Type C</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">

                <button type="submit" className="btn btn-secondary"
                  onClick={this.addMachine}
                  data-dismiss="modal" aria-label="Close"
                >
                  Add +
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateMachine
