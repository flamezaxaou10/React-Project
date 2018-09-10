import React from 'react'
//import PropTypes from 'prop-types'
import MachineStore from '../store/MachineStore'
import ButtonAdd from './ButtonAdd'
import axios from 'axios'

let server = 'http://localhost:5582/machine'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listMachine: MachineStore.listMachine
    }
  }
  componentWillMount() {
    if (MachineStore.getData) {
      axios.get(server + '/').then(function (res) {
        res.data.map((machine) =>
          MachineStore.addMachine(machine)
        )
        this.newRender()
      }.bind(this)).catch(function (err) {
        console.log(err)
      })
      MachineStore.getData = false
    }
  }

  newRender = () => {
    this.componentWillMount()
    this.setState({
      listMachine: MachineStore.listMachine,
    })
  }


  render() {

    return (
      <div className="Main">
        <h3 className="text-white">Dashboard</h3>
        <div className="row justify-content-center">
          {this.state.listMachine}
          <ButtonAdd callback={this.newRender} MachineStore={MachineStore} />
        </div>
      </div>
    )
  }
}



export default Main