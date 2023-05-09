import { Component } from "react";
import PropTypes from "prop-types";

class Feedback extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0 
        }
    }
    
    static defaultProps = {
    step: 1, 
    };

    static propTypes = {
        step: PropTypes.number,
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number 
    }
    

    handleIncrementGood = () => {
        this.setState((prevState) => {
            return {
      good: prevState.good + this.props.step,
  }
})
    }
      handleIncrementNeutral = () => {
        this.setState((prevState) => {
            return {
      neutral: prevState.neutral + this.props.step,
  }
})
    }
      handleIncrementBad = () => {
        this.setState((prevState) => {
            return {
      bad: prevState.bad + this.props.step, 
  }
})
    }

    render() {
        return (
            <div>
                <h2>Please leave feedback</h2>
                <button onClick={this.handleIncrementGood}>Good</button>
                <button onClick={this.handleIncrementNeutral}>Neutral</button>
                <button onClick={this.handleIncrementBad}>Bad</button>
                <h2>Statistics</h2>
                <div>
                    <p>Good: {this.state.good }</p>
                    <p>Neutral:{this.state.neutral }</p>
                    <p>Bad:{this.state.bad }</p>
                    <p>Total:</p>
                    <p>Positive feedback:</p>
                </div>
            </div>
        )
    }
}
export default Feedback;