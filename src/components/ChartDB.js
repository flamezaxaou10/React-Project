import React from 'react'
import axios from 'axios'
import moment from 'moment'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  AreaChart
} from 'recharts'

class ChartDB extends React.Component {
  render() {
    return (
      <div className="ChartDB row justify-content-center text-white">
        <div className="row mb-4">
          <div className="col-12">
            <Table Table={{
              id: "table1",
              name: "Table 1",
              color: ["red", "cyan"],
              mapType: ""
            }} />
          </div>
        </div>
        {/* <div className="row mb-4">
          <div className="col-12">
            <Table Table={{
              id: "table2",
              name: "Table 2",
              color: ["red", "cyan"],
              mapType: ""
            }} />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <Table Table={{
              id: "table3",
              name: "Table 3",
              color: ["red", "cyan"],
              mapType: ""
            }} />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <Table Table={{
              id: "table4",
              name: "Table 4",
              color: ["red", "cyan"],
              mapType: ""
            }} />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <Table Table={{
              id: "table5",
              name: "Table 5",
              color: ["red", "cyan"],
              mapType: ""
            }} />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <Table Table={{
              id: "table6",
              name: "Table 6",
              color: ["red", "cyan"],
              mapType: ""
            }} />
          </div>
        </div> */}
      </div>
    )
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: [],
      typeFilter: 'filterMonth',
      filterDayData: [],
      filterWeekData: [],
      filterMonthData: [],
    }
  }

  componentDidMount() {
    axios.get('http://172.18.42.222:5582/dht/last30days/' + this.props.Table.id).then(function (res) {
      this.setState({
        datas: res.data[0],
        filterMonthData: res.data[0],
        filterWeekData: res.data[1],
        filterDayData: res.data[2],
      })
      console.log(res.data[0])
      console.log(res.data[1])
      console.log(res.data[2])
    }.bind(this)).catch(function (error) {
      console.log(error)
    })

    // axios.get('http://172.18.42.222:5582/dht/last24hr/' + this.props.Table.id).then(function (res) {
    //   this.setState({
    //     filterDayData: res.data
    //   })
    // }.bind(this)).catch(function (err) {
    //   console.log(err)
    // })

    // axios.get('http://172.18.42.222:5582/dht/last24hr/' + this.props.Table.id).then(function (res) {
    //   this.setState({
    //     filterWeekData: res.data
    //   })
    // }.bind(this)).catch(function (err) {
    //   console.log(err)
    // })
  }

  formatXAxis = (tickItem) => {
    if (this.state.typeFilter === 'filterDay')
      return moment(tickItem).format('HH:00')
    else if (this.state.typeFilter === 'filterWeek')
      return moment(tickItem).format('DD-MMM-YY')
    else if (this.state.typeFilter === 'filterMonth')
      return moment(tickItem).format('DD-MM-YY')
  }

  handleFilterDay() {
    this.setState({
      typeFilter: 'filterDay',
      datas: this.state.filterDayData
    })
  }

  handleFilterWeek() {
    this.setState({
      typeFilter: 'filterWeek',
      datas: this.state.filterWeekData
    })
  }

  handleFilterMonth() {
    this.setState({
      typeFilter: 'filterMonth',
      datas: this.state.filterMonthData
    })
  }

  render() {
    return (
      <div className="Table1" >
        <h4>{this.props.Table.name}</h4>
        <div className="col-12">
          <div className="btn-group mb-2" role="group" aria-label="DayMonthYear">
            <button type="button"
              className="btn btn-secondary"
              onClick={this.handleFilterDay.bind(this)}
            >
              Last 24 hours
            </button>
            <button type="button"
              className="btn btn-secondary"
              onClick={this.handleFilterWeek.bind(this)}
            >
              Last 7 days
            </button>
            <button type="button"
              className="btn btn-secondary"
              onClick={this.handleFilterMonth.bind(this)}
            >
              Last Month
            </button>
          </div>

          <AreaChart width={1024} height={320} data={this.state.datas}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorHumid" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="timestamp"
              reversed={false}
              tickFormatter={this.formatXAxis}
              domain={['dataMin', 'dataMax']}
            />
            <YAxis 
              domain={[0, 100]}
            />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              name="Temperature"
              type="monotone"
              dataKey="desired.temperature.celsius.value"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorTemp)" />
            <Area
              name="Humidity"
              type="monotone"
              dataKey="desired.humidity.value"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorHumid)" />
          </AreaChart>
        </div>
      </div>
    )
  }
}

export default ChartDB