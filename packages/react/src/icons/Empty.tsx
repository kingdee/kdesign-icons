import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Empty = ({
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
          id="1243-清空"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,24 C5.37258299,24 -5.75539617e-16,18.627417 -5.75539617e-16,12 C-5.75539617e-16,5.37258299 5.37258299,-5.75539617e-16 12,-5.75539617e-16 C18.627417,-5.75539617e-16 24,5.37258299 24,12 C24,18.627417 18.627417,24 12,24 Z M12,10.9393398 L8.81848175,7.75782158 C8.52533322,7.46467305 8.04168668,7.47303195 7.75735932,7.75735932 C7.4644661,8.05025254 7.47182622,8.53248639 7.75782158,8.81848175 L10.9393398,12 L7.75782158,15.1815183 C7.46467305,15.4746668 7.47303195,15.9583134 7.75735932,16.2426407 C8.05025254,16.535534 8.53248639,16.5281738 8.81848175,16.2421784 L12,13.0606602 L15.1815183,16.2421784 C15.4746668,16.5353269 15.9583134,16.526968 16.2426407,16.2426407 C16.535534,15.9497475 16.5281738,15.4675136 16.2421784,15.1815183 L13.0606602,12 L16.2421784,8.81848175 C16.5353269,8.52533322 16.526968,8.04168668 16.2426407,7.75735932 C15.9497475,7.4644661 15.4675136,7.47182622 15.1815183,7.75782158 L12,10.9393398 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Empty.displayName = 'Empty';
export default Empty;
