import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EditFour = ({
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
          id="105.编辑、修改"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编辑、修改"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.9146623,0.517411157 L23.4825889,5.08533769 C24.1724704,5.77521921 24.1724704,6.89373819 23.4825889,7.58361971 L7.06620858,24 L0,24 L0,16.9337915 L16.4163803,0.517411157 C17.1062618,-0.172470386 18.2247807,-0.172470386 18.9146623,0.517411157 Z M22.9651778,22.2334479 L22.9651778,24 L12.3658649,24 L12.3658649,22.2334479 L22.9651778,22.2334479 Z M13.4310959,5.99921104 L1.76655213,17.665144 L1.76655213,22.2334479 L6.33132283,22.2334479 L17.9976331,10.5657484 L13.4310959,5.99921104 Z M22.9651778,17.8170675 L22.9651778,19.5836197 L17.6655213,19.5836197 L17.6655213,17.8170675 L22.9651778,17.8170675 Z M17.6655213,1.76655214 L14.6800482,4.7502587 L19.2465855,9.31679594 L22.2334479,6.33447867 L17.6655213,1.76655214 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EditFour.displayName = 'EditFour';
export default EditFour;
