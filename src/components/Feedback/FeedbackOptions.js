import PropTypes from 'prop-types';
import { FeedbackOptionsList, FeedBackButton } from 'components/Feedback/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <FeedbackOptionsList>
            {options.map(option => (
                <li key={option}>
                    <FeedBackButton
                        type="button"
                        onClick={() => onLeaveFeedback(option)}
                    >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                    </FeedBackButton>
                </li>
            ))}
        </FeedbackOptionsList>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired,
    ).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};