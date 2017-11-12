import React from 'react';
import PropTypes from 'prop-types';
import H1 from 'components/H1';
import axios from 'axios';
// import PropTypes from 'prop-types';

const Li = ({ el }) => (<li>{el.innerText}</li>);

Li.propTypes = {
  el: PropTypes.node
};

class MostViewedBills extends React.Component { // eslint-disable-line
  static propTypes = {};
  constructor() {
    super();
    this.state = { hml: <ol><li>Test</li></ol> };
  }

  componentDidMount() {
    axios.get('/api/congress/rss/most-viewed-bills.xml')
      .then(res => parser.parseFromString(res.data, 'text/xml'))
      .then(xml => xml.querySelectorAll('description'))
      .then((desc) => {
        const hml = desc[1].firstChild.data;
        return parser.parseFromString(hml, 'text/html');
      })
      .then((html) => {
        console.log(html);
        console.log(html.body);
        console.log(html.body.firstElementChild.children);
        const nw = <ol>{[].slice.call(html.body.firstElementChild.children).map(ch => <Li el={ch} />)}</ol>;
        this.setState({ hml: nw });
      });
  }

  render() {
    return (
      <div>
        <H1>MostViewedBills</H1>
        {this.state.hml}
      </div>
    );
  }
}

const parser = new DOMParser();

export default MostViewedBills;
