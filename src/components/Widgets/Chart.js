import React from 'react'
import WidgetStore from '../../store/WidgetStore'
import moment from 'moment'
import axios from 'axios'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  AreaChart
} from 'recharts'

class Chart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {key: 0}
      ],
      filterSince: '7days'
    }
    this.handleFilter = this.handleFilter.bind(this)
  }

  delWidget() {
    const widgetId = this.props.widgetId
    WidgetStore.delWidgetToDB(widgetId)
  }

  componentDidMount() {
    const payload = this.props.payload
    const netpieAPI = 'https://api.netpie.io/feed/'
    axios.get(netpieAPI + payload.feedID
      + '?apikey=' + payload.feedAPI
      + '&granularity=10minutes'
      + '&since=' + this.state.filterSince
      + '&filter=' + payload.value
    ).then(function (res) {
      this.setState({
        data: res.data.data[0].values
      })
    }.bind(this))
  }
  
  handleFilter(e) {
    this.setState({
      filterSince: e.target.value
    })
  }

  formatXAxis = (tickItem) => {
    switch (this.state.filterSince) {
      case '1hour' | '8hours' || '24hours':
        return moment(tickItem).format('HH:mm')
      case '3days' || '7days':
        return moment(tickItem).format('DD-MM-YY')
      default:
        return 0
    }
  }

  render() {
    const payload = this.props.payload
    return (
      <div className="Guage col-xl-9 col-lg-9 col-md-12 col-sm-12 text-body mb-3">
        <div className="card border-success shadow rounded-0 border-10 widgetCard">
          <h5 className="card-header">{payload.title}</h5>
          <div className="card-body">
            <div className="btn-group mb-2" role="group" aria-label="DayMonthYear">
              <button type="button"
                className="btn btn-secondary btn-sm"
                value='1hour'
                onClick={this.handleFilter}
              >
                Last 1 hours
              </button>
              <button type="button"
                className="btn btn-secondary btn-sm"
                value='8hours'
                onClick={this.handleFilter}
              >
                Last 8 hours
              </button>
              <button type="button"
                className="btn btn-secondary btn-sm"
                value='24hours'
                onClick={this.handleFilter}
              >
                Last 24 Hours
              </button>
              <button type="button"
                className="btn btn-secondary btn-sm"
                value='3days'
                onClick={this.handleFilter}
              >
                Last 3 Days
              </button>
              <button type="button"
                className="btn btn-secondary btn-sm"
                value='7days'
                onClick={this.handleFilter}
              >
                Last 7 Days
              </button>
            </div>
            <AreaChart width={750} height={200} data={this.state.data}
              margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            >
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="[0]"
                reversed={true}
                tickFormatter={this.formatXAxis}
                domain={['dataMin', 'dataMax']}
                minTickGap={70}
              />
              <YAxis />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                name={payload.title}
                type={payload.type}
                dataKey="[1]"
                stroke={payload.stroke}
                fillOpacity={payload.fillOpacity}
                fill={payload.fill} />
            </AreaChart>
          </div>
          <div className="card-footer text-right">
            <a href="/#" data-toggle="modal" data-target=".ModalCreate"><i className="fas fa-cog text-dark mr-3"></i></a>
            <button className="btn" onClick={this.delWidget.bind(this)} ><i className="fas fa-trash-alt text-danger"></i></button>          </div>
        </div>
      </div>
    )
  }
}

export default Chart