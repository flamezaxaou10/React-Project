import React from 'react'
import WidgetStore from '../../store/WidgetStore'
import { Redirect } from 'react-router-dom'

class DeleteWidget extends React.Component {
  render () {
    WidgetStore.delWidgetToDB(this.props.match.params.widgetId)
    return <Redirect to='/' />
  }
}

export default DeleteWidget