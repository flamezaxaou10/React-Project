import {observable} from 'mobx'

class CounterStore {
  @observable count = 0
  
  increase() {
    this.count = this.count + 1
  }
  decrease() {
    this.count = this.count - 1
  }
}

export default new CounterStore()