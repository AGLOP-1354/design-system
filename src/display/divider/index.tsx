import React from 'react';
import classNames from 'classnames';

import classes from './divider.module.css';

type Props = {
  noMargin?: boolean;
  color?: string;
  type?: 'horizontal' | 'vertical';
};

const Divider = ({ color, noMargin, type = 'horizontal' }: Props) => (
  <div
    className={classNames(classes.Divider, {
      [classes.noMargin]: noMargin,
      [classes.VerticalDivider]: type === 'vertical',
    })}
    style={{ ...(color ? { backgroundColor: color } : {}) }}
  />
);

export default Divider;
