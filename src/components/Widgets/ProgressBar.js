import React from 'react'
import { Line } from 'rc-progress'
import { Link } from 'react-router-dom'

class ProgressBar extends React.Component {
  render() {
    const payload = this.props.payload
    const widgetId = this.props.widgetId
    return (
      <div className="ProgressBar col-xl-3 col-lg-4 col-md-6 col-sm-12 text-body mb-3">
        <div className="card border-warning shadow rounded-0 border-10 widgetCard">
          <h5 className="card-header">{payload.title}</h5>
          <div className="card-body">
          <h6 className="pt-5">{payload.title} : {payload.percent} {payload.unit}</h6>
          <Line 
              percent={parseFloat(payload.percent)} 
              strokeWidth={parseInt(payload.strokeWidth, 10)} 
              trailWidth={parseInt(payload.trailWidth, 10)} 
              strokeColor={payload.strokeColor}
              trailColor={payload.trailColor}
              strokeLinecap={payload.strokeLinecap}
            />
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

export default ProgressBar