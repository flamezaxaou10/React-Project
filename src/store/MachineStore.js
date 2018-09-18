import { observable } from 'mobx'
import React from 'react'
import Machine from '../components/Machine'
import axios from 'axios'

let server = 'http://172.18.42.220:5582/machine'

class MachineStore {
  @observable visualId = 0
  @observable getData = true
  @observable machines = []
  @observable listMachine = this.showMachine()

  addMachine(payload) {
    this.machines.push(payload)
    this.listMachine = this.showMachine()
  }

  addMachineToDB(payload) {
    this.machines = []
    axios.post(server + '/', payload).then(function (res) {
      console.log(res)
    }).catch(function (err) {
      console.log(err)
    })
  }

  delMachineToDB(_id) {
    axios.delete(server + '/' + _id).then(function (res) {
      console.log(res)
    }).catch(function (err) {
      console.log(err)
    })
  }

  showMachine() {
    return this.machines.map((machine) =>
      <Machine key={machine._id} machine={machine} />
    )
  }



}

export default new MachineStore()