import PropTypes from 'prop-types';
import css from './button.module.scss';

const Button = (props) => {
  const { children, className, extraClasses, ...rest } = props;
  return (
    <button
      type="button"
      className={className || `${css.button} ${extraClasses || ''}`}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.object || PropTypes.string,
  extraClasses: PropTypes.object || PropTypes.string,
};

Button.defaultProps = {
  className: '',
  extraClasses: '',
};

export default Button;
