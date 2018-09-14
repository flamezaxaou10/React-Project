import React from 'react'
import NewWidgets from './NewWidget'
import WidgetStore from '../store/WidgetStore'
import axios from 'axios'

let server = "http://localhost:5582/machine"

class ShowMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      widgets: WidgetStore.listWidgets
    }
  }

  componentDidMount() {
    let _id = this.props.match.params.machineId
    if (WidgetStore.getWidgets) {
      axios.get(server + '/widgets/' + _id).then(function (res) {
        res.data.map((widget) =>
          WidgetStore.addWidgets(widget)
        )
        this.setState({
          widgets: WidgetStore.listWidgets
        })
      }.bind(this)).catch(function (err) {
        console.log(err)
      })
    }
    WidgetStore.getWidgets = false
  }
  render() {
    const widgets = this.state.widgets
    let machineId = this.props.match.params.machineId
    return (
      <div className="ShowMachine text-white justify-content-center">
        <div className="row">
          <div className="col-4">
            <h4>Machine ID : {machineId}</h4>
          </div>
          <div className="col-4">
            <h4>Machine Name : </h4>
          </div>
          <div className="col-4">
            <h4>Machine Type : </h4>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="row">
          {widgets}
        </div>
        <NewWidgets machineId={machineId} />
      </div>
    )
  }
}

export default ShowMachine