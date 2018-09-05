import { observable } from 'mobx'
import React from 'react'
import Machine from '../components/Machine'

class MachineStore {
  @observable nextId = 0
  @observable machines = [
    {
      machineId: this.nextId++,
      machineName : 'MC01',
      machineType: 'A'
    },
    {
      machineId: this.nextId++,
      machineName : 'MC02',
      machineType: 'B'
    }
  ]
  @observable listMachine = this.showMachine()

  addMachine(payload) {
    this.machines.push(payload)
    this.listMachine = this.showMachine()
  }

  showMachine() {
    return this.machines.map((machine) =>
        <Machine key={machine.machineId} machine={machine} />
      )
  }
}

export default new MachineStore()