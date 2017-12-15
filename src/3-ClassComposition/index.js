import React, { Component } from 'react';
import { render } from 'react-dom';

import ClassComposition from './ClassComposition';
import Snippet from '../shared/Snippet';

import js from '!!raw-loader!./StyleVariantA';
import css from '!!raw-loader!./StyleVariantA/index.css';
import layoutCss from '!!raw-loader!../shared/styles/layout.css';
import typographyCss from '!!raw-loader!../shared/styles/typography.css';


export default class ClassCompositionDemo extends Component {

  render() {
    const files = [
      { name: 'StyleVariantA.js', source: js },
      { name: 'StyleVariantA.css', source: css },
      { name: 'shared/styles/layout.css', source: layoutCss },
      { name: 'shared/styles/typography.css', source: typographyCss }
    ];

    return (
      <Snippet files={files}>
        <ClassComposition />
      </Snippet>
    );
  }

};

let div = document.createElement('div');
document.body.appendChild(div);

render(<ClassCompositionDemo />, div);