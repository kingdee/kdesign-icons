import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Freeze = ({
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
          d="M156.25 656.25L156.25 625L156.25 625C156.25 532.091775 223.824498 454.966422 312.505984 440.091447L312.5 187.5C277.982203 187.5 250 159.517797 250 125C250 90.482203 277.982203 62.5 312.5 62.5L687.5 62.5C722.017797 62.5 750 90.482203 750 125C750 159.517797 722.017797 187.5 687.5 187.5L687.525216 440.096684C776.19135 454.984513 843.75 532.102672 843.75 625L843.75 656.25C843.75 673.508897 829.758897 687.5 812.5 687.5L546.875 687.5L546.875 687.5L515.489131 923.940216C514.353591 932.494628 506.498331 938.508809 497.943922 937.373269C490.945797 936.444313 485.439825 930.938341 484.510869 923.940216L453.125 687.5L187.5 687.5C170.241102 687.5 156.25 673.508897 156.25 656.25z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
Freeze.displayName = 'Freeze';
export default Freeze;
