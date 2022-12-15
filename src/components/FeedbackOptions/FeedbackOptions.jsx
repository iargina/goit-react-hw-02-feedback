import React, { Component } from 'react';
import css from 'components/FeedbackOptions/FeedBackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.buttonDiv}>
        <button className={css.button} onClick={ev => onLeaveFeedback('good')}>
          Good
        </button>
        <button
          className={css.button}
          onClick={ev => onLeaveFeedback('neutral')}
        >
          Neutral
        </button>
        <button className={css.button} onClick={ev => onLeaveFeedback('bad')}>
          Bad
        </button>
      </div>
    );
  }
}
