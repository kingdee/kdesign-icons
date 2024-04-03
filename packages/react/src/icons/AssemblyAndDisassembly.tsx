import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AssemblyAndDisassembly = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
        width={size}
        height={size}
      >
        <path
          d="M900 200C927.614235 200 950 222.385763 950 250L950 350C839.54305 350 750 439.54305 750 550C750 660.45695 839.54305 750 950 750L950 900C950 927.614235 927.614235 950 900 950L250 950C222.385763 950 200 927.614235 200 900L200 750L200 325L200 250C200 222.385763 222.385763 200 250 200L900 200zM325 350C311.192882 350 300 361.192882 300 375L300 725C300 738.80712 311.192882 750 325 750C338.807119 750 350 738.80712 350 725L350 375C350 361.192882 338.807119 350 325 350zM150.012174 356.297742L149.961933 743.689325C63.719888 721.47395 0 643.17826 0 550C0 456.803644 63.744636 378.495647 150.012174 356.297742zM550 0C643.196355 0 721.504355 63.744636 743.70226 150.012174L356.297742 150.012174C378.495647 63.744636 456.803644 0 550 0z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
AssemblyAndDisassembly.displayName = 'AssemblyAndDisassembly';
export default AssemblyAndDisassembly;
