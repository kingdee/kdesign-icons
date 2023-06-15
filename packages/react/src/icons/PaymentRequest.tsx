import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PaymentRequest = ({
  size = '1em',
  fill = 'currentColor',
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
          id="606.付款申请"
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
              d="M17.5714286,11.1428822 C21.1218305,11.1428822 24,14.0210461 24,17.5714411 C24,21.1218362 21.1218305,24 17.5714286,24 C14.0210266,24 11.1428571,21.1218362 11.1428571,17.5714411 C11.1428571,14.0210461 14.0210266,11.1428822 17.5714286,11.1428822 Z M18.8453486,0 C19.3252493,0 19.7142857,0.389036407 19.7142857,0.868937143 L19.715322,10.6275605 C18.9011645,10.3989265 18.0299246,10.285741 17.1428571,10.285741 C13.3557617,10.285741 10.2857143,13.3330286 10.2857143,17.1428839 C10.2857143,19.1220156 10.7483315,20.8953681 11.9104541,22.2868413 L0.868937143,22.2857143 C0.389036407,22.2857143 0,21.8966779 0,21.4167771 L0,0.868937143 C0,0.389036407 0.389036407,0 0.868937143,0 L18.8453486,0 Z M17.9755162,14.0955695 L17.1183734,14.0955695 L17.1171429,17.1411679 L13.7142857,17.1428705 L13.7142857,18.0000134 L17.1171429,17.9983108 L17.1183734,20.9527125 L17.9755162,20.9527125 L17.9742857,17.9983108 L21.4285714,18.0000134 L21.4285714,17.1428705 L17.9742857,17.1411679 L17.9755162,14.0955695 Z M7.7390536,2.56855551 L5.57871566,4.21617276 L3.41837771,2.56855551 L2.58211628,3.19686284 L5.16058494,5.00637548 L5.33314286,5.136 L2.58211628,5.13706426 L2.58211628,5.99323381 L5.14971429,5.99314286 L5.14971429,7.704 L2.58211628,7.70557297 L2.58211628,8.56174256 L5.14971429,8.56114286 L5.15063002,11.1302513 L5.96161808,11.1302513 L5.96057143,8.56114286 L8.57531501,8.56174256 L8.57531501,7.70557297 L5.96057143,7.704 L5.96057143,5.99314286 L8.57531501,5.99323381 L8.57531501,5.13706426 L5.82342857,5.136 L5.99684637,5.00637548 L8.57531501,3.19686284 L7.7390536,2.56855551 Z M16.7142857,7.71427068 L11.5714286,7.71427068 C11.3347351,7.71427068 11.1428571,7.90614865 11.1428571,8.14284211 C11.1428571,8.37953557 11.3347351,8.57141354 11.5714286,8.57141354 L11.5714286,8.57141354 L16.7142857,8.57141354 C16.9509792,8.57141354 17.1428571,8.37953557 17.1428571,8.14284211 C17.1428571,7.90614865 16.9509792,7.71427068 16.7142857,7.71427068 L16.7142857,7.71427068 Z M16.7142857,3.42856474 L11.5714286,3.42856474 C11.3347351,3.42856474 11.1428571,3.62044271 11.1428571,3.85713616 C11.1428571,4.09382965 11.3347351,4.28570759 11.5714286,4.28570759 L11.5714286,4.28570759 L16.7142857,4.28570759 C16.9509792,4.28570759 17.1428571,4.09382965 17.1428571,3.85713616 C17.1428571,3.62044271 16.9509792,3.42856474 16.7142857,3.42856474 L16.7142857,3.42856474 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PaymentRequest.displayName = 'PaymentRequest';
export default PaymentRequest;
