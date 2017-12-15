import React, { Component } from 'react';

import StyleVariantA from './StyleVariantA';
import StyleVariantB from './StyleVariantB';

export default class ClassComposition extends Component {

  render() {
    return (
      <div>
        <StyleVariantA />
        <br />
        <StyleVariantB />
      </div>
    );
  }

};
