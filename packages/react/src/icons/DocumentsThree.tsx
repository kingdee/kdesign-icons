import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DocumentsThree = ({
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
          d="M62.5 187.5C62.5 152.982203 90.482203 125 125 125L462.644316 125C478.514763 125 493.790863 131.0375 505.373113 141.887501L620.78125 250L875 250C909.517797 250 937.5 277.982203 937.5 312.5L937.5 812.5C937.5 847.017797 909.517797 875 875 875L125 875C90.482203 875 62.5 847.017797 62.5 812.5L62.5 187.5zM875 312.5L125 312.5L125 812.5L875 812.5L875 312.5zM462.644316 187.5L125 187.5L125 250L529.375 250L462.644316 187.5z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
DocumentsThree.displayName = 'DocumentsThree';
export default DocumentsThree;
