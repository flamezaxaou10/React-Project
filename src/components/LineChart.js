import React from 'react'
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

class LineChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: [
        {timestamp:Date.now(), temp: 20, humi:60},
        {timestamp:Date.now(), temp: 25, humi:50},
        {timestamp:Date.now(), temp: 22, humi:55},
        {timestamp:Date.now(), temp: 23, humi:50},
        {timestamp:Date.now(), temp: 23.5, humi:80},
        {timestamp:Date.now(), temp: 24.5, humi:70},
        {timestamp:Date.now(), temp: 24, humi:50},
      ],
      typeFilter: 'filterMonth',
      filterDayData: [],
      filterWeekData: [],
      filterthData: []
    }
  }

  componentDidMount() {
    
  }

  formatXAxis = (tickItem) => {
    if (this.state.typeFilter === 'filterDay')
      return moment(tickItem).format('HH:mm')
    else if (this.state.typeFilter === 'filterMonth')
      return moment(tickItem).format('DD-MM-YY')
  }

  handleFilterDay() {
    this.setState({
      typeFilter: 'filterDay'
    })
  }

  handleFilterWeek() {
    this.setState({
      typeFilter: 'filterWeek'
    })
  }

  handleFilterMonth() {
    this.setState({
      typeFilter: 'filterMonth'
    })
  }

  render() {
    const { payload, Table } = this.props
    return (
      <div className="Table1" >
        <h4>{Table.name}</h4>
        <div className="col-12">
          <div className="btn-group mb-2" role="group" aria-label="DayMonthYear">
            <button type="button"
              className="btn btn-secondary btn-sm"
              onClick={this.handleFilterDay.bind(this)}
            >
              Last 24 hours
            </button>
            <button type="button"
              className="btn btn-secondary btn-sm"
              onClick={this.handleFilterWeek.bind(this)}
            >
              Last 7 days
            </button>
            <button type="button"
              className="btn btn-secondary btn-sm"
              onClick={this.handleFilterMonth.bind(this)}
            >
              Last Month
            </button>
          </div>
          {/* <LineChart width={1024} height={320} data={this.state.datas} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <Line
              type="monotone"
              name="Temperature"
              dataKey="desired.temperature.celsius.value"
              stroke={this.props.Table.color[0]}
              dot={false}
            />
            <Line
              type="monotone"
              name="Humidity"
              dataKey="desired.humidity.value"
              stroke={this.props.Table.color[1]}
              dot={false}
            />
            <CartesianGrid stroke="grey" strokeDasharray="2 2" />
            <XAxis
              dataKey="timestamp"
              reversed={true}
              tickFormatter={this.formatXAxis}
              domain={[0, 'dataMax']}
              minTickGap={70}
            />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart> */}
          
          <AreaChart width={payload.width} height={200} data={this.state.datas}
            margin={{top:0, bottom: 0, left: 0, right: 0}}
          >
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
              name="Temperature"
              type="monotone"
              dataKey="temp"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorTemp)" />
            <Area
              name="Humidity"
              type="monotone"
              dataKey="humi"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorHumid)" />
          </AreaChart>
        </div>
      </div>
    )
  }
}

export default LineChart