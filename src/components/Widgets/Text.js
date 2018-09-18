import React from 'react'
import { Link } from 'react-router-dom'

class Text extends React.Component {
  render() {
    const payload = this.props.payload
    const widgetId = this.props.widgetId
    return (
      <div className="Text col-xl-3 col-lg-4 col-md-6 col-sm-12 text-body mb-3">
        <div className="card border-white shadow rounded-0 border-10 widgetCard">
          <h5 className="card-header">{payload.title}</h5>
          <div className="card-body">
            <textarea name="text" 
              readOnly 
              cols="16" 
              rows="5"
              className="form-control"
              defaultValue={payload.text}
            />

          </div>
          <div className="card-footer text-right">
            <a href="/#" data-toggle="modal" data-target=".ModalCreate"><i className="fas fa-cog text-dark mr-3"></i></a>
            <Link to={`/DeleteWidget/` + widgetId}><i className="fas fa-trash-alt text-danger"></i></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Text