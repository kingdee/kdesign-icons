import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Repeat = ({
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
          id="319.疑似重复"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="疑似重复"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M9.42857143,0 C12.7422799,0 15.4285714,2.74219079 15.4285714,6.12485456 C15.4285714,8.20837934 14.4094339,10.0489186 12.8522742,11.1553451 C16.3667166,12.5525399 18.8571429,16.0416439 18.8571429,20.1245221 C18.8571429,20.6077598 18.4733869,20.9995014 18,20.9995014 L0.857142857,20.9995014 L0.857142857,20.9995014 C0.383755941,20.9995014 0,20.6077598 0,20.1245221 C0,16.0416439 2.49042627,12.5525399 6.00517953,11.1538176 C4.44770902,10.0489186 3.42857143,8.20837934 3.42857143,6.12485456 C3.42857143,2.74219079 6.11486293,0 9.42857143,0 Z M14.5714286,0 C17.885137,0 20.5714286,2.74219079 20.5714286,6.12485456 C20.5714286,8.20837934 19.552291,10.0489186 17.9951313,11.1553451 C21.5095737,12.5525399 24,16.0416439 24,20.1245221 C24,20.6077598 23.616244,20.9995014 23.1428571,20.9995014 L20.5389146,21 C20.5604592,20.7110577 20.5714286,20.4190976 20.5714286,20.1245221 C20.5714286,16.2145677 18.638866,12.76538 15.6956283,10.7180302 C16.6061494,9.42578001 17.1428571,7.83929891 17.1428571,6.12485456 C17.1428571,3.6547561 16.028769,1.45028156 14.2855543,0.00648403003 C14.3802849,0.00229356554 14.4755943,0 14.5714286,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Repeat.displayName = 'Repeat';
export default Repeat;
