import { observable } from 'mobx'
import MicroGear from 'microgear'

class NETPIEMicrogear {
  @observable APPID = 'SmartOfficeAt418B'
  @observable KEY = 'qTshJZGevHkDRfj'
  @observable SECRET = 'ZkO8T2pbVK9lB8EqCsMpCZE3S'
  //@observable SUBSCRIBE = '/#'
  @observable microgear = null

  createDatasource() {
    if (this.APPID != null) {
      console.log(this.APPID, this.KEY, this.SECRET, this.SUBSCRIBE)
      this.microgear = MicroGear.create({
        key: this.KEY,
        secret: this.SECRET,
        alias: 'DataSource'
      })
    }
  }

  connectDatasource() {
    const microgear = this.microgear
    const that = this
    microgear.on('connected', function () {
      console.log('Connected...')
    })

    microgear.on('closed', function () {
      console.log('Closed...')
    })

    microgear.connect(that.APPID)
  }
}



export default new NETPIEMicrogear()