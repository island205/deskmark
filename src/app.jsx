import React from 'react';
import ReactDOM from 'react-dom';
import DeskMark from 'components/desk-mark/desk-mark';

import 'node_modules/bootstrap/scss/bootstrap.scss';

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<DeskMark />, app);
