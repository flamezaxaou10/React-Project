import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from '../components/Main'
import ChartDB from '../components/ChartDB'
import TypeA from '../components/TypeA'
import TypeB from '../components/TypeB'


export default () => (
  <Switch>
    <Route exact path="/" component={Main}/>
    <Route exact path="/ChartDB" component={ChartDB}/>
    <Route exact path="/TypeA/:machineId" component={TypeA} />
    <Route exact path="/TypeB/:machineId" component={TypeB} />
  </Switch>
)