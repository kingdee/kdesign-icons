import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EditSolid = ({
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
          id="17.编辑，修改"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编辑，修改"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12.1774834,4.7558499 L19.2441501,11.8216336 L7.06620858,24 L0,24 L0,16.9337915 L12.1774834,4.7558499 Z M22.9651778,22.2334479 L22.9651778,24 L12.3658649,24 L12.3658649,22.2334479 L22.9651778,22.2334479 Z M22.9651778,17.8170675 L22.9651778,19.5836197 L17.6655213,19.5836197 L17.6655213,17.8170675 L22.9651778,17.8170675 Z M18.9146623,0.517411157 L23.4825889,5.08533769 C24.1724704,5.77521921 24.1724704,6.89373819 23.4825889,7.58361971 L20.4927152,10.5730684 L13.4269316,3.50640177 L16.4163803,0.517411157 C17.1062618,-0.172470386 18.2247807,-0.172470386 18.9146623,0.517411157 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EditSolid.displayName = 'EditSolid';
export default EditSolid;
