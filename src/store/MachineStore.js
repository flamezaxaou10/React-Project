import { observable } from 'mobx'
import React from 'react'
import Machine from '../components/Machine'
import axios from 'axios'

let server = 'http://localhost:5582/machine'

class MachineStore {

  @observable getData = true
  @observable nextId = 0
  @observable machines = []
  @observable listMachine = this.showMachine()

  addMachine(payload) {
    this.machines.push(payload)
    this.listMachine = this.showMachine()
  }

  addMachineToDB(payload) {
    axios.post(server + '/', {
      payload,
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }).then(function (res) {
      console.log(res)
    }).catch(function (err) {
      console.log(err)
    })
  }

  showMachine() {
    return this.machines.map((machine) =>
      <Machine key={machine.machineId} machine={machine} />
    )
  }



}

export default new MachineStore()