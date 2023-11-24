import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionsNames = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const onLeaveFeedback = option => {
    option === 'good' && setGood(prevState => prevState + 1);
    option === 'neutral' && setNeutral(prevState => prevState + 1);
    option === 'bad' && setBad(prevState => prevState + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <Section title="Please leave a feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={optionsNames}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
