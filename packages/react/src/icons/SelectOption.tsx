import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SelectOption = ({
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
          id="172.消息"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="消息"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M6,5.07692307 L18,5.07692307 C18.4733869,5.07692307 18.8571429,5.45575909 18.8571429,5.92307692 C18.8571429,6.39039474 18.4733869,6.76923076 18,6.76923076 L6,6.76923076 C5.52661308,6.76923076 5.14285714,6.39039474 5.14285714,5.92307692 C5.14285714,5.45575909 5.52661308,5.07692307 6,5.07692307 Z M6,10.1538461 L11.1428571,10.1538461 C11.616244,10.1538461 12,10.5326822 12,11 C12,11.4673178 11.616244,11.8461538 11.1428571,11.8461538 L6,11.8461538 C5.52661308,11.8461538 5.14285714,11.4673178 5.14285714,11 C5.14285714,10.5326822 5.52661308,10.1538461 6,10.1538461 Z M6,15.2307692 C6.47338692,15.2307692 6.85714286,15.6096052 6.85714286,16.0769231 C6.85714286,16.5442409 6.47338692,16.9230769 6,16.9230769 L3.42857143,16.9230769 C1.53502371,16.9230769 0,15.407733 0,13.5384615 L0,3.38461538 C0,1.51534391 1.53502371,0 3.42857143,0 L20.5714286,0 C22.4649763,0 24,1.51534391 24,3.38461538 L24,13.5384615 C24,15.407733 22.4649763,16.9230769 20.5714286,16.9230769 L13.2121831,16.9230769 L8.32037727,21.7521673 C7.98564214,22.0826109 7.44292929,22.0826109 7.10819419,21.7521673 C6.77345908,21.4217236 6.77345908,20.8859686 7.10819419,20.555525 L12,15.7264346 C12.321491,15.4090654 12.7575262,15.2307692 13.2121831,15.2307692 L20.5714286,15.2307692 C21.5182024,15.2307692 22.2857143,14.4730973 22.2857143,13.5384615 L22.2857143,3.38461538 C22.2857143,2.44997965 21.5182024,1.69230769 20.5714286,1.69230769 L3.42857143,1.69230769 C2.48179757,1.69230769 1.71428571,2.44997965 1.71428571,3.38461538 L1.71428571,13.5384615 C1.71428571,14.4730973 2.48179757,15.2307692 3.42857143,15.2307692 L6,15.2307692 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SelectOption.displayName = 'SelectOption';
export default SelectOption;
