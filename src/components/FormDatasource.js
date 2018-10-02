import React from 'react'
import WidgetStore from '../../store/WidgetStore'

class FormDatasource extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      NAME: 'NETPIE',
      APPID: '',
      KEY: '',
      SECRET: '',
      SUBSCRIBED: '/#',
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
    const state = this.state
    let payload = {
      typeDatasource: 'Microgear',
      NAME: state.NAME,
      APPID: state.APPID,
      KEY: state.KEY,
      SECRET: state.SECRET,
      SUBSCRIBED: state.SUBSCRIBED,
    }
    WidgetStore.addWidgetToDB(this.props.machineId, payload)
    this.setState({
      NAME: 'NETPIE',
      APPID: '',
      KEY: '',
      SECRET: '',
      SUBSCRIBED: '/#'
    })
  }
  render() {
    const payload = this.state
    return (
      <div className="FormDatasource container">
        <form>
          <div className="form-group row">
            <label htmlFor="NAME" className="col-3 col-form-label">
              NAME :
          </label>
            <div className="col-9">
              <input
                name="NAME"
                type="text"
                className="form-control"
                value={payload.NAME}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="APPID" className="col-3 col-form-label">
              APPID :
          </label>
            <div className="col-9">
              <input
                name="APPID"
                type="text"
                className="form-control"
                value={payload.APPID}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="KEY" className="col-3 col-form-label">
              KEY :
          </label>
            <div className="col-9">
              <input
                name="KEY"
                type="text"
                className="form-control"
                value={payload.KEY}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="SECRET" className="col-3 col-form-label">
              SECRET :
          </label>
            <div className="col-9">
              <input
                name="SECRET"
                type="text"
                className="form-control"
                value={payload.SECRET}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="SUBSCRIBED" className="col-3 col-form-label">
              SUBSCRIBED :
          </label>
            <div className="col-9">
              <input
                name="SUBSCRIBED"
                type="text"
                className="form-control"
                value={payload.SUBSCRIBED}
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
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default FormDatasource