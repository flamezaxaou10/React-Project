import { observable } from 'mobx'
import React from 'react'
import axios from 'axios'

let server = 'http://localhost:5582/machine'

class WidgetStore {
  @observable widgets = []

  addWidgetToDB(payload,_id) {
    axios.put(server + '/' + _id, payload).then(function (res) {
      console.log(res)
    }).catch(function (err) {
      console.log(err)
    })
  }

  showWidgets() {
    
  }
}

export default new WidgetStore()