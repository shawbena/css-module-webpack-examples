import React, { Component } from 'react';
import { render } from 'react-dom';

import GlobalSelectors from './GlobalSelectors';

import js from '!!raw-loader!./GlobalSelectors.js';
import css from '!!raw-loader!./GlobalSelectors.css';
import Snippet from '../shared/Snippet';

class GlobalSelectorsDemo extends Component {

  render() {
    const files = [
      { name: 'GlobalSelectors.js', source: js },
      { name: 'GlobalSelectors.css', source: css }
    ];

    return (
      <Snippet files={files}>
        <GlobalSelectors />
      </Snippet>
    );
  }

};

let div = document.createElement('div');
document.body.appendChild(div);

render(<GlobalSelectorsDemo />, div);