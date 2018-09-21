import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import CanvasGauge from 'react-canvas-gauge'
import LineChart from './LineChart'
import axios from 'axios'

let server = 'http://localhost:5582/machine'

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
      currentTime: 0,
      machine: {
        machineId: this.props.match.params.machineId,
        machineName: 'Loading...',
        machineType: 'Loading...'
      }
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        currentTime: this.state.currentTime + 1,
        speed: Math.floor(Math.random() * 2000) + 1,
        temp: Math.floor(Math.random() * 120) - 60,
        humi: Math.floor(Math.random() * 100) + 1,
        aval: Math.floor(Math.random() * 100) + 1,
        prod: Math.floor(Math.random() * 100) + 1,
        qual: Math.floor(Math.random() * 100) + 1
      })
      this.setState({
        oee: (((this.state.aval / 100) * (this.state.prod / 100) * (this.state.qual / 100)) * 100).toFixed(2)
      })
    }, 3000)

    axios.get(server + '/' + this.state.machine.machineId).then(function (res) {
      this.setState({
        machine: {
          machineId: res.data._id,
          machineName: res.data.machineName,
          machineType: res.data.machineType
        }
      })
    }.bind(this)).catch(function (err) {
      console.log(err)
    })

  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const machine = this.state.machine
    return (
      <div className="TypeA text-white justify-content-center">
        <div className="row">
          <div className="col-4">
            <h4>Machine ID : {machine.machineId}</h4>
          </div>
          <div className="col-4">
            <h4>Machine Name : {machine.machineName}</h4>
          </div>
          <div className="col-4">
            <h4>Machine Type : {machine.machineType}</h4>
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
              minValue={-60}
              maxValue={60}
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
                  endColor: "steelblue"
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
              timstamp: Date.now(),
              width: 300
            }} Table={{
              name: "Overall"
            }} />
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