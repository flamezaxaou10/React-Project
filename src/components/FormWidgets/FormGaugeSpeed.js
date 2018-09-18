import React from 'react'
import WidgetStore from '../../store/WidgetStore'

class FormGaugeSpeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Gauge Speed',
      value: 0,
      unit: '',
      width: 300,
      height: 200,
      minValue: '0',
      maxValue: '100',
      segments: 3,
      startColor: '#00ee00',
      endColor: '#ff0000',
      textColor: '#000000',
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
      typeWidget: 'GaugeSpeed',
      title: this.state.title,
      value: this.state.value,
      unit: this.state.unit,
      minValue: this.state.minValue,
      maxValue: this.state.maxValue,
      segments: this.state.segments,
      startColor: this.state.startColor,
      endColor: this.state.endColor,
      textColor: this.state.textColor
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
                value={payload.minValue}
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
                value={payload.maxValue}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="machineType" className="col-3 col-form-label">
              Segments :
          </label>
            <div className="col-9">
              <input
                name="segments"
                type="text"
                className="form-control"
                value={payload.segments}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="machineType" className="col-3 col-form-label">
              Start Color :
          </label>
            <div className="col-9">
              <input
                name="startColor"
                type="text"
                className="form-control"
                value={payload.startColor}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="machineType" className="col-3 col-form-label">
              End Color :
          </label>
            <div className="col-9">
              <input
                name="endColor"
                type="text"
                className="form-control"
                value={payload.endColor}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="machineType" className="col-3 col-form-label">
              Text Color :
          </label>
            <div className="col-9">
              <input
                name="textColor"
                type="text"
                className="form-control"
                value={payload.textColor}
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

export default FormGaugeSpeed