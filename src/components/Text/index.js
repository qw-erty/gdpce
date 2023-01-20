import React from "react";
const variantClasses = {
  h1: "font-semibold md:text-[48px] sm:text-[48px] text-[62px]",
  h2: "font-normal sm:text-[32px] md:text-[38px] text-[42px]",
  h3: "font-semibold sm:text-[24px] md:text-[26px] text-[28px]",
  h4: "font-semibold sm:text-[21px] md:text-[23px] text-[25px]",
  h5: "font-semibold sm:text-[20px] md:text-[22px] text-[24px]",
  h6: "font-semibold sm:text-[17px] md:text-[19px] text-[21px]",
  body1: "text-[20px]",
  body2: "text-[18px]",
  body3: "text-[17px]",
  body4: "font-medium text-[16.5px]",
  body5: "text-[16px]",
  body6: "text-[15px]",
  body7: "text-[14px]",
  body8: "font-normal text-[13.6px]",
  body9: "text-[13px]",
  body10: "font-light text-[12.5px]",
  body11: "text-[11px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
