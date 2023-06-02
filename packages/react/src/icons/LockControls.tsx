import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const LockControls = ({
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
          id="1455-锁定控件"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M11.5555556,0 C14.9204015,0 17.6614211,2.67091857 17.7741698,6.0083113 L17.7777778,6.22222222 L17.7777778,8.88888889 L20.4444444,8.88888889 C20.9002985,8.88888889 21.2760064,9.23203573 21.3273531,9.67411459 L21.3333333,9.77777778 L21.3333333,23.1111111 C21.3333333,23.6020308 20.9353642,24 20.4444444,24 L20.4444444,24 L0.888888889,24 C0.397969152,24 0,23.6020308 0,23.1111111 L0,23.1111111 L0,9.77777778 C0,9.28685804 0.397969152,8.88888889 0.888888889,8.88888889 L0.888888889,8.88888889 L3.55555556,8.88888889 L3.55555556,6.22222222 C3.55555556,2.85737626 6.22647413,0.116356722 9.56386685,0.00360800711 L9.77777778,0 L11.5555556,0 Z M19.5555556,10.6666667 L1.77777778,10.6666667 L1.77777778,22.2222222 L19.5555556,22.2222222 L19.5555556,10.6666667 Z M10.6666667,14.2222222 C11.1225207,14.2222222 11.4982286,14.5653691 11.5495754,15.0074479 L11.5555556,15.1111111 L11.5555556,18.6666667 C11.5555556,19.1575864 11.1575864,19.5555556 10.6666667,19.5555556 C10.2108126,19.5555556 9.83510471,19.2124087 9.78375797,18.7703299 L9.77777778,18.6666667 L9.77777778,15.1111111 C9.77777778,14.6201914 10.1757469,14.2222222 10.6666667,14.2222222 Z M11.5555556,1.77777778 L9.77777778,1.77777778 C7.38777361,1.77777778 5.4383839,3.66427261 5.33743954,6.02943147 L5.33333333,6.22222222 L5.33333333,8.88888889 L16,8.88888889 L16,6.22222222 C16,3.83221806 14.1135052,1.88282834 11.7483463,1.78188399 L11.5555556,1.77777778 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
LockControls.displayName = 'LockControls';
export default LockControls;