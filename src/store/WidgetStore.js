import React from 'react'
import axios from 'axios'
import { observable } from 'mobx'
import Gauge from '../components/Widgets/Gauge'

let server = "http://localhost:5582/machine"

class WidgetStore {
  @observable widgets = []
  @observable listWidgets = this.showWidgets()
  @observable getWidgets = true

  addWidgets(payload) {
    this.widgets.push(payload)
    this.listWidgets = this.showWidgets()
  }

  addWidgetToDB(_id, payload) {
    axios.put(server + '/widgets/' + _id, payload).then(function (res) {
      console.log(res)
    }).catch(function (err) {
      console.log(err)
    })
  }

  showWidgets() {
    return this.widgets.map((widget) =>
      <Gauge key={widget.title} payload={widget} />
    )
  }
}

export default new WidgetStore()