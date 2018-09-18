import React from 'react'
import WidgetStore from '../../store/WidgetStore'
import { Redirect } from 'react-router-dom'

class DeleteWidget extends React.Component {
  render () {
    const widgetId = this.props.match.params.widgetId
    WidgetStore.delWidgetToDB(widgetId)
    return <Redirect to='/' />
  }
}

export default DeleteWidget