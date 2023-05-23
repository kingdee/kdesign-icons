import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Pass = ({
  size = '1em',
  color = 'currentColor',
  rotate = 0,
  spin = false,
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="1364-通过"
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
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M17.664558,7.08532603 C17.2651427,6.74132355 16.6673764,6.79202704 16.3294095,7.19857544 L16.3294095,7.19857544 L10.1103245,14.6787906 L7.67517463,11.7041186 L7.60940725,11.631565 C7.26631192,11.2896334 6.71772395,11.2610271 6.34090044,11.5806548 C5.93895538,11.9215909 5.88464857,12.5296342 6.2196028,12.9387575 L6.2196028,12.9387575 L9.37748596,16.7958927 L9.4431289,16.8683806 C9.83050749,17.2551249 10.4693146,17.2334904 10.8284774,16.8014449 L10.8284774,16.8014449 L17.7758204,8.44431876 L17.8346542,8.36583884 C18.1061949,7.96274803 18.0390098,7.40782843 17.664558,7.08532603 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Pass.displayName = 'Pass';
export default Pass;
