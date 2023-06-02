import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OutputValue = ({
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
          id="713.产值"
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
              d="M17.5714286,11.1429039 C21.1218305,11.1429039 24,14.0210735 24,17.5714753 C24,21.1218772 21.1218305,24.0000468 17.5714286,24.0000468 C14.0210267,24.0000468 11.1428571,21.1218772 11.1428571,17.5714753 C11.1428571,14.0210735 14.0210267,11.1429039 17.5714286,11.1429039 Z M19.7390536,13.7114177 L17.5782313,15.3034481 L15.4183777,13.7114177 L14.5821163,14.3397262 L17.1605849,16.1492424 L17.3346939,16.2789583 L14.5821163,16.2799314 L14.5821163,17.1361027 L17.1496599,17.1361012 L17.1496599,18.8476658 L14.5821163,18.8484451 L14.5821163,19.7046164 L17.1496599,19.7034481 L17.1506301,22.2731302 L17.9616181,22.2731302 L17.9605442,19.7034481 L20.575315,19.7046164 L20.575315,18.8484451 L17.9605442,18.8476658 L17.9605442,17.1361012 L20.575315,17.1361027 L20.575315,16.2799314 L17.8217687,16.2789583 L17.9968464,16.1492424 L20.575315,14.3397262 L19.7390536,13.7114177 Z M18.8571429,2.30305783e-16 C19.3305298,2.30305783e-16 19.7142857,0.383755935 19.7142857,0.857142857 L19.7151838,10.5414253 C19.0945296,10.3746836 18.442003,10.2857611 17.7687075,10.2857611 C13.6359645,10.2857611 10.2857143,13.6360113 10.2857143,17.7687543 C10.2857143,19.4659356 10.8507254,21.0311517 11.80291,22.2865647 L0.857142857,22.2857611 C0.383755935,22.2857611 0,21.9020052 0,21.4286182 L0,0.857142857 C0,0.383755935 0.383755935,2.30305783e-16 0.857142857,2.30305783e-16 L18.8571429,2.30305783e-16 Z M9.85714286,12.0000468 L5.57142857,12.0000468 C5.33473511,12.0000468 5.14285714,12.1919247 5.14285714,12.4286182 C5.14285714,12.6653117 5.33473511,12.8571896 5.57142857,12.8571896 L5.57142857,12.8571896 L9.85714286,12.8571896 C10.0938363,12.8571896 10.2857143,12.6653117 10.2857143,12.4286182 C10.2857143,12.1919247 10.0938363,12.0000468 9.85714286,12.0000468 L9.85714286,12.0000468 Z M13.2857143,8.57147535 L5.57142857,8.57147535 C5.33473511,8.57147535 5.14285714,8.76335331 5.14285714,9.00004678 C5.14285714,9.23674024 5.33473511,9.4286182 5.57142857,9.4286182 L5.57142857,9.4286182 L13.2857143,9.4286182 C13.5224077,9.4286182 13.7142857,9.23674024 13.7142857,9.00004678 C13.7142857,8.76335331 13.5224077,8.57147535 13.2857143,8.57147535 L13.2857143,8.57147535 Z M13.2857143,5.14290392 L5.57142857,5.14290392 C5.33473511,5.14290392 5.14285714,5.33478189 5.14285714,5.57147535 C5.14285714,5.80816881 5.33473511,6.00004678 5.57142857,6.00004678 L5.57142857,6.00004678 L13.2857143,6.00004678 C13.5224077,6.00004678 13.7142857,5.80816881 13.7142857,5.57147535 C13.7142857,5.33478189 13.5224077,5.14290392 13.2857143,5.14290392 L13.2857143,5.14290392 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
OutputValue.displayName = 'OutputValue';
export default OutputValue;