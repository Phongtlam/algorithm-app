import classnames from "classnames";
import { Link } from "react-router-dom";

const Button = ({ children, onClick, className, type, size, href }) => {
  const ChildButton = () => (
    <button
      onClick={onClick}
      className={classnames(
        "App-button",
        {
          "App-button-danger": type === "danger",
          "App-button-small": size === "small",
        },
        className
      )}
    >
      {children}
    </button>
  );

  if (type === "link") {
    return (
      <Link className="button-link" to={href}>
        <ChildButton />
      </Link>
    );
  }

  return <ChildButton />;
};

export default Button;
