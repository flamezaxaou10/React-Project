import React from 'react'
import { Link } from 'react-router-dom'

class Gauge extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.payload.value,
      previousValue : 0
    }
  }


  render() {
    const payload = this.props.payload
    const widgetId = this.props.widgetId
    const state = this.state

    let arrow = 'up text-success'
    if (state.value - state.previousValue >= 0) arrow = 'up text-success'
    else arrow = 'down text-danger'

    return (
      <div className="CardBox col-xl-3 col-lg-4 col-md-6 col-sm-12 text-body mb-3">
        <div className="card border-info shadow rounded-0 border-10">
          <h5 className="card-header">{payload.title}</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-6 text-right">
                <h1>{payload.value}</h1>
              </div>
              <div className="col-2 text-left pt-4">
                <h6>{payload.unit}</h6>
              </div>
              <div className="col-4 text-left">
                <span className="fa-layers fa-fw">
                  <i className={`fas fa-2x pt-2 fa-arrow-` + arrow}></i>
                  <span className="fa-layers-counter">{(state.value - state.previousValue).toFixed(2)}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="card-footer text-right">
            <a href="/#" data-toggle="modal" data-target=".ModalCreate"><i className="fas fa-cog text-dark mr-3"></i></a>
            <Link to={`/DeleteWidget/` + widgetId}><i className="fas fa-trash-alt text-danger"></i></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Gauge