import React, { useState } from "react";
import { GlobalStyle } from './GlobalStyles';
import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export const App = () => {
  const [feedback, setFedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const { good, neutral, bad } = feedback;

  const addFeedback = property => {
    setFedback(prevState => ({
      ...prevState,
      [property]: prevState[property] + 1,
    }));
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return total > 0 ? Math.round(100 / total * good) : 0;
  };

  const keys = Object.keys(feedback);

  return (
    <Box as="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx="auto"
      mt="350px"
      width="250px"
      p={5}
      bg="maybeYellow"
      border="normal"
      borderRadius="sm"
      borderColor="almostDarkGreen"
      boxShadow="shadow"
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
      <GlobalStyle />
    </Box>
  );
};

/* <div
  style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101'
  }}
>
  React homework template
</div> */