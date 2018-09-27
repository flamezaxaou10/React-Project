import React from 'react'
import WidgetStore from '../../store/WidgetStore'

class FormChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Chart',
      feedID: '',
      feedAPI: '',
      value: 0,
      type: 'monotone',
      stroke: '#8884d8',
      fillOpacity: 1,
      fill: 'url(#color)',
      machineId: this.props.machineId
    }
    this.handlePayload = this.handlePayload.bind(this)
  }

  handlePayload(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state.file)
  }
  
  handleSubmit(e) {
    e.preventDefault()
    let payload = {
      typeWidget: 'Chart',
      title: this.state.title,
      feedID: this.state.feedID,
      feedAPI: this.state.feedAPI,
      value: this.state.value,
      type: 'monotone',
      stroke: '#8884d8',
      fillOpacity: 1,
      fill: 'url(#color)',    
    }
    console.log(payload)
    WidgetStore.addWidgetToDB(this.props.machineId, payload)
    this.setState({
      title: 'Chart',
      feedID: '',
      feedAPI: '',
      value: 0,
      type: 'monotone',
      stroke: '#8884d8',
      fillOpacity: 1,
      fill: 'url(#color)',
    })
  }
  render() {
    const payload = this.state
    return (
      <div className="FormChart container">
        <form >
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
            <label htmlFor="feedID" className="col-3 col-form-label">
              Feed ID :
          </label>
            <div className="col-9">
              <input
                name="feedID"
                type="text"
                className="form-control"
                value={payload.feedID}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="feedAPI" className="col-3 col-form-label">
              Feed API :
          </label>
            <div className="col-9">
              <input
                name="feedAPI"
                type="text"
                className="form-control"
                value={payload.feedAPI}
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
          <div className="row justify-content-end">
            <div className="col-3">
              <button type="submit"
                className="btn btn-secondary btn-block"
                onClick={this.handleSubmit.bind(this)}
                data-dismiss="modal" aria-label="Close"
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

export default FormChart