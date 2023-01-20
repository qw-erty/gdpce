import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-radius6",
  CircleBorder26: "rounded-radius26",
  RoundedBorder10: "rounded-radius10",
};
const variants = {
  FillBluegray100: "bg-bluegray_100 text-black_900",
  FillBlack900ba: "bg-black_900_ba text-white_A700",
  OutlineBlack9003f: "bg-blue_400 shadow-bs1 text-white_A700",
  FillBlue400: "bg-blue_400 text-white_A700",
  OutlineBlue4003f: "bg-blue_400 shadow-bs text-white_A700",
  OutlineBlue400:
    "bg-gray_50 border border-blue_400 border-solid text-blue_400",
};
const sizes = {
  sm: "p-[6px]",
  md: "p-[9px]",
  lg: "pl-[6px] py-[9px]",
  xl: "p-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "CircleBorder26",
    "RoundedBorder10",
  ]),
  variant: PropTypes.oneOf([
    "FillBluegray100",
    "FillBlack900ba",
    "OutlineBlack9003f",
    "FillBlue400",
    "OutlineBlue4003f",
    "OutlineBlue400",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillBlue400",
  size: "xl",
};

export { Button };
