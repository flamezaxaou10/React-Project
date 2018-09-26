import React from 'react'
import NewWidgets from './NewWidget'
import WidgetStore from '../store/WidgetStore'
// import MachineStore from '../store/MachineStore'
import axios from 'axios'
import socketIOClient from 'socket.io-client'

let server = 'http://localhost:5582'
const socket = socketIOClient(server)

class ShowMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listWidgets: WidgetStore.listWidgets,
      machine: {
        macihneId: this.props.match.params.machineId,
        machineName: 'Loading...',
        machineType: 'Loading...'
      }
    }
  }

  response = () => {
    socket.on('update-widget', (msg) => {
      console.log('update-widget', msg)
      this.componentWillUnmount()
      this.componentWillMount()
    })
  }

  componentDidMount() {
    this.response()
  }

  componentWillMount() {
    if (WidgetStore.getWidgets) {
      axios.get(server + '/widget/' + this.props.match.params.machineId).then(function (res) {
        res.data.map((widget) =>
          WidgetStore.addWidgets(widget)
        )
        this.setState({
          listWidgets: WidgetStore.listWidgets
        })
      }.bind(this)).catch(function (err) {
        console.log(err)
      })
      WidgetStore.getWidgets = false
    }

    axios.get(server + '/machine/' + this.props.match.params.machineId).then(function (res) {
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
    this.setState({
      listWidgets: [],
      machine: {}
    })
    WidgetStore.getWidgets = true
    WidgetStore.widgets = []
    WidgetStore.listWidgets = []
  }

  render() {
    const listWidgets = this.state.listWidgets
    const macihne = this.state.machine
    const machineId = this.props.match.params.machineId
    return (
      <div className="ShowMachine text-white justify-content-center">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <h4>Machine ID : {macihne.machineId}</h4>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <h4>Machine Name : {macihne.machineName}</h4>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <h4>Machine Type : {macihne.machineType}</h4>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="row justify-content-center">
          {listWidgets}
        </div>
        <NewWidgets machineId={machineId} />
      </div>
    )
  }
}

export default ShowMachine