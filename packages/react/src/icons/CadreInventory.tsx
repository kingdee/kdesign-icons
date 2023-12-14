import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CadreInventory = ({
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
          id="769.干部盘点"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 1.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.9756375,24.4180852 L28,28.4424477 L26.9318357,29.510612 L22.9074732,25.4862495 C21.6054238,26.5517506 19.9410376,27.1910159 18.1273439,27.1910159 C13.9559037,27.1910159 10.574284,23.8093962 10.574284,19.6379559 C10.574284,15.4665157 13.9559037,12.084896 18.1273439,12.084896 C22.2987842,12.084896 25.6804039,15.4665157 25.6804039,19.6379559 C25.6804039,21.4516496 25.0411386,23.1160358 23.9756375,24.4180852 Z M24.0861599,12.8082419 C22.4929733,11.4170589 20.4085795,10.574284 18.1273439,10.574284 C13.1216169,10.574284 9.06367197,14.6322289 9.06367197,19.6379559 C9.06367197,21.9166975 9.9046055,23.9990278 11.2930679,25.5915437 L1.50669649,25.5915437 C0.67457134,25.5915437 0,24.9222036 0,24.0848472 L0,3.01208177 C0,2.17995662 0.66934009,1.50538528 1.50669649,1.50538528 L4.53183599,1.50538528 L4.53183599,6.04244798 L9.06367197,6.04244798 L9.06367197,1.50538528 L15.10612,1.50538528 L15.10612,6.04244798 L19.6379559,6.04244798 L19.6379559,1.50538528 L22.5794619,1.50538528 C23.4115886,1.50538528 24.0861599,2.17472537 24.0861599,3.01208177 L24.0861599,12.8082419 Z M6.04244798,0 L7.55305998,0 L7.55305998,4.53183599 L6.04244798,4.53183599 L6.04244798,0 Z M16.6167319,0 L18.1273439,0 L18.1273439,4.53183599 L16.6167319,4.53183599 L16.6167319,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CadreInventory.displayName = 'CadreInventory';
export default CadreInventory;
