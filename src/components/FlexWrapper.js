import classnames from "classnames";

const FlexWrapper = ({
  children,
  className,
  size = "100",
  justifyContent = "space-around",
  direction = "row",
}) => {
  return (
    <div
      className={classnames(
        `height-100 flex width-${size} flex-${direction}`,
        justifyContent,
        className
      )}
    >
      {children}
    </div>
  );
};

export default FlexWrapper;
