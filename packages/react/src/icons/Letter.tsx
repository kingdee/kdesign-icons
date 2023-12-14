import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Letter = ({
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
          id="177.邮件、信件"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="邮件、信件"
            transform="translate(4.000000, 7.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M24,0.849933303 L24,16.1488889 C24,16.6182771 23.6164254,16.9987982 23.1433005,16.9988657 L0.85674336,17 C0.383601298,17.0006138 0,16.6201052 0,16.1507 C0,16.1505026 0,16.1503051 0.000596900571,16.1501081 L0.0105533074,0.849933303 C0.0114118766,0.38074265 0.39487979,0.000548880128 0.867805906,0 L23.1433005,0 C23.6164426,0 24,0.380528113 24,0.849933303 Z M3.61163509,1.70002278 L12.0062065,7.46574878 L20.4007779,1.70002278 L3.61163509,1.70002278 Z M22.2866009,2.47224525 L12.4938484,9.1982977 C12.2004762,9.39979744 11.8119368,9.39979744 11.5185646,9.1982977 L1.72581208,2.47224525 L1.72581208,15.2989556 L22.2866009,15.2989556 L22.2866009,2.47224525 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Letter.displayName = 'Letter';
export default Letter;
