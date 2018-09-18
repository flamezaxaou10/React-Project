import React from 'react'
import CanvasGauge from 'react-canvas-gauge'
import { Link } from 'react-router-dom'

class Gauge extends React.Component {
  render() {
    const payload = this.props.payload
    const widgetId = this.props.widgetId
    return (
      <div className="Guage col-xl-3 col-lg-4 col-md-6 col-sm-12 text-body mb-3">
        <div className="card border-success shadow rounded-0 border-10 widgetCard">
          <h5 className="card-header">{payload.title}</h5>
          <div className="card-body">
            <CanvasGauge
              value={parseInt(payload.value, 10)}
              theme={payload.theme}
              mode={payload.mode}
              size={150}
              enableAnimation={payload.enableAnimation}
              //title={payload.title}
              unit={payload.unit}
              minValue={parseInt(payload.minvalue, 10)}
              maxValue={parseInt(payload.maxvalue, 10)}
              //scaleList={payload.setColor}
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

export default Gauge