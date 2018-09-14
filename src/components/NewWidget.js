import React from 'react'
import './components.css'
import circleadd from '../assets/circleadd.png'

class NewWidget extends React.Component {
  render() {
    return (
      <div className="row text-body">
        <button className="btn btn-secondary p-0 shadow rounded-circle" id="ButtonAdd"
          data-toggle="modal" data-target=".NewWidget" >
          <img width="60px" src={circleadd} alt="" />
        </button>
        <AddWidget />
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
                <FormSelected Selected="Guage" />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary">Add</button>
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
      return <FormGuage />
    }
    return <h1>SS</h1>
  }
}

class FormGuage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      payload: {
        title: 'Test',
        value: 0,
        unit: '',
        minvalue: '0',
        maxvalue: '100',
        setColor: [],
        theme: 'light',
        mode: 'guage',
        enableAnimation: true
      }
    }
    this.handlePayload = this.handlePayload.bind(this);
  }

  handlePayload(e) {
    this.setState({
      payload: {
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target)

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    })
    
  }
  render() {
    const payload = this.state.payload
    return (

      <div className="FormGuage container">
        <form onSubmit={this.handleSubmit}>
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
          <div>
            <input type="submit" name="submit" />
          </div>
        </form>
      </div>

    )
  }
}

export default NewWidget