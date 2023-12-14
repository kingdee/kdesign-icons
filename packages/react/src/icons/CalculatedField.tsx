import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CalculatedField = ({
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
          id="1433-计算字段"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0,0.857142857 C0,0.383755721 0.383755968,0 0.857142857,0 L19.7142857,0 C20.1876726,0 20.5714286,0.383755721 20.5714286,0.857142857 L20.5714286,23.1428571 C20.5714286,23.6162443 20.1876726,24 19.7142857,24 L0.857142857,24 C0.383755968,24 0,23.6162443 0,23.1428571 L0,0.857142857 Z M1.71428571,1.71428571 L1.71428571,22.2857143 L18.8571429,22.2857143 L18.8571429,1.71428571 L1.71428571,1.71428571 Z M4.28571429,4.28571429 L16.2857143,4.28571429 L16.2857143,6.85714286 L4.28571429,6.85714286 L4.28571429,4.28571429 Z M4.28571429,9.42857143 L6,9.42857143 L6,11.1428571 L4.28571429,11.1428571 L4.28571429,9.42857143 Z M9.42857143,9.42857143 L11.1428571,9.42857143 L11.1428571,11.1428571 L9.42857143,11.1428571 L9.42857143,9.42857143 Z M14.5714286,9.42857143 L16.2857143,9.42857143 L16.2857143,11.1428571 L14.5714286,11.1428571 L14.5714286,9.42857143 Z M14.5714286,13.7142857 L16.2857143,13.7142857 L16.2857143,15.4285714 L14.5714286,15.4285714 L14.5714286,13.7142857 Z M14.5714286,18 L16.2857143,18 L16.2857143,19.7142857 L14.5714286,19.7142857 L14.5714286,18 Z M9.42857143,13.7142857 L11.1428571,13.7142857 L11.1428571,15.4285714 L9.42857143,15.4285714 L9.42857143,13.7142857 Z M9.42857143,18 L11.1428571,18 L11.1428571,19.7142857 L9.42857143,19.7142857 L9.42857143,18 Z M4.28571429,13.7142857 L6,13.7142857 L6,15.4285714 L4.28571429,15.4285714 L4.28571429,13.7142857 Z M4.28571429,18 L6,18 L6,19.7142857 L4.28571429,19.7142857 L4.28571429,18 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CalculatedField.displayName = 'CalculatedField';
export default CalculatedField;
