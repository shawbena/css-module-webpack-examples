import styles from './index.css';

import React, { Component } from 'react';

export default class StyleVariantA extends Component {

  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>Style Variant A</p>
      </div>
    );
  }

};
