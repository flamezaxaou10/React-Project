import React from 'react'
import MachineStore from '../store/MachineStore'
import ReactSpeedometer from "react-d3-speedometer"
import CanvasGauge from 'react-canvas-gauge'
import LineChart from './LineChart'

class TypeA extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      speed: 500,
      temp: 0,
      humi: 0,
      oee: 0,
      aval: 0,
      prod: 0,
      qual: 0,
      currentTime: 1
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        currentTime: this.state.currentTime + 1,
        speed: Math.floor(Math.random() * 2000) + 1,
        temp: Math.floor(Math.random() * 100) + 1,
        humi: Math.floor(Math.random() * 100) + 1,
        aval: Math.floor(Math.random() * 100) + 1,
        prod: Math.floor(Math.random() * 100) + 1,
        qual: Math.floor(Math.random() * 100) + 1
      })
      this.setState({
        oee: (((this.state.aval / 100) * (this.state.prod / 100) * (this.state.qual / 100)) * 100).toFixed(2)
      })
    }, 3000)
  }

  render() {
    let machineId = this.props.match.params.machineId
    let machines = MachineStore.machines
    let machine = machines.filter((machine) =>
      machine.machineId === parseFloat(machineId)
    )
    return (
      <div className="TypeA text-white justify-content-center">
        <div className="row">
          <div className="col-4">
            <h4>Machine ID : {machineId}</h4>
          </div>
          <div className="col-4">
            <h4>Machine Name : {machine[0].machineName}</h4>
          </div>
          <div className="col-4">
            <h4>Machine Type : {machine[0].machineType}</h4>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <h4 className="mb-3">Speed(RPM)</h4>
            <ReactSpeedometer className="col-12"
              value={this.state.speed}
              width={300}
              height={200}
              minValue={0}
              maxValue={2000}
              segments={8}
              startColor="#00ee00"
              endColor="#ff0000"
              textColor="#ffffff"
            />
            <hr className="bg-white" />
            <h5>Temperature</h5>
            <CanvasGauge className="col-6"
              value={this.state.temp}
              theme="light"
              mode="progress"
              size={150}
              enableAnimation={true}
              title="Temp"
              unit=" *C"
              minValue={0}
              maxValue={100}
              scaleList={[
                {
                  scale: 10,
                  quantity: 5,
                  startColor: "steelblue",
                  endColor: "cyan"
                },
                {
                  scale: 10,
                  quantity: 5,
                  startColor: "cyan",
                  endColor: "orange"
                }
              ]}
            />
            <hr className="bg-white" />
            <h5>Humidity</h5>
            <CanvasGauge className="col-6"
              value={this.state.humi}
              theme="light"
              mode="progress"
              size={150}
              enableAnimation={true}
              title="Humid"
              unit=" %"
              minValue={0}
              maxValue={100}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <h4>OEE</h4>
            <CanvasGauge
              value={parseFloat(this.state.oee)}
              theme="light"
              mode="gauge"
              size={300}
              enableAnimation={true}
              title="OEE"
              unit="%"
              minValue={0}
              maxValue={100}
            />
            <hr className="bg-white" />
            <div className="row">
              <div className="col-4">
                <h6>Avaliability</h6>
                <CanvasGauge
                  value={this.state.aval}
                  theme="light"
                  mode="progress"
                  size={100}
                  enableAnimation={true}
                  title="%"
                  unit=""
                  minValue={0}
                  maxValue={100}
                />
              </div>
              <div className="col-4">
                <h6>Productivity</h6>
                <CanvasGauge
                  value={this.state.prod}
                  theme="light"
                  mode="progress"
                  size={100}
                  enableAnimation={true}
                  title="%"
                  unit=""
                  minValue={0}
                  maxValue={100}
                />
              </div>
              <div className="col-4">
                <h6>Quality</h6>
                <CanvasGauge
                  value={this.state.qual}
                  theme="light"
                  mode="progress"
                  size={100}
                  enableAnimation={true}
                  title="%"
                  unit=""
                  minValue={0}
                  maxValue={100}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            Admin : Flame
            
            <LineChart payload={{
              temp: this.state.temp,
              humi: this.state.humi,
              timstamp: Date.now()
            }} Table={{
              name: "Overall"
            }}/>
            <div className="form-group">
              <label htmlFor="Note">Additional Note</label>
              <textarea className="form-control" id="Note" rows="5" placeholder="Put Your Note Here..."></textarea>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default TypeA