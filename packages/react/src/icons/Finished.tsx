import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Finished = ({
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
          id="204.Toast-完成、正确"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Toast-完成、正确"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,0.857142857 C5.84596992,0.857142857 0.857142857,5.84596992 0.857142857,12 C0.857142857,18.15403 5.84596992,23.1428571 12,23.1428571 C18.15403,23.1428571 23.1428571,18.15403 23.1428571,12 C23.1428571,5.84596992 18.15403,0.857142857 12,0.857142857 Z M17.2812301,7.42408723 L17.8521278,7.99498491 C17.9343722,8.07722932 17.9359919,8.21006573 17.8557772,8.29429097 L9.61338882,16.9487989 C9.53177041,17.0344982 9.39613251,17.0378065 9.31043323,16.956188 L9.29416893,16.9388807 L6.09744543,12.1461681 C6.04078508,12.0611776 6.05199097,11.9480091 6.12421904,11.875781 L6.70561997,11.29438 C6.78930374,11.2106962 6.92498194,11.2106962 7.00866575,11.29438 L9.42857143,13.7142857 L16.9925248,7.41099121 C17.0776662,7.34004008 17.2028619,7.34571909 17.2812301,7.42408723 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Finished.displayName = 'Finished';
export default Finished;
