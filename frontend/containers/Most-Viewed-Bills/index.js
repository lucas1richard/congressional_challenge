import React from 'react';
import H1 from 'components/H1';
import axios from 'axios';
// import PropTypes from 'prop-types';

class MostViewedBills extends React.Component { // eslint-disable-line
  static propTypes = {};

  componentDidMount() {
    axios.get('/api/congress/rss/most-viewed-bills.xml')
      .then(res => console.log(res));
  }

  render() {
    return (
      <div>
        <H1>MostViewedBills</H1>
      </div>
    );
  }
}

export default MostViewedBills;
