import PropTypes from 'prop-types';
import { FeedbackList, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => {
        return (
          <li key={option}>
            <FeedbackBtn onClick={() => onLeaveFeedback(option)}>
              {option}
            </FeedbackBtn>
          </li>
        );
      })}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
