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
       initialValue: 0,
    };

    static propTypes = {
        step: PropTypes.number,
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
        initialValue: PropTypes.number,
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
                    <p>Total:</p>
                    <p>Positive feedback:</p>
                </div>
            </div>
        )
    }
}
export default Feedback;