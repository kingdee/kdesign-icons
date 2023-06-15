import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BeginnerGuide = ({
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
          id="1271-新手引导"
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
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,1.71428571 C6.31935686,1.71428571 1.71428571,6.31935686 1.71428571,12 C1.71428571,17.6806431 6.31935686,22.2857143 12,22.2857143 C17.6806431,22.2857143 22.2857143,17.6806431 22.2857143,12 C22.2857143,6.31935686 17.6806431,1.71428571 12,1.71428571 Z M18.8571429,5.14285714 L15.4488589,15.4488588 L5.14285714,18.8571429 L8.55114119,8.55114111 L18.8571429,5.14285714 Z M9.6067759,10.8144636 L7.83942857,16.1588571 L13.182716,14.3904036 L9.6067759,10.8144636 Z M16.1588571,7.83942857 L10.8201711,9.60349278 L14.3936868,13.1770083 L16.1588571,7.83942857 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BeginnerGuide.displayName = 'BeginnerGuide';
export default BeginnerGuide;
