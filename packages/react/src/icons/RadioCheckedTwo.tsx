import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RadioCheckedTwo = ({
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
          id="212.移动复选选中"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="移动复选选中"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M15.8226781,7.50735633 L10.2538502,13.8717308 L8.22004317,11.1599882 C7.9218112,10.7623456 7.35769341,10.6817574 6.96005078,10.9799893 C6.56240817,11.2782212 6.48181992,11.8423391 6.78005187,12.2399816 L9.48003557,15.8399597 C9.82324056,16.2975665 10.5006759,16.3230937 10.8773461,15.8926135 L17.1773081,8.69265739 C17.50462,8.31858669 17.4667144,7.75000382 17.0926436,7.42269196 C16.7185729,7.09538011 16.14999,7.13328563 15.8226781,7.50735633 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RadioCheckedTwo.displayName = 'RadioCheckedTwo';
export default RadioCheckedTwo;
