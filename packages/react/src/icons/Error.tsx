import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Error = ({
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
          id="201.错误、危险"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="错误、危险"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,0.857142857 C5.84596992,0.857142857 0.857142857,5.84596992 0.857142857,12 C0.857142857,18.15403 5.84596992,23.1428571 12,23.1428571 C18.15403,23.1428571 23.1428571,18.15403 23.1428571,12 C23.1428571,5.84596992 18.15403,0.857142857 12,0.857142857 Z M15.9942725,7.42284395 L16.5771561,8.00572748 C16.6550025,8.08357396 16.6611941,8.20774371 16.5914779,8.29294818 L13.5582857,12 L16.5914779,15.7070518 C16.6611941,15.7922563 16.6550025,15.916426 16.5771561,15.9942725 L15.9942725,16.5771561 C15.916426,16.6550025 15.7922563,16.6611941 15.7070518,16.5914779 L12,13.5582857 L8.29294818,16.5914779 C8.20774371,16.6611941 8.08357396,16.6550025 8.00572748,16.5771561 L7.42284395,15.9942725 C7.34499747,15.916426 7.33880588,15.7922563 7.40852212,15.7070518 L10.4417143,12 L7.40852212,8.29294818 C7.33880588,8.20774371 7.34499747,8.08357396 7.42284395,8.00572748 L8.00572748,7.42284395 C8.08357396,7.34499747 8.20774371,7.33880588 8.29294818,7.40852212 L12,10.4417143 L15.7070518,7.40852212 C15.7922563,7.33880588 15.916426,7.34499747 15.9942725,7.42284395 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Error.displayName = 'Error';
export default Error;
