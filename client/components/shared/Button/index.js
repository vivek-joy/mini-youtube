import css from "./button.module.scss";

const Button = (props) => {
  const { children, className, extraClasses, ...rest } = props;
  return (
    <button
      className={
        className
          ? className
          : `${css["button"]} ${extraClasses ? extraClasses : ""}`
      }
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
