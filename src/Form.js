import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import airports from './data/airports';

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        Data Inputs
        <div className="form-component">
          <label>Origin</label>
          <Select
            name="origin"
            options={airports}
          />
        </div>
      </div>
    )
  }
}

Form.propTypes = {
};

export default Form;
