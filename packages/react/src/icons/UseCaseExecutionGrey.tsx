import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const UseCaseExecutionGrey = ({
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
          id="1471-用例执行-灰色"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.5,4.39349999 L1.5,21.105 L18,21.105 L18,4.39499999 L1.5,4.39499999 L1.5,4.39349999 Z M19.5,19.5 L19.5,21.1065 C19.5,21.876 18.828,22.5 18,22.5 L1.5,22.5 C0.671999994,22.5 -2.39808173e-16,21.876 -2.39808173e-16,21.1065 L-2.39808173e-16,4.39499999 C-2.39808173e-16,3.62399999 0.671999994,3 1.5,3 L4.5,3 L4.5,1.5 C4.5,0.671572887 5.17157287,0 6,0 L22.5,0 C23.3284271,0 24,0.671572877 24,1.5 L24,18 C24,18.8284271 23.3284271,19.5 22.5,19.5 L19.5,19.5 L19.5,19.5 Z M19.5,18 L22.5,18 L22.5,1.5 L5.99999999,1.5 L5.99999999,3 L18,3 C18.828,3 19.5,3.62400001 19.5,4.39349999 L19.5,18 L19.5,18 Z M12.546,11.742 L8.304,7.49999999 L7.24199999,8.56050001 L11.4855,12.804 L7.24199999,17.046 L8.304,18.1065 L13.6065,12.804 L12.546,11.742 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
UseCaseExecutionGrey.displayName = 'UseCaseExecutionGrey';
export default UseCaseExecutionGrey;
