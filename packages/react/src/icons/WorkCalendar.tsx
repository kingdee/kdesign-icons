import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const WorkCalendar = ({
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
          id="1294-工作日历"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18,0 C18.4733869,0 18.8571429,0.383755941 18.8571429,0.857142857 L18.8571429,1.71428571 L22.1538461,1.71428571 C23.1291183,1.71428571 23.927761,2.41650827 23.9953647,3.30614414 L24,3.42857143 L24,19.7142857 C24,20.6610596 23.1734487,21.4285714 22.1538461,21.4285714 L22.1538461,21.4285714 L1.84615384,21.4285714 C0.826551223,21.4285714 0,20.6610596 0,19.7142857 L0,19.7142857 L0,3.42857143 C0,2.48179757 0.826551223,1.71428571 1.84615384,1.71428571 L1.84615384,1.71428571 L4.28571429,1.71428571 L4.28571429,0.857142857 C4.28571429,0.383755941 4.66947023,0 5.14285714,0 C5.61624406,0 6,0.383755941 6,0.857142857 L6,1.71428571 L17.1428571,1.71428571 L17.1428571,0.857142857 C17.1428571,0.383755941 17.5266131,0 18,0 Z M22.2857143,8.57142857 L1.71428571,8.57142857 L1.71428571,19.7142857 L22.2857143,19.7142857 L22.2857143,8.57142857 Z M17.750673,10.5384948 C18.0587776,10.8483601 18.0811605,11.3346239 17.8187537,11.6701273 L17.7472195,11.750673 L11.7129338,17.750673 C11.380292,18.0814247 10.8503787,18.0797912 10.5193733,17.7655431 L10.4466987,17.6874839 L7.05241295,13.5624839 C6.75162388,13.1969416 6.80411671,12.6567734 7.16965895,12.3559844 C7.50708258,12.0783329 7.99329995,12.1017028 8.30268472,12.3944498 L8.37615848,12.4732304 L11.1711429,15.87 L16.5384948,10.5350413 C16.8741822,10.2012612 17.4168928,10.2028074 17.750673,10.5384948 Z M4.28571429,3.42857143 L1.71428571,3.42857143 L1.71428571,6.85714286 L22.2857143,6.85714286 L22.2857143,3.42857143 L18.8571429,3.42857143 L18.8571429,4.28571429 C18.8571429,4.7591012 18.4733869,5.14285714 18,5.14285714 C17.5266131,5.14285714 17.1428571,4.7591012 17.1428571,4.28571429 L17.1428571,3.42857143 L6,3.42857143 L6,4.28571429 C6,4.7591012 5.61624406,5.14285714 5.14285714,5.14285714 C4.66947023,5.14285714 4.28571429,4.7591012 4.28571429,4.28571429 L4.28571429,3.42857143 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
WorkCalendar.displayName = 'WorkCalendar';
export default WorkCalendar;
