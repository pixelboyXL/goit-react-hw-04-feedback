import PropTypes from 'prop-types';
import { Notification } from "components/Notification/Notification";

export const Statistics = ({ good, neutral, bad, total = 0, positivePercentage = 0 }) => {
    return (total > 0
        ?
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </ul>
        :
        <Notification message="There is no feedback" />
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};