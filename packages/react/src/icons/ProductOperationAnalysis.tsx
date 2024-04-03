import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProductOperationAnalysis = ({
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
          id="1877.产品运营分析"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M16,2 C16.5522847,2 17,2.44771525 17,3 L17,5 L29,5 C29.5522847,5 30,5.44771525 30,6 L30,24 C30,24.5522847 29.5522847,25 29,25 L22.66,25 L25.2320508,29.4544827 C25.5081932,29.9327753 25.344318,30.5443657 24.8660254,30.8205081 C24.3877328,31.0966505 23.7761424,30.9327753 23.5,30.4544827 L20.351,25 L11.381,25 L8.23205081,30.4544827 C7.95590843,30.9327753 7.34431803,31.0966505 6.8660254,30.8205081 C6.38773278,30.5443657 6.22385763,29.9327753 6.5,29.4544827 L9.071,25 L3,25 C2.44771525,25 2,24.5522847 2,24 L2,6 C2,5.44771525 2.44771525,5 3,5 L15,5 L15,3 C15,2.44771525 15.4477153,2 16,2 Z M10,14 C9.44771525,14 9,14.4477153 9,15 L9,20 C9,20.5522847 9.44771525,21 10,21 C10.5522847,21 11,20.5522847 11,20 L11,15 C11,14.4477153 10.5522847,14 10,14 Z M16,10 C15.4477153,10 15,10.4477153 15,11 L15,20 C15,20.5522847 15.4477153,21 16,21 C16.5522847,21 17,20.5522847 17,20 L17,11 C17,10.4477153 16.5522847,10 16,10 Z M22,12 C21.4477153,12 21,12.4477153 21,13 L21,20 C21,20.5522847 21.4477153,21 22,21 C22.5522847,21 23,20.5522847 23,20 L23,13 C23,12.4477153 22.5522847,12 22,12 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProductOperationAnalysis.displayName = 'ProductOperationAnalysis';
export default ProductOperationAnalysis;
