import React, { Component } from 'react';
import { render } from 'react-dom';
import ScopedSelectors from './ScopedSelectors';

import js from '!!raw-loader!./ScopedSelectors.js';
import css from '!!raw-loader!./ScopedSelectors.css';
import Snippet from '../shared/Snippet';

class ScopedSelectorsDemo extends Component {

  render() {
    const files = [
      { name: 'ScopedSelectors.js', source: js },
      { name: 'ScopedSelectors.css', source: css }
    ];

    return (
      <Snippet files={files}>
        <ScopedSelectors />
      </Snippet>
    );
  }

};

let div = document.createElement('div');
document.body.appendChild(div);

render(<ScopedSelectorsDemo />, div);