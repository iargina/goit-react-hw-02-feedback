import React, { Component } from 'react';
import css from './Notification.module.css';
export class Notification extends Component {
  render() {
    return (
      <div className={css.div}>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
