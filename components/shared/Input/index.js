import css from "./input.module.scss";

const Input = (props) => {
  const { label, className, inputClass, ...rest } = props;
  return (
    <div className={css["input-container"]}>
      {label && (
        <label className={css["label"]} htmlFor="email">
          {label}
        </label>
      )}
      <input
        className={
          className
            ? className
            : `${css["input"]} ${inputClass ? inputClass : ""}`
        }
        {...rest}
      />
    </div>
  );
};

export default Input;
