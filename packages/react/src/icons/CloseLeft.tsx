import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CloseLeft = ({
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
          id="1253-左收起"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#666666"
            fillRule="nonzero"
          >
            <path
              d="M0,0 C1.58627729,0 4.01236178,0 7.18491635,0 C13.8206638,0 19.2,5.37258301 19.2,12 C19.2,18.627417 13.8206638,24 7.18491635,24 C3.99162019,24 1.59664808,24 0,24 M0,22.4 L7.2,22.4 C12.9437614,22.4 17.6,17.7437614 17.6,12 L17.5934352,11.6269854 C17.397041,6.05599394 12.818897,1.6 7.2,1.6 L0,1.6"
              id="形状结合"
              transform="translate(9.600000, 12.000000) scale(-1, 1) translate(-9.600000, -12.000000) "
              fill={color}
            ></path>
            <path
              d="M12.710182,14.8209451 C12.0424554,15.7265949 10.9594979,15.7261083 10.2921301,14.8209451 L6.84078589,10.139824 C6.17305928,9.2341742 6.51407725,8.50000001 7.62308601,8.50000001 L15.3792261,8.50000001 C16.4790051,8.50000001 16.8288941,9.23466082 16.1615262,10.139824 L12.710182,14.8209451 Z"
              id="Path-Copy-2"
              transform="translate(11.500000, 12.000000) rotate(90.000000) translate(-11.500000, -12.000000) "
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CloseLeft.displayName = 'CloseLeft';
export default CloseLeft;
