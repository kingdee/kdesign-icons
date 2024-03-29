import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const WarningOne = ({
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
          id="189.状态_警示"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="状态_警示"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,16.5 C11.1715729,16.5 10.5,17.1715729 10.5,18 C10.5,18.8284271 11.1715729,19.5 12,19.5 C12.8284271,19.5 13.5,18.8284271 13.5,18 C13.5,17.1715729 12.8284271,16.5 12,16.5 Z M12,4.5 L11.9004907,4.50354938 L11.9004907,4.50354938 C11.1860441,4.55458128 10.6356228,5.13444494 10.6046383,5.83305026 L10.6068706,5.99618806 L11.2002454,14.3034353 C11.2251647,14.6523055 11.4859727,14.9313341 11.8199752,14.9890334 L11.9483394,15 L12.0516606,15 C12.4014197,15 12.698321,14.7597348 12.7796704,14.4306919 L12.7997546,14.3034353 L13.3966788,5.8966788 L13.3966788,5.8966788 C13.3966788,5.12531441 12.7713644,4.5 12,4.5 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
WarningOne.displayName = 'WarningOne';
export default WarningOne;
