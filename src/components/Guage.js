import React from 'react'
import MachineStore from '../store/MachineStore'
import Gauge from 'react-radial-gauge'
import ReactSpeedometer from "react-d3-speedometer"
import CanvasGauge from 'react-canvas-gauge'
import ReactGuage from 'react-d3-guage';

class TypeA extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      speed: 500,
      temp: 0,
      humi: 0,
      oee: 40,
      intervalId: 0,
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
        oee: Math.floor(Math.random() * 100) + 1
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
          <div className="col-4">
            <h4 className="mb-3">Speed</h4>
            <ReactSpeedometer
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
            <h4>Temperature</h4>
            <Gauge
              currentValue={this.state.temp}
              size={220}
              dialWidth={20}
              dialColor="#ffffff"
              progressColor="#f09e15"
              progressWidth={15}
              progressFontSize={20}
              tickLength={5}
              tickWidth={3}
              tickColor="#ffffff"
              needleColor="#f09e15"
              needleBaseSize={10}
              needleBaseColor="#f09e15"
              needleWidth={4}
              needleSharp={true}
            />
            <hr className="bg-white" />
            <h4>Humidity</h4>
            <Gauge
              currentValue={this.state.humi}
              size={220}
              dialWidth={20}
              dialColor="#ffffff"
              progressColor="#3a89e6"
              progressWidth={15}
              progressFontSize={23}
              tickLength={5}
              tickWidth={7}
              tickColor="#ffffff"
              needleColor="#3a89e6"
              needleBaseSize={10}
              needleBaseColor="#3a89e6"
              needleWidth={4}
              needleSharp={true}
            />
          </div>
          <div className="col-4">
            <h4>OEE</h4>
            <CanvasGauge
              value={this.state.oee}
              theme="light"
              mode="progress"
              size="200"
              enableAnimation={true}
              title="OEE"
              unit="%"
              minValue={0}
              maxValue={100}
            />
            <hr className="bg-white"/>
            <ReactGuage 
              value={this.state.oee}
              minValue={0}
              maxValue={100}
              segments={2}
              forceRender={false}
              width={300}
              height={200}
              needleColor="steelblue"
              startColor="cyan"
              textColor="white"
              ringWidth={30}
            />
          </div>
        </div>
      </div>
    )
  }
}



export default TypeA