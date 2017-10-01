import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Picker from 'react-month-picker';
import 'react-select/dist/react-select.css';
import 'react-month-picker/css/month-picker.css';

import airports from '../data/airports';
import MonthBox from './MonthBox';
import './index.css';

class Form extends React.Component {
  state = {
  }

  handleOriginChange = (origin) => this.setState({origin})

  handleDestChange = (dest) => this.setState({dest})

  handleMonthChange = (year, month) => {
    this.setState({monthObject: { year, month }})
  }

  handleClickMonthBox = () => this.refs.pickAMonth.show()

  renderMonth = () => {
    if (this.state.monthObject) {
      return `${this.state.monthObject.month}/${this.state.monthObject.year}`
    }
    return `Click me to select a month!`;
  }

  render() {
    return (
      <div className="form">
        Data Inputs
        <div className="form-component">
          <label>Origin</label>
          <Select
            name="origin"
            value={this.state.origin}
            options={airports}
            onChange={this.handleOriginChange}
          />
        </div>
        <div className="form-component">
          <label>Destination</label>
          <Select
            name="destination"
            value={this.state.dest}
            options={airports}
            onChange={this.handleDestChange}
          />
        </div>
        <div className="form-component">
          <label>Pick a Month</label>
          <Picker
            ref="pickAMonth"
            years={[2014,2015,2016,2017]}
            value={this.state.monthObject || {}}
            lang={['Jan', 'Feb', 'Mar', 'Spr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
            onChange={this.handleMonthChange}
          >
            <input
              className="month-display"
              type="text"
              value={this.renderMonth()}
              onClick={this.handleClickMonthBox}
              readOnly
            />
          </Picker>
        </div>
      </div>
    )
  }
}

Form.propTypes = {
};

export default Form;
