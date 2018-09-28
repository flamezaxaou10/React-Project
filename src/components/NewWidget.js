import React from 'react'
import './components.css'
import circleadd from '../assets/circleadd.png'
import FormGauge from '../components/FormWidgets/FormGauge'
import FormProgress from '../components/FormWidgets/FormProgress'
import FormCardBox from '../components/FormWidgets/FormCardBox'
import FormGaugeSpeed from '../components/FormWidgets/FormGaugeSpeed'
import FormProgressBar from '../components/FormWidgets/FormProgressBar'
import FormText from '../components/FormWidgets/FormText'
import FormImage from '../components/FormWidgets/FormImage'
import FormChart from '../components/FormWidgets/FormChart'
import FormList from '../components/FormWidgets/FormList'

class NewWidget extends React.Component {
  render() {
    return (
      <div className="row text-body">
        <button className="btn btn-secondary p-0 shadow rounded-circle" id="ButtonAdd"
          data-toggle="modal" data-target=".NewWidget" >
          <img width="60px" src={circleadd} alt="" />
        </button>
        <AddWidget machineId={this.props.machineId} />
      </div>
    )
  }
}


class AddWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'Gauge'
    }
  }

  handleSelected(e) {
    this.setState({
      selected: e.target.value
    })
  }

  render() {
    const selected = this.state.selected
    return (
      <div className="modal fade NewWidget" tabIndex="-1" role="dialog" aria-hidden="false" >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5>New Widget</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group row">
                <label htmlFor="machineType" className="col-3 col-form-label">
                  Type :
                  </label>
                <div className="col-9">
                  <select className="custom-select"
                    name="widgetType"
                    onChange={this.handleSelected.bind(this)}
                  >
                    <option value="Gauge">Gauge</option>
                    <option value="GaugeSpeed">Gauge Speed</option>
                    <option value="Progress">Progress</option>
                    <option value="ProgressBar">Progress Bar</option>
                    <option value="CardBox">Card Box</option>
                    <option value="Text">Text</option>
                    <option value="Image">Image</option>
                    <option value="Chart">Chart</option>
                    <option value="List">List</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <FormSelected Selected={selected} machineId={this.props.machineId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class FormSelected extends React.Component {
  render() {
    switch (this.props.Selected) {
      case 'Gauge':
        return <FormGauge machineId={this.props.machineId} />
      case 'Progress':
        return <FormProgress machineId={this.props.machineId} />
      case 'CardBox':
        return <FormCardBox machineId={this.props.machineId} />
      case 'GaugeSpeed':
        return <FormGaugeSpeed machineId={this.props.machineId} />
      case 'ProgressBar':
        return <FormProgressBar machineId={this.props.machineId} />
      case 'Text':
        return <FormText machineId={this.props.machineId} />
      case 'Image':
        return <FormImage machineId={this.props.machineId} />
      case 'Chart':
        return <FormChart machineId={this.props.machineId} />
      case 'List':
        return <FormList machineId={this.props.machineId} />
      default:
        return <h2>Error</h2>
    }
  }
}


export default NewWidget