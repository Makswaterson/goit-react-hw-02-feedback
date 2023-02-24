import React, { Component } from 'react';

import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onNumberFeedback = options => {
    this.setState(prevState => {
      return {
        [options]: prevState[options] + 1,
      };
    });
  };
  render() {
    return (
      <div
      //   style={{
      //     height: '100vh',
      //     display: 'flex',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 40,
      //     color: '#010101',
      //   }}
      >
        <Section title={'Please leave your feedback'}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          ></Statistics>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onNumberFeedback}
          ></FeedbackOptions>
        </Section>
      </div>
    );
  }
}
