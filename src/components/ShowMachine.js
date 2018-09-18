import React from 'react'
import NewWidgets from './NewWidget'
import WidgetStore from '../store/WidgetStore'
// import MachineStore from '../store/MachineStore'
import axios from 'axios'

let server = "http://localhost:5582/widget"

class ShowMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listWidgets: WidgetStore.listWidgets
    }
  }

  componentWillMount() {
    let widgetId = this.props.match.params.machineId
    if (WidgetStore.getWidgets) {
      axios.get(server + '/' + widgetId).then(function (res) {
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
  }

  componentWillUnmount() {
    this.setState({
      listWidgets: []
    })
    WidgetStore.getWidgets = true
    WidgetStore.widgets = []
    WidgetStore.listWidgets = []
  }

  render() {
    const listWidgets = this.state.listWidgets
    let machineId = this.props.match.params.machineId
    // let machines = MachineStore.machines
    // let machine = machines.filter((machine) =>
    //   machine._id === (machineId)
    // )
    return (
      <div className="ShowMachine text-white justify-content-center">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <h4>Machine ID : {machineId}</h4>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <h4>Machine Name : </h4>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <h4>Machine Type : </h4>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="row">
          {listWidgets}
        </div>
        <NewWidgets machineId={machineId} />
      </div>
    )
  }
}

export default ShowMachine