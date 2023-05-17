import css from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({title, children}) => (
    <div className={css.section}>
    <h1 className={css.title}>{title}</h1>
    {children}
    </div>
    
)

export default Section;

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  }