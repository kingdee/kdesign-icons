import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AdjustTheLayout = ({
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
          id="982.调整布局"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0.396869577,14.6086956 L0,14.6086956 L0,13.3913043 L0.396869577,13.3913043 L5.26643481,8.52173911 L6.08695652,9.34226085 L2.03791307,13.3913043 L9.73913043,13.3913043 L9.73913043,14.6086956 L2.03791307,14.6086956 L6.08695652,18.6577391 L5.26643481,19.4782609 L0.396869577,14.6086956 Z M25.962087,14.6086956 L18.2608696,14.6086956 L18.2608696,13.3913043 L25.962087,13.3913043 L21.9130435,9.34226085 L22.7335652,8.52173911 L27.6031305,13.3913043 L28,13.3913043 L28,14.6086956 L27.6031305,14.6086956 L22.7335652,19.4782609 L21.9130435,18.6577391 L25.962087,14.6086956 Z M13.3913044,25.9620869 L13.3913044,18.2608696 L14.6086957,18.2608696 L14.6086957,25.9620869 L18.6577391,21.9130435 L19.4782609,22.7335652 L14.6086957,27.6031304 L14.6086957,28 L13.3913044,28 L13.3913044,27.6031304 L8.52173914,22.7335652 L9.34226088,21.9130435 L13.3913044,25.9620869 Z M13.3913044,0.396869546 L13.3913044,-5.85682871e-16 L14.6086957,-5.85682871e-16 L14.6086957,0.396869546 L19.4782609,5.26643478 L18.6577391,6.08695652 L14.6086957,2.03791304 L14.6086957,9.73913043 L13.3913044,9.73913043 L13.3913044,2.03791304 L9.34226088,6.08695652 L8.52173914,5.26643478 L13.3913044,0.396869546 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AdjustTheLayout.displayName = 'AdjustTheLayout';
export default AdjustTheLayout;
