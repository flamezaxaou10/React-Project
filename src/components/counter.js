import React from 'react'
import {observer} from 'mobx-react'

@observer
class Counter extends React.Component {
    increase = () => {
        this.props.counterStore.increase()
    }
    decrease = () => {
        this.props.counterStore.decrease()
    }
    render() {
        return (
            <div>
                <button onClick={this.increase}>+</button>
                <span>{this.props.counterStore.count}</span>
                <button onClick={this.decrease}>-</button>
            </div>
        )
    }
}
export default Counter