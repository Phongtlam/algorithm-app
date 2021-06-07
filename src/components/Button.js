import classnames from "classnames";

const Button = ({ children, onClick, className, type, size }) => {
  return (
    <button onClick={onClick} className={classnames("App-button", {
      'App-button-danger': type === 'danger',
      'App-button-small': size === 'small'
    }, className)}>
      {children}
    </button>
  );
};

export default Button;
