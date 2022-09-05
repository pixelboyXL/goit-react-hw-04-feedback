import React, { useState } from "react";
import { GlobalStyle } from './GlobalStyles';
import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0);

  const addFeedback = property => {
    switch (property) {
      case "good":
        return setGood(prevState => prevState + 1);
      case "neutral":
        return setNeutral(prevState => prevState + 1);
      case "bad":
        return setBad(prevState => prevState + 1);
      default:
        throw new Error(`Unsupported type of ${property}`);
    };
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return total > 0 ? Math.round(100 / total * good) : 0;
  };

  const keys = ["good", "neutral", "bad"];

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