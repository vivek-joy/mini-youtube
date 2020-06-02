import PropTypes from 'prop-types';
import css from './input.module.scss';

const Input = (props) => {
  const { label, className, inputClass, ...rest } = props;
  return (
    <div className={css['input-container']}>
      {label && (
        <label className={css.label} htmlFor="email">
          {label}
        </label>
      )}
      <input
        className={className || `${css.input} ${inputClass || ''}`}
        {...rest}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  inputClass: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Input.defaultProps = {
  label: '',
  className: '',
  inputClass: '',
};
export default Input;
