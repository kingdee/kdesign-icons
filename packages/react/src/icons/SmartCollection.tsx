import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SmartCollection = ({
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
          id="857.智能收款"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M27.9999647,5.89470669 L7.16217434e-05,5.89470669 L7.16217434e-05,1.48399241 C7.16217434e-05,0.663154502 0.663226124,0 1.46637991,0 L26.5336201,0 C26.9249787,0.00194719498 27.2994898,0.159486772 27.5745619,0.437876305 C27.849634,0.716265837 28.0026728,1.09263854 27.9999647,1.48399241 L27.9999647,5.89470669 Z M27.9999284,7.36838336 L27.9999284,19.147481 C27.9999284,19.9668452 27.3367739,20.6314734 26.5336201,20.6314734 L1.46637991,20.6314734 C1.07502126,20.6295262 0.700510169,20.4719866 0.425438089,20.1935971 C0.150366009,19.9152076 -0.00267276676,19.5388349 3.53383006e-05,19.147481 L3.53383006e-05,7.36838336 L27.9999284,7.36838336 Z M13.2631617,14.7367667 L13.2631617,17.6841201 L16.210515,17.6841201 L16.210515,14.7367667 L13.2631617,14.7367667 Z M17.6841917,14.7367667 L17.6841917,17.6841201 L20.631545,17.6841201 L20.631545,14.7367667 L17.6841917,14.7367667 Z M22.1052217,14.7367667 L22.1052217,17.6841201 L25.052575,17.6841201 L25.052575,14.7367667 L22.1052217,14.7367667 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SmartCollection.displayName = 'SmartCollection';
export default SmartCollection;
