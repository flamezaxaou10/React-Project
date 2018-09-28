import React from 'react'
import WidgetStore from '../../store/WidgetStore'
import NETPIEMicrogear from '../../store/NETPIEMicrogear'

class Lists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentWillMount() {
    const microgear = NETPIEMicrogear.microgear
    const that = this
    microgear.on('message', function (topic, msg) {
      that.setState({
        data: {
          topic: topic + '',
          msg: msg + ''
        }
      })
    })
  }

  delWidget() {
    const widgetId = this.props.widgetId
    WidgetStore.delWidgetToDB(widgetId)
  }

  render() {
    const payload = this.props.payload
    console.log(this.state.data)
    return (
      <div className="Progress col-xl-3 col-lg-4 col-md-6 col-sm-12 text-body mb-3">
        <div className="card border-info shadow rounded-0 border-10 widgetCard">
          <h5 className="card-header">{payload.title}</h5>
          <div className="card-body m-0 p-0">
            <ul className="list-group" data-spy="scroll">
              <List payload={payload} />
              <List payload={payload} />
              <List payload={payload} />
              <List payload={payload} />
              <List payload={payload} />
            </ul>
          </div>
          <div className="card-footer text-right">
            <a href="/#" data-toggle="modal" data-target=".ModalCreate"><i className="fas fa-cog text-dark mr-3"></i></a>
            <button className="btn" onClick={this.delWidget.bind(this)} ><i className="fas fa-trash-alt text-danger"></i></button>
          </div>
        </div>
      </div>
    )
  }
}

class List extends React.Component {
  render() {
    const payload = this.props.payload
    return (
      <li className="list-group-item list-group-item-action">
        <div className="row">
          <div className="col-2 m-0 p-0">
            <span className="fa-layers fa-fw" >
              <i className={'fas fa-2x fa-' + payload.icon}></i>
            </span>
            <small>1m</small>

          </div>
          <div className="col-9 text-secondary">
            {payload.text}
            {payload.value}
            {payload.unit}
          </div>
        </div>
      </li>
    )
  }
}

export default Lists