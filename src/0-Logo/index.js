import React from 'react';
import { render } from 'react-dom';

import styles from './index.css';

let div = document.createElement('div');
document.body.appendChild(div);

render(<div className={styles.logo} />, div);