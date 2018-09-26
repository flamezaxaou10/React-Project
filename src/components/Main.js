import React from 'react'
//import PropTypes from 'prop-types'
import MachineStore from '../store/MachineStore'
import ButtonAdd from './ButtonAdd'
import axios from 'axios'
import socketIOClient from 'socket.io-client'

let server = 'http://localhost:5582'
const socket = socketIOClient(server)

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listMachine: MachineStore.listMachine
    }
  }

  componentDidMount() {
    this.response()
  }

  componentWillMount() {
    if (MachineStore.getData) {
      axios.get(server + '/machine/').then(function (res) {
        res.data.map((machine) =>
          MachineStore.addMachine(machine)
        )
        this.setState({
          listMachine: MachineStore.listMachine,
        })
      }.bind(this)).catch(function (err) {
        console.log(err)
      })
      MachineStore.getData = false
    }
  }

  componentWillUnmount() {
    this.setState({
      listMachine: []
    })
    MachineStore.getData = true
    MachineStore.machines = []
    MachineStore.listMachine = []
  }

  response = () => {
    socket.on('update-machine', (msg) => {
      console.log('update-machine', msg)
      this.componentWillUnmount()
      this.componentWillMount()
    })
  }


  render() {
    const listMachine = this.state.listMachine
    return (
      <div className="Main">
        <h3 className="text-white">Dashboard</h3>
        <div className="row justify-content-center">
          {listMachine}
          <ButtonAdd MachineStore={MachineStore} />
        </div>
      </div>
    )
  }
}



export default Main