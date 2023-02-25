import React, { Component } from 'react';

import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

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

  countTotalFeedback = total => {
    // return this.state.good + this.state.neutral + this.state.bad;
    return Object.values(this.state).reduce((acc, total) => acc + total, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    return (
      <div>
        <Section title={'Please leave your feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onNumberFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title={'Statistics'}>
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message={'There is no feedback'}></Notification>
          )}
        </Section>
      </div>
    );
  }
}
