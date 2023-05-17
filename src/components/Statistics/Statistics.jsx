import css from './Statistics.module.css';
import PropTypes from 'prop-types';


const Statistics = ({good, neutral, bad, total, positivePercentage}) =>  (
         <div>
                <p className={css.stat}>Good: {good}</p>
                <p className={css.stat}>Neutral: {neutral}</p>
                <p className={css.stat}>Bad: {bad}</p>
                <p className={css.stat}>Total: {total}</p>
                <p className={css.stat}>Positive feedback: {good && positivePercentage}</p>
        </div>
        )

export default Statistics;

Statistics.propTypes = {
        good: PropTypes.number, 
        neutral: PropTypes.number, 
        bad: PropTypes.number, 
        total: PropTypes.number, 
        positivePercentage: PropTypes.string,

}