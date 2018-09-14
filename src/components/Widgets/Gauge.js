import React from 'react'
import CanvasGauge from 'react-canvas-gauge'

class Gauge extends React.Component {
  render() {
    const payload = this.props.payload
    return (
      <div className="Guage col-3 text-body">
        <div className="card border-success shadow rounded-0 border-10">
          <h5 className="card-header">{payload.title}</h5>
          <div className="card-body">
            <CanvasGauge
              value={parseInt(payload.value, 10)}
              theme={payload.theme}
              mode={payload.mode}
              size={200}
              enableAnimation={payload.enableAnimation}
              //title={payload.title}
              unit={payload.unit}
              minValue={parseInt(payload.minvalue, 10)}
              maxValue={parseInt(payload.maxvalue, 10)}
            //scaleList={payload.setColor}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Gauge