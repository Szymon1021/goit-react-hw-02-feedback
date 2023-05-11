import { Feedback } from "./Feedback";
import { Statistics } from "./Statistics";
import React, { Component } from "react";
import PropTypes from "prop-types";

export class App extends Component {

   constructor(props) {
        super(props);
        
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
            
        }
  }
  handleChange = evt => {
        const { name } = evt.target;
    this.setState(state =>({[name]: state[name]+1}));
      };
  static propTypes = {
        step: PropTypes.number,
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
        total: PropTypes.number,
        percentage: PropTypes.number,
    }
  
  handleIncrement = (type) => {
        switch (type) {
            case 'good':
                this.setState((prevState) => {
                    return {
                        good: prevState.good + this.props.step,
                    }
                })
                break;
            case 'neutral':
                this.setState((prevState) => {
                    return {
                        neutral: prevState.neutral + this.props.step,
                    }
                })
                break;
            case 'bad':
                this.setState((prevState) => {
                    return {
                        bad: prevState.bad + this.props.step,
                    }
                })
                break;
            default:
        }
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    }

    

    countTotalFeedback = () => {
        const total = this.state.good + this.state.neutral + this.state.bad;
            return total
        }
              
    
    countPositiveFeedbackPercentage = () => {
        const percentage = Math.round(this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad));
        return isNaN(percentage) ? 0 : percentage + '%';
    }

  render() {
    return (
      <div>
        <Feedback handleChange={this.handleIncrement} />
        <Statistics stats={this.state} positivePercentage={this.countPositiveFeedbackPercentage} total={this.countTotalFeedback} />
      </div>
    );
  };
}