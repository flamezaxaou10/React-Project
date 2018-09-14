import React from 'react'
import './components.css'
import circleadd from '../assets/circleadd.png'
import WidgetStore from '../store/WidgetStore'

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
  render() {
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
                  >
                    <option value="Guage">Guage</option>
                    <option value="GuageSpeed">Guage Speed</option>
                    <option value="Progress">Progress</option>
                    <option value="CardBox">Card Box</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <FormSelected Selected="Guage" machineId={this.props.machineId} />
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
    if (this.props.Selected === 'Guage') {
      return <FormGauge machineId={this.props.machineId} />
    }
    return <h1>SS</h1>
  }
}

class FormGauge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Test',
      value: 0,
      unit: '',
      minvalue: '0',
      maxvalue: '100',
      setColor: '',
      theme: 'light',
      mode: 'guage',
      enableAnimation: true,
      machineId: this.props.machineId
    }
    this.handlePayload = this.handlePayload.bind(this)
  }

  handlePayload(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let payload = {
      title: this.state.title,
      value: this.state.value,
      unit: this.state.unit,
      minvalue: this.state.minvalue,
      maxvalue: this.state.maxvalue,
      setColor: this.state.setColor,
      theme: 'light',
      mode: 'gauge',
      enableAnimation: true
    }
    console.log(payload)
    WidgetStore.addWidgetToDB(this.props.machineId, payload)
    window.location.reload()
  }
  render() {
    const payload = this.state
    return (
      <div className="FormGuage container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group row">
            <label htmlFor="machineType" className="col-3 col-form-label">
              Title :
          </label>
            <div className="col-9">
              <input
                name="title"
                type="text"
                className="form-control"
                value={payload.title}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="machineType" className="col-3 col-form-label">
              Value :
          </label>
            <div className="col-9">
              <input
                name="value"
                type="text"
                className="form-control"
                value={payload.value}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="machineType" className="col-3 col-form-label">
              Unit :
          </label>
            <div className="col-9">
              <input
                name="unit"
                type="text"
                className="form-control"
                value={payload.unit}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="machineType" className="col-3 col-form-label">
              Min Value :
          </label>
            <div className="col-9">
              <input
                name="minvalue"
                type="text"
                className="form-control"
                value={payload.minvalue}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="machineType" className="col-3 col-form-label">
              Max Value :
          </label>
            <div className="col-9">
              <input
                name="maxvalue"
                type="text"
                className="form-control"
                value={payload.maxvalue}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="machineType" className="col-3 col-form-label">
              set Color :
          </label>
            <div className="col-9">
              <textarea
                name="setColor"
                type="textarea"
                className="form-control"
                value={payload.setColor}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-3">
              <button type="submit"
                className="btn btn-secondary btn-block"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default NewWidget