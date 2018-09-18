import React from 'react'
import './components.css'
import circleadd from '../assets/circleadd.png'
import FormGauge from '../components/FormWidgets/FormGauge'
import FormProgress from '../components/FormWidgets/FormProgress'
import FormCardBox from '../components/FormWidgets/FormCardBox'
import FormGaugeSpeed from '../components/FormWidgets/FormGaugeSpeed'

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
                    <option value="CardBox">Card Box</option>
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
    if (this.props.Selected === 'Gauge') {
      return <FormGauge machineId={this.props.machineId} />
    } else if (this.props.Selected === 'Progress') {
      return <FormProgress machineId={this.props.machineId} />
    } else if (this.props.Selected === 'CardBox') {
      return <FormCardBox machineId={this.props.machineId} />
    } else if (this.props.Selected === 'GaugeSpeed') {
      return <FormGaugeSpeed machineId={this.props.machineId} />
    } else {
      return <h1>SS</h1>
    }
  }
}


export default NewWidget