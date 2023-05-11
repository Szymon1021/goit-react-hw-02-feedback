import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const Feedback = ({ options, onLeaveFeedback }) => {
  const optionsFeedback = options.map(name => {
    return (
      <button onClick={() => onLeaveFeedback(name)} key={nanoid()}>
        {name}
      </button>
    );
  });

  return <div>{optionsFeedback}</div>;
};
Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
