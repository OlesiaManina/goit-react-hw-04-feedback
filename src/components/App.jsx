import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleGoodClick = () => {
    this.setState ((prevState) => {
      return ({
        good: prevState.good + 1 
      })
    })
  }

  handleNeutralClick = () => {
    this.setState (prevState => ({
        neutral: prevState.neutral + 1 
    }))
  }

  handleBadClick = () => {
    this.setState (prevState => ({
        bad: prevState.bad + 1 
    }))
  }


  render() {
    const {good, neutral, bad} = this.state;
    const countTotalFeedback = Number(good + neutral + bad);
    const countPositiveFeedbackPercentage = `${Math.round(Number(good / (good + neutral + bad) * 100))}%`;
  

    return (
    <>
    <Section title="Please leave feedback">
     <FeedbackOptions options={this.state} onLeaveFeedback={[this.handleGoodClick, this.handleNeutralClick, this.handleBadClick]}/>
    </Section>
    <Section title="Statistics">
      {countTotalFeedback === 0? 
      <Notification message="There is no feedback"/>
      : <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}/> }
    </Section>
    </>
  )
  }}

  