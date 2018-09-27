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
        [
          1537760321379,
          4
        ],
        [
          1537761603571,
          5
        ],
        [
          1537760727922,
          3
        ],
        [
          1537760732274,
          4.666666666666667
        ],
        [
          1537760787525,
          5
        ],
        [
          1537760790901,
          5
        ],
        [
          1537760844203,
          5.5
        ],
        [
          1537760852008,
          6
        ],
        [
          1537760902338,
          6
        ],
        [
          1537760910098,
          6
        ],
        [
          1537760960424,
          6
        ]
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
    switch (this.state.typeFilter) {
      case 'filterDay':
        return moment(tickItem).format('HH:mm')
      case 'filterWeek':
        return moment(tickItem).format('DD-MM-YY')
      case 'filterMonth':
        return moment(tickItem).format('DD-MM-YY')
      default:
        return 0
    }
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
          <AreaChart width={payload.width} height={200} data={this.state.datas}
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
              name="Temperature"
              type="monotone"
              dataKey="[1]"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#color)" />
          </AreaChart>
        </div>
      </div>
    )
  }
}

export default LineChart