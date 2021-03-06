import React from 'react'
import './components.css'
import LineChart from './LineChart'
import ReactSpeedometer from "react-d3-speedometer"
import CanvasGauge from 'react-canvas-gauge'
import axios from 'axios'
import CNC from '../assets/CNC.jpg'

let server = 'http://localhost:5582/machine'

class TypeB extends React.Component {
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
      currentTime: 1,
      prevOee: 0,
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
        temp: Math.floor(Math.random() * 100) + 1,
        humi: Math.floor(Math.random() * 100) + 1,
        aval: Math.floor(Math.random() * 100) + 1,
        prod: Math.floor(Math.random() * 100) + 1,
        qual: Math.floor(Math.random() * 100) + 1,
        prevOee: this.state.oee
      })
      this.setState({
        oee: (((this.state.aval / 100) * (this.state.prod / 100) * (this.state.qual / 100)) * 100).toFixed(2)
      })
    }, 8000)

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
    let arrow = 'up text-success'
    if (this.state.oee - this.state.prevOee >= 0) arrow = 'up text-success'
    else arrow = 'down text-danger'

    return (
      <div className="TypeB text-white justify-content-center">
        <div className="row mb-5">
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
        <div className="row text-body">
          <div className="col-4">
            <div className="card border-success shadow rounded-0 border-10">
              <h6 className="card-header">Overall Equipment Effectiveness (OEE)</h6>
              <div className="card-body">
                <div className="row">
                  <div className="col-6 text-right">
                    <h1>{this.state.oee}</h1>
                  </div>
                  <div className="col-2 text-left pt-4">
                    <h6>%</h6>
                  </div>
                  <div className="col-4 text-left">
                    <span className="fa-layers fa-fw">
                      <i className={`fas fa-2x pt-2 fa-arrow-` + arrow}></i>
                      <span className="fa-layers-counter">{(this.state.oee - this.state.prevOee).toFixed(2)}</span>
                    </span>
                  </div>
                </div>
                <p className="card-text"><small className="text-muted">Last updated 2 sec ago</small></p>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-4">
                <div className="card border-danger border-10 shadow rounded-0">
                  <h6 className="card-header">Avaliability</h6>
                  <div className="card-body">
                    <h1>{this.state.aval}</h1>
                    <h6>%</h6>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card border-secondary border-10 shadow rounded-0">
                  <h6 className="card-header">Productivity</h6>
                  <div className="card-body">
                    <h1>{this.state.prod}</h1>
                    <h6>%</h6>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card border-info border-10 shadow rounded-0">
                  <h6 className="card-header">Quality</h6>
                  <div className="card-body">
                    <h1>{this.state.qual}</h1>
                    <h6>%</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-body mt-4">
          <div className="col-4">
            <div className="card border-info border-10 shadow rounded-0">
              <h6 className="card-header">Temperature</h6>
              <div className="card-body">
                <CanvasGauge
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
                      endColor: "steelblue"
                    }
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card border-danger border-10 shadow rounded-0">
              <h6 className="card-header">Humidity</h6>
              <div className="card-body">
                <CanvasGauge
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
            </div>
          </div>
          <div className="col-4">
            <div className="card border-success border-10 shadow rounded-0">
              <h6 className="card-header">Speed (RPM)</h6>
              <div className="card-body">
                <ReactSpeedometer
                  value={this.state.speed}
                  width={300}
                  height={180}
                  minValue={0}
                  maxValue={2000}
                  segments={8}
                  startColor="#00ee00"
                  endColor="#ff0000"
                  textColor="#000000"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row text-body mt-4">
          <div className="col-8">
            <div className="card border-warning border-10 shadow rounded-0">
              <h6 className="card-header">Overall</h6>
              <div className="card-body">
                <LineChart payload={{
                  temp: this.state.temp,
                  timstamp: Date.now(),
                  width: 600
                }} Table={{
                  name: "Overall"
                }} />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card border-white border-10 shadow rounded-0">
              <h6 className="card-header">Note</h6>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="Note">Additional Note</label>
                  <textarea className="form-control" id="Note" rows="8" placeholder="Put Your Note Here..."></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 mt-4 pb-3">
            <div className="card border-primary border-10 shadow rounded-0">
              <h6 className="card-header">CNC Image Camera #1</h6>
              <div className="card-body">
                <img className="img-fluid img-thumbnail" src={CNC} width={500} height={300} alt="CNC"/>
              </div>
            </div>
          </div>
          <div className="col-3 text-white">
            <h5>Progress Bar : {this.state.humi} %</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default TypeB 