import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TobaccoLeafTax = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="602.烟叶税"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.0594879,8.84210527 C20.8967093,13.4355013 20.492189,17.396871 17.6954532,20.3590612 C17.5471947,20.5160907 15.7714869,16.8700955 13.835898,14.7368421 C12.2447499,12.9832042 10.4970576,11.755134 8.59282086,11.0526316 C11.4078879,13.7881722 13.5925034,16.9811548 15.1466673,20.631579 C15.9606348,22.5434279 16.2519169,25.4907964 16.0205135,29.4736842 L13.1076928,29.4736842 C13.1998816,24.9431872 13.1513345,22.7326609 12.9620518,22.8421053 C7.86461569,25.7894737 2.03897445,22.8421053 0.582564139,16.2105263 C-0.388376089,11.7894737 -0.145641032,6.38596491 1.31076928,0 C10.0492312,1.96491227 15.6321374,4.9122807 18.0594879,8.84210527 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TobaccoLeafTax.displayName = 'TobaccoLeafTax';
export default TobaccoLeafTax;
