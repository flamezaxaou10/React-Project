import React from 'react'
import axios from 'axios'
import { observable } from 'mobx'
import Gauge from '../components/Widgets/Gauge'
import Progress from '../components/Widgets/Progress'
import CardBox from '../components/Widgets/CardBox'
import GaugeSpeed from '../components/Widgets/GaugeSpeed'
import ProgressBar from '../components/Widgets/ProgressBar'
import Text from '../components/Widgets/Text'

let server = "http://172.18.42.220:5582/widget"

class WidgetStore {
  @observable widgets = []
  @observable listWidgets = this.showWidgets()
  @observable getWidgets = true

  addWidgets(payload) {
    this.widgets.push(payload)
    this.listWidgets = this.showWidgets()
  }

  addWidgetToDB(_id, payload) {
    this.widgets = []
    axios.post(server + '/', {
      machineId: _id,
      widget: payload
    }).then(function (res) {
      console.log(res)
    }).catch(function (err) {
      console.log(err)
    })
  }

  delWidgetToDB(widgetId) {
    axios.delete(server + '/' + widgetId).then(function (res) {
      console.log(res)
    }).catch(function (err) {
      console.log(err)
    })
  }

  showWidgets() {
    return this.widgets.map((widget) => {
      if (widget.widget.typeWidget === "Gauge")
        return <Gauge key={widget._id} payload={widget.widget} widgetId={widget._id} />
      else if (widget.widget.typeWidget === "Progress")
        return <Progress key={widget._id} payload={widget.widget} widgetId={widget._id} />
      else if (widget.widget.typeWidget === "CardBox")
        return <CardBox key={widget._id} payload={widget.widget} widgetId={widget._id} />
      else if (widget.widget.typeWidget === 'GaugeSpeed')
        return <GaugeSpeed key={widget._id} payload={widget.widget} widgetId={widget._id} />
      else if (widget.widget.typeWidget === 'ProgressBar')
        return <ProgressBar key={widget._id} payload={widget.widget} widgetId={widget._id} />
      else if (widget.widget.typeWidget === 'Text')
        return <Text key={widget._id} payload={widget.widget} widgetId={widget._id} />
      else return <h1 className="text-white">No Show</h1>
    })
  }
}

export default new WidgetStore()