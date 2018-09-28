import React from 'react'
import WidgetStore from '../../store/WidgetStore'

class FormList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'List',
      value: '',
      text: '',
      unit: '',
      icon: '',
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
      typeWidget: 'List',
      title: this.state.title,
      value: this.state.value,
      text: this.state.text,
      unit: this.state.unit,
      icon: this.state.icon
    }
    console.log(payload)
    WidgetStore.addWidgetToDB(this.props.machineId, payload)
    this.setState({
      title: 'Text',
      value: '',
      text: '',
      unit: '',
      icon: ''
    })
  }
  render() {
    const payload = this.state
    return (
      <div className="FormList container">
        <form>
          <div className="form-group row">
            <label htmlFor="title" className="col-3 col-form-label">
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
            <label htmlFor="icon" className="col-3 col-form-label">
              ICON :
          </label>
            <div className="col-9">
              <input
                name="icon"
                type="text"
                className="form-control"
                value={payload.icon}
                onChange={this.handlePayload}
                placeholder="fontAwesome :: lightbulb"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="text" className="col-3 col-form-label">
              Text :
          </label>
            <div className="col-9">
              <input
                name="text"
                type="text"
                className="form-control"
                value={payload.text}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="value" className="col-3 col-form-label">
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
            <label htmlFor="unit" className="col-3 col-form-label">
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
            <label htmlFor="exampleList" className="col-3 col-form-label">
              Example List :
          </label>
            <div className="col-9 text-secondary">
              {this.state.text + ' <Value> ' + this.state.unit} 
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-3">
              <button type="submit"
                className="btn btn-secondary btn-block"
                onClick={this.handleSubmit.bind(this)}
                data-dismiss="modal" aria-label="Close"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default FormList