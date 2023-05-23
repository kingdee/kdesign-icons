import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PersonsTwo = ({
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
          id="123.多人"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="多人"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M9.42857143,0 C12.7422799,0 15.4285714,2.74225591 15.4285714,6.125 C15.4285714,8.20857425 14.4094339,10.0491572 12.8522742,11.1556099 C16.3667166,12.5528379 18.8571429,16.0420248 18.8571429,20.125 C18.8571429,20.6082491 18.4733869,21 18,21 C17.5266131,21 17.1428571,20.6082491 17.1428571,20.125 C17.1428571,15.7757576 13.6890537,12.25 9.42857143,12.25 C5.16808907,12.25 1.71428571,15.7757576 1.71428571,20.125 C1.71428571,20.6082491 1.33052977,21 0.857142857,21 C0.383755941,21 0,20.6082491 0,20.125 C0,16.0420248 2.49042627,12.5528379 6.00517953,11.1540824 C4.44770902,10.0491572 3.42857143,8.20857425 3.42857143,6.125 C3.42857143,2.74225591 6.11486293,0 9.42857143,0 Z M14.5714286,0 C17.885137,0 20.5714286,2.74225591 20.5714286,6.125 C20.5714286,8.20857425 19.552291,10.0491572 17.9951313,11.1556099 C21.5095737,12.5528379 24,16.0420248 24,20.125 C24,20.6082491 23.616244,21 23.1428571,21 C22.6694703,21 22.2857143,20.6082491 22.2857143,20.125 C22.2857143,17.1503224 20.6700536,14.5608643 18.2856732,13.2212112 C17.5597716,12.2527782 16.6847758,11.4063635 15.6956283,10.7182848 C15.8018855,10.5672026 15.9037167,10.4113377 16.0001218,10.2516944 C17.6641325,9.65104095 18.8571429,8.03024426 18.8571429,6.125 C18.8571429,4.21975576 17.6641325,2.59895908 15.999104,1.99862264 C15.5418249,1.23938301 14.9609026,0.56584696 14.2855543,0.006484184 C14.3802849,0.00229362 14.4755943,0 14.5714286,0 Z M9.42857143,1.75 C7.06163682,1.75 5.14285714,3.70875422 5.14285714,6.125 C5.14285714,8.54124575 7.06163682,10.5 9.42857143,10.5 C11.795506,10.5 13.7142857,8.54124575 13.7142857,6.125 C13.7142857,3.70875422 11.795506,1.75 9.42857143,1.75 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PersonsTwo.displayName = 'PersonsTwo';
export default PersonsTwo;
