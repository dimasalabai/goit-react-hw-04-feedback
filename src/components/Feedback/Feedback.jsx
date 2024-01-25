import { useState } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const optionsFeedback = ['good', 'neutral', 'bad'];
const Feedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveFeedback = optionsName => {
    setFeedback(prevFeedback => {
      return {
        ...prevFeedback,
        [optionsName]: prevFeedback[optionsName] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    const values = Object.values(feedback);
    const total = values.reduce((acum, value) => acum + value, 0);
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    if (!good) {
      return 0;
    }
    const pstvFeedbackPercentage = Number(
      ((good / countTotalFeedback()) * 100).toFixed(2)
    );
    return pstvFeedbackPercentage;
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();
  const pstvFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsFeedback}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      {total ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={pstvFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
};

/*
class Feedback extends Component {
  static optionsFeedback = ['good', 'neutral', 'bad'];

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = optionsName => {
    this.setState(prevState => {
      return {
        [optionsName]: prevState[optionsName] + 1,
      };
    });
  };

  countTotalFeedback() {
    // const { good, neutral, bad } = this.state;
    // const total = good + neutral + bad;
    const values = Object.values(this.state);
    const total = values.reduce((acum, value) => acum + value, 0);
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    if (!good) {
      return 0;
    }
    const pstvFeedbackPercentage = Number(
      ((good / this.countTotalFeedback()) * 100).toFixed(2)
    );
    return pstvFeedbackPercentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const pstvFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Feedback.optionsFeedback}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        {total ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={pstvFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </>
    );
  }
} */

export default Feedback;
