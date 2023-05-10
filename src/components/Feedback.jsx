import { Component } from "react";
import PropTypes from "prop-types";

class Feedback extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
            
        }
    }
    
    static defaultProps = {
        step: 1,
        total: 0,
       percentage: 0,
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
        return isNaN(percentage) ? 0 : percentage;
    }

    render() {
        return (
            <div>
                <h2>Please leave feedback</h2>
                <button onClick={()=>this.handleIncrement('good')}>Good</button>
                <button onClick={()=>this.handleIncrement('neutral')}>Neutral</button>
                <button onClick={()=>this.handleIncrement('bad')}>Bad</button>
                <h2>Statistics</h2>
                <div>
                    <p>Good: {this.state.good }</p>
                    <p>Neutral:{this.state.neutral }</p>
                    <p>Bad:{this.state.bad }</p>
                    <p>Total:{this.countTotalFeedback() }</p>
                    <p>Positive feedback:{this.countPositiveFeedbackPercentage() + '%' }</p>
                </div>
            </div>
        )
    }
}
export default Feedback;