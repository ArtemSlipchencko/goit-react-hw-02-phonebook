import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component { 
  
  render () {

    const {filter, handleFilter} = this.props;

    return (

        <div className="input">
                <input type="text" onChange={handleFilter} value={filter} />
        </div>

    );
  };
};

export default Filter;