import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) =>  (
    <div className={css.buttonsWrap}>
    {Object.keys(options).map((option, index) => (
    <button type="button" key={option} className={css.button} onClick={onLeaveFeedback[index]}>{option}</button>
))}
    </div> 
)
       

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    }),
    onLeaveFeedback: PropTypes.arrayOf(PropTypes.func),
  }

